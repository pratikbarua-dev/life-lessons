"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const LESSONS_DATA = [
  {
    id: 1,
    category: "Productivity",
    readTime: "12 min read",
    title: "The Art of Deliberate Boredom",
    description:
      "How reclaiming our idle time leads to a renaissance of creative breakthroughs and personal clarity.",
    imageUrl:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=600&auto=format&fit=crop",
    href: "/lessons/deliberate-boredom",
  },
  {
    id: 2,
    category: "Leadership",
    readTime: "8 min read",
    title: "Leading Without Authority",
    description:
      "Understanding the silent influence of integrity and expertise in high-stakes environments.",
    imageUrl:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=600&auto=format&fit=crop",
    href: "/lessons/leading-without-authority",
  },
  {
    id: 3,
    category: "Philosophy",
    readTime: "15 min read",
    title: "The Geometry of Gratitude",
    description:
      "A mathematical approach to emotional stability through the lens of consistent reflection.",
    imageUrl:
      "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=600&auto=format&fit=crop",
    href: "/lessons/geometry-of-gratitude",
  },
];

export default function FeaturedLessons() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 px-gutter max-w-7xl mx-auto w-full relative">
      {/* Ambient section background */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(195, 192, 255, 0.08), transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Header Block */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex justify-between items-end mb-16 border-b border-white/10 pb-6 w-full"
      >
        <div>
          <h2 className="font-headline-lg text-4xl text-white">
            Featured Lessons
          </h2>
          <p className="text-on-surface-variant mt-2">
            Curated wisdom from our leading contributors.
          </p>
        </div>

        <Link
          href="/lessons"
          className="text-primary font-label-md flex items-center gap-2 group hover:gap-3 transition-all duration-300"
        >
          View All{" "}
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </motion.div>

      {/* Dynamic Cards Grid with stagger */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
      >
        {LESSONS_DATA.map((lesson) => (
          <motion.article
            key={lesson.id}
            variants={fadeInUp}
            whileHover={{
              y: -10,
              scale: 1.02,
              transition: { duration: 0.3, ease: "easeOut" },
            }}
            className="rounded-2xl overflow-hidden group flex flex-col w-full relative"
            style={{
              background: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              boxShadow: "0 0 0 0 rgba(195, 192, 255, 0)",
            }}
          >
            {/* Card hover glow border overlay */}
            <div
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
              style={{
                boxShadow:
                  "0 0 30px -5px rgba(195, 192, 255, 0.15), inset 0 0 0 1px rgba(195, 192, 255, 0.15)",
              }}
              aria-hidden="true"
            />

            {/* Image Scaffold Box */}
            <div className="overflow-hidden h-64 relative w-full">
              <Image
                src={lesson.imageUrl}
                alt={lesson.title}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
            </div>

            {/* Content box */}
            <div className="p-8 flex flex-col flex-1">
              {/* Meta Identifiers */}
              <div className="flex items-center gap-3 mb-4">
                <motion.span
                  className="text-primary font-label-sm uppercase tracking-widest px-2 py-1 bg-primary/10 rounded border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  {lesson.category}
                </motion.span>
                <span className="text-on-surface-variant text-xs font-medium">
                  • {lesson.readTime}
                </span>
              </div>

              {/* Title Header */}
              <h3 className="font-headline-md text-2xl mb-4 text-white group-hover:text-primary transition-colors duration-300">
                <Link href={lesson.href}>{lesson.title}</Link>
              </h3>

              {/* Blurb Copy */}
              <p className="text-on-surface-variant text-sm line-clamp-3 leading-relaxed mb-6">
                {lesson.description}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
