"use client";

import Image from "next/image";
import Link from "next/link";
import { Bookmark, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const SAVED_LESSONS = [
  {
    id: 1,
    title: "Navigating Middle-Management Burnout",
    description:
      "Strategies for maintaining your passion when you're caught between two worlds.",
    author: "@david_ross",
    authorHref: "/user/david_ross",
    date: "Nov 14, 2024",
    saveCount: "1.2k",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
    href: "/lessons/middle-management-burnout",
  },
  {
    id: 2,
    title: "The Power of the 'No' Framework",
    description:
      "How to decline opportunities without burning bridges or losing respect.",
    author: "@clara_m",
    authorHref: "/user/clara_m",
    date: "Nov 12, 2024",
    saveCount: "940",
    imageUrl:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
    href: "/lessons/no-framework",
  },
  {
    id: 3,
    title: "Time as a Non-Renewable Asset",
    description:
      "Revisiting the concept of 'leisure' in an era of hyper-productivity.",
    author: "@prof_henry",
    authorHref: "/user/prof_henry",
    date: "Nov 10, 2024",
    saveCount: "821",
    imageUrl:
      "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=600&auto=format&fit=crop",
    href: "/lessons/time-non-renewable-asset",
  },
];

export default function MostSavedLessons() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative w-full overflow-hidden">
      {/* Subtle background treatment */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.02) 0%, rgba(255,255,255,0.04) 50%, rgba(255,255,255,0.02) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Ambient light blob */}
      <div
        className="absolute bottom-0 left-1/4 w-[600px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(195, 192, 255, 0.04), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="px-gutter max-w-7xl mx-auto w-full relative z-10">
        {/* Header Block with Title Icon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <motion.div
            className="p-3 glass-panel rounded-xl text-primary flex items-center justify-center"
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <Star className="w-6 h-6 fill-primary stroke-none" />
          </motion.div>
          <h2 className="font-headline-md text-3xl text-white">
            Most Saved This Week
          </h2>
        </motion.div>

        {/* 3-Column Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full"
        >
          {SAVED_LESSONS.map((lesson) => (
            <motion.article
              key={lesson.id}
              variants={fadeInUp}
              className="flex flex-col group w-full"
            >
              {/* Image Frame Container with Floating Counter */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="aspect-video rounded-2xl relative overflow-hidden mb-6 w-full"
                style={{
                  background: "rgba(255, 255, 255, 0.03)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <Image
                  src={lesson.imageUrl}
                  alt={lesson.title}
                  fill
                  sizes="(max-w-768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Save Count Overlay Badge */}
                <motion.div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5 border border-white/20 z-10"
                  style={{ background: "rgba(0, 0, 0, 0.6)" }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Bookmark className="w-3 h-3 fill-primary text-primary stroke-none" />
                  <span className="text-xs font-bold text-white">
                    {lesson.saveCount}
                  </span>
                </motion.div>

                {/* Bottom gradient */}
                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
              </motion.div>

              {/* Title Header */}
              <h4 className="font-headline-md text-xl mb-3 text-white group-hover:text-primary transition-colors duration-300">
                <Link href={lesson.href}>{lesson.title}</Link>
              </h4>

              {/* Sub-description Blurb */}
              <p className="text-on-surface-variant text-sm mb-6 leading-relaxed flex-grow">
                {lesson.description}
              </p>

              {/* Action and Timeline Metadata Footer */}
              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                <Link
                  href={lesson.authorHref}
                  className="text-primary font-medium text-xs hover:underline transition-all"
                >
                  {lesson.author}
                </Link>
                <span className="text-xs text-on-surface-variant">
                  {lesson.date}
                </span>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
