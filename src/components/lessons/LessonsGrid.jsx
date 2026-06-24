"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer } from "@/lib/animations";
import LessonCard from "./LessonCard";
import Link from 'next/link';
import { useSearchParams } from "next/navigation";



export default function LessonsGrid({ lessons }) {
  const [savedIds, setSavedIds] = useState([]);
  const searchParams = useSearchParams();
  const currentPage = parseInt(searchParams.get("page") || "1");
const LESSONS_LIST = lessons?.lessons || [];
console.log("Lessons data:", lessons);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const toggleBookmark = (id, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  return (
    <section className="w-full pb-24 pt-8 px-gutter bg-[#F6F0DD] text-[#1C1611]">
      <div ref={ref} className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16"
        >
          {LESSONS_LIST.map((lesson) => (
            <LessonCard
              key={lesson._id || lesson.id} 
    lesson={lesson}
    isSaved={savedIds.includes(lesson._id || lesson.id)}
    onToggleSave={toggleBookmark}
            />
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center justify-center w-full gap-4"
        >
          <div className="flex items-center gap-2">
            
            {/* Prev Button */}
            <Link 
          href={`?page=${Math.max(1, currentPage - 1)}`}
          className="w-9 h-9 border-2 border-black flex items-center justify-center"
        >
          <ChevronLeft />
        </Link>

        {/* Dynamic Page Indicators */}
        <span className="font-black">Page {currentPage}</span>

        {/* Next Button */}
        <Link 
          href={`?page=${currentPage + 1}`}
          className="w-9 h-9 border-2 border-black flex items-center justify-center"
        >
          <ChevronRight />
        </Link>
          </div>

          <p className="text-[11px] font-black tracking-widest text-[#1C1611]/60 uppercase select-none">
             Showing {lessons.pagination.length} of {lessons.pagination.totalPages} lessons
          </p>
        </motion.div>
      </div>
    </section>
  );
}
