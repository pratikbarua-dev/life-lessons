"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer } from "@/lib/animations";
import LessonCard from "./LessonCard";

const LESSONS_LIST = [
  {
    id: 1,
    isPremium: false,
    title: "The Art of Deliberate Practice in a Distracted World",
    description:
      "How to reclaim your focus and master complex skills by designing an environment that prioritizes deep work over shallow tasks.",
    imageUrl:
      "https://images.unsplash.com/photo-1516414447565-b14be0adf13e?q=80&w=500&auto=format&fit=crop",
    tags: ["CAREER", "REFLECTIVE"],
    author: { name: "Julian Ross", initials: "JR" },
    href: "/lessons/deliberate-practice",
  },
  {
    id: 2,
    isPremium: true,
    title: "Stoic Resilience: Building an Inner Citadel",
    description:
      "An advanced framework on classical wisdom applied to modern executive workloads and emotional regulation architectures.",
    imageUrl:
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=500&auto=format&fit=crop",
    tags: ["WELLNESS"],
    author: { name: "Marcus Kane", initials: "MK" },
    href: "/premium/stoic-resilience",
  },
  {
    id: 3,
    isPremium: false,
    title: "The Joy of Small Wins: Rebounding from Burnout",
    description:
      "Learning to celebrate micro-progress as a sustainable strategy for long-term creative health and emotional recovery.",
    imageUrl:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=500&auto=format&fit=crop",
    tags: ["PERSONAL", "OPTIMISTIC"],
    author: { name: "Marcus Kane", initials: "MK" },
    href: "/lessons/small-wins",
  },
  {
    id: 4,
    isPremium: false,
    title: "The Founder's Mental Model: Navigating Uncertainty",
    description:
      "Mental frameworks used by successful entrepreneurs to make high-stakes decisions with imperfect information.",
    imageUrl:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=500&auto=format&fit=crop",
    tags: ["CAREER", "OPTIMISTIC"],
    author: { name: "Sarah Liao", initials: "SL" },
    href: "/lessons/founders-mental-model",
  },
  {
    id: 5,
    isPremium: true,
    title: "Algorithmic Living: Optimizing Your Decision Tree",
    description:
      "Applying computer science logic parameters to personal workflows and daily choice-making matrices.",
    imageUrl:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=500&auto=format&fit=crop",
    tags: ["CAREER"],
    author: { name: "Sarah Liao", initials: "SL" },
    href: "/premium/algorithmic-living",
  },
  {
    id: 6,
    isPremium: false,
    title: "The Social Battery: A Field Guide to Modern Networking",
    description:
      "Developing an authentic approach to professional relationships without sacrificing your mental energy.",
    imageUrl:
      "https://images.unsplash.com/photo-1491336477066-31156b5e4f35?q=80&w=500&auto=format&fit=crop",
    tags: ["WELLNESS", "REFLECTIVE"],
    author: { name: "Toni Bennett", initials: "TB" },
    href: "/lessons/social-battery",
  },
];

export default function LessonsGrid() {
  const [savedIds, setSavedIds] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

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
    <section className="w-full pb-24 px-gutter relative">
      {/* Ambient background glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(195, 192, 255, 0.04), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl mx-auto w-full relative z-10">
        {/* Cards Grid — each card is now a standalone LessonCard module */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16"
        >
          {LESSONS_LIST.map((lesson) => (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isSaved={savedIds.includes(lesson.id)}
              onToggleSave={toggleBookmark}
            />
          ))}
        </motion.div>

        {/* Pagination */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center w-full gap-4"
        >
          <div className="flex items-center gap-1.5">
            <button
              id="lessons-page-prev"
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              className="w-9 h-9 rounded-xl text-on-surface-variant hover:bg-white/5 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[1, 2, 3, "...", 12].map((page, index) => (
              <button
                key={index}
                onClick={() => typeof page === "number" && setCurrentPage(page)}
                className={`w-9 h-9 rounded-xl text-xs font-label-md font-semibold flex items-center justify-center transition-all duration-300 ${
                  currentPage === page
                    ? "bg-primary text-on-primary"
                    : page === "..."
                      ? "text-on-surface-variant/40 cursor-default"
                      : "text-on-surface-variant hover:bg-white/5 hover:text-white"
                }`}
                disabled={page === "..."}
              >
                {page}
              </button>
            ))}

            <button
              id="lessons-page-next"
              onClick={() => setCurrentPage((p) => Math.min(12, p + 1))}
              className="w-9 h-9 rounded-xl text-on-surface-variant hover:bg-white/5 hover:text-white flex items-center justify-center transition-all duration-300"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <p className="text-[11px] font-label-sm font-bold tracking-widest text-on-surface-variant/50 uppercase select-none">
            Showing 6 of 72 lessons
          </p>
        </motion.div>
      </div>
    </section>
  );
}
