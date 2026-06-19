"use client";

import Link from "next/link";
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import PremiumOverlay from "./PremiumOverlay";

/**
 * Single lesson card — extracted from LessonsGrid for reuse.
 *
 * Props:
 *  - lesson: { id, title, description, imageUrl, tags, author, href, isPremium }
 *  - isSaved: boolean
 *  - onToggleSave: (id, event) => void
 */
export default function LessonCard({ lesson, isSaved = false, onToggleSave }) {
  return (
    <motion.article
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
        {/* Image */}
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

        {/* Card Body */}
        <div className="p-6 relative">
          {/* Tags */}
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

          {/* Title */}
          <h3 className="font-headline-md text-lg font-semibold tracking-tight leading-snug mb-3 text-white group-hover:text-primary transition-colors duration-300">
            <Link href={lesson.href}>{lesson.title}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-3">
            {lesson.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0 flex justify-between items-center border-t border-white/5">
        <div className="flex items-center gap-2.5 mt-4">
          <div className="w-7 h-7 rounded-full bg-primary/20 text-primary border border-primary/20 text-[11px] font-bold flex items-center justify-center">
            {lesson.author.initials}
          </div>
          <span className="text-xs text-on-surface-variant font-medium">
            {lesson.author.name}
          </span>
        </div>

        {!lesson.isPremium && onToggleSave && (
          <button
            onClick={(e) => onToggleSave(lesson.id, e)}
            className="mt-4 w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant/50 hover:text-primary hover:bg-white/5 transition-all duration-300"
            aria-label="Save reflection card"
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? "fill-primary stroke-primary" : "stroke-[1.75]"}`}
            />
          </button>
        )}
      </div>

      {/* Premium overlay */}
      {lesson.isPremium && <PremiumOverlay />}
    </motion.article>
  );
}
