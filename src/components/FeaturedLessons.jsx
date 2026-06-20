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
    bgClass: "bg-[#F6F0DD]", // Warm Cream
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
    bgClass: "bg-[#4DD0B1]", // Accent Teal
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
    bgClass: "bg-[#FFB3A7]", // Accent Pink
  },
];

export default function FeaturedLessons() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 px-gutter max-w-7xl mx-auto w-full relative bg-[#F6F0DD] text-[#1C1611]">
      {/* Header Block */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 border-b-[3.5px] border-[#1C1611] pb-6 w-full gap-4"
      >
        <div>
          <h2 className="font-black text-4xl sm:text-5xl tracking-tight uppercase text-[#1C1611]">
            Featured Lessons
          </h2>
          <p className="text-[#1C1611]/80 mt-2 font-medium">
            Curated wisdom from our leading contributors.
          </p>
        </div>

        <Link
          href="/lessons"
          className="bg-[#FCD34D] text-[#1C1611] font-black uppercase text-center px-6 py-2.5 rounded-full border-[3px] border-[#1C1611] shadow-[3px_3px_0px_0px_#1C1611] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1611] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100 flex items-center justify-center gap-2 max-w-max self-start sm:self-auto"
        >
          <span>View All</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
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
            className={`rounded-2xl overflow-hidden group flex flex-col w-full relative border-[3.5px] border-[#1C1611] shadow-[6px_6px_0px_0px_#1C1611] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[4px_4px_0px_0px_#1C1611] transition-all duration-150 ${lesson.bgClass}`}
          >
            {/* Image Scaffold Box */}
            <div className="overflow-hidden h-52 relative w-full border-b-[3.5px] border-[#1C1611]">
              <Image
                src={lesson.imageUrl}
                alt={lesson.title}
                fill
                sizes="(max-w-768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out grayscale group-hover:grayscale-0 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Content box */}
            <div className="p-6 flex flex-col flex-1 text-[#1C1611]">
              {/* Meta Identifiers */}
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-[#FF4A3A] text-white font-black text-xs uppercase tracking-widest px-2.5 py-1 rounded border-2 border-[#1C1611]">
                  {lesson.category}
                </span>
                <span className="text-[#1C1611]/70 text-xs font-black uppercase">
                  {lesson.readTime}
                </span>
              </div>

              {/* Title Header */}
              <h3 className="font-black text-xl mb-3 text-[#1C1611] hover:text-[#FF4A3A] transition-colors duration-150 line-clamp-2">
                <Link href={lesson.href}>{lesson.title}</Link>
              </h3>

              {/* Blurb Copy */}
              <p className="text-[#1C1611]/80 text-sm font-medium line-clamp-3 leading-relaxed mb-6">
                {lesson.description}
              </p>

              {/* Arrow link block at the bottom */}
              <div className="mt-auto pt-4 border-t border-[#1C1611]/15 flex items-center justify-between">
                <Link 
                  href={lesson.href} 
                  className="font-black uppercase text-xs tracking-wider flex items-center gap-2 hover:text-[#FF4A3A] group-hover:translate-x-1 transition-all duration-150"
                >
                  <span>read lesson</span>
                  <ArrowRight className="w-4 h-4 stroke-[2.5px]" />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
