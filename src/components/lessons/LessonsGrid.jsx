"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bookmark, Lock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

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
        {/* Responsive Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16"
        >
          {LESSONS_LIST.map((lesson) => (
            <motion.article
              key={lesson.id}
              variants={fadeInUp}
              className="relative rounded-2xl flex flex-col justify-between overflow-hidden group min-h-[460px]"
              style={{
                background: "rgba(255, 255, 255, 0.04)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              {/* Card hover glow border overlay */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                style={{
                  boxShadow:
                    "0 0 30px -5px rgba(195, 192, 255, 0.12), inset 0 0 0 1px rgba(195, 192, 255, 0.12)",
                }}
                aria-hidden="true"
              />

              <div>
                {/* Image Wrap Frame */}
                <div className="relative w-full aspect-[16/9] overflow-hidden">
                  <Image
                    src={lesson.imageUrl}
                    alt={lesson.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={`object-cover object-center ${lesson.isPremium ? "blur-[6px] opacity-40 scale-102" : "transition-transform duration-700 ease-out group-hover:scale-110"}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                </div>

                {/* Card Body Elements */}
                <div className="p-6 relative">
                  {/* Category Tags Layout */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {lesson.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-label-sm font-bold tracking-widest uppercase px-2.5 py-1 rounded-md ${
                          idx === 0
                            ? "bg-primary/15 text-primary border border-primary/20"
                            : "bg-white/5 text-on-surface-variant border border-white/5"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Title Header */}
                  <h3 className="font-headline-md text-lg font-semibold tracking-tight leading-snug mb-3 text-white group-hover:text-primary transition-colors duration-300">
                    <Link href={lesson.href}>{lesson.title}</Link>
                  </h3>

                  {/* Body description blurbs */}
                  <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
                    {lesson.description}
                  </p>
                </div>
              </div>

              {/* Action and Author Footer Container */}
              <div className="p-6 pt-0 flex justify-between items-center border-t border-white/5">
                <div className="flex items-center gap-2.5 mt-4">
                  {/* Author Initials Badge */}
                  <div className="w-7 h-7 rounded-full bg-primary/20 text-primary border border-primary/20 text-[11px] font-bold flex items-center justify-center">
                    {lesson.author.initials}
                  </div>
                  <span className="text-xs text-on-surface-variant font-medium">
                    {lesson.author.name}
                  </span>
                </div>

                {!lesson.isPremium && (
                  <button
                    onClick={(e) => toggleBookmark(lesson.id, e)}
                    className="mt-4 w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant/50 hover:text-primary hover:bg-white/5 transition-all duration-300"
                    aria-label="Save reflection card"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${savedIds.includes(lesson.id) ? "fill-primary stroke-primary" : "stroke-[1.75]"}`}
                    />
                  </button>
                )}
              </div>

              {/* Locked Premium Interactivity Paywall Shield Overlay */}
              {lesson.isPremium && (
                <div
                  className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center"
                  style={{ background: "rgba(16, 20, 21, 0.6)" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-5">
                    <Lock className="w-5 h-5 stroke-[1.75]" />
                  </div>
                  <h4 className="font-headline-md text-base font-semibold text-white mb-2">
                    Premium Lesson
                  </h4>
                  <p className="text-xs text-on-surface-variant/60 max-w-xs mb-6 leading-relaxed">
                    Unlock our deep-dive archives with a Pro subscription.
                  </p>
                  <Link
                    href="/pricing"
                    className="relative overflow-hidden bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-md text-xs font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 group/btn"
                  >
                    <Star className="w-3 h-3 fill-current" />
                    Upgrade to Unlock
                    <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                  </Link>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>

        {/* Dynamic Pagination Footer Control Hub */}
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
