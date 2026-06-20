"use client";

import Link from "next/link";
import Image from "next/image";
import { Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import PremiumOverlay from "./PremiumOverlay";

export default function LessonCard({ lesson, isSaved = false, onToggleSave }) {
  return (
    <motion.article
      variants={fadeInUp}
      className="relative rounded-2xl flex flex-col justify-between overflow-hidden group min-h-[460px] bg-[#F6F0DD] border-[3.5px] border-[#1C1611] shadow-[5px_5px_0px_0px_#1C1611] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[3.5px_3.5px_0px_0px_#1C1611] transition-all duration-150"
    >
      <div>
        {/* Image wrapper */}
        <div className="relative w-full aspect-[16/9] overflow-hidden border-b-[3.5px] border-[#1C1611]">
          <Image
            src={lesson.imageUrl}
            alt={lesson.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={`object-cover object-center grayscale ${lesson.isPremium ? "blur-[6px] opacity-40 scale-102" : "transition-transform duration-500 ease-out group-hover:scale-105 group-hover:grayscale-0"}`}
            loading="lazy"
          />
        </div>

        {/* Card Body */}
        <div className="p-6 relative text-[#1C1611]">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {lesson.tags.map((tag, idx) => (
              <span
                key={idx}
                className={`text-[10px] font-black tracking-widest uppercase px-2.5 py-1 rounded border-2 border-[#1C1611] ${
                  idx === 0
                    ? "bg-[#FF4A3A] text-white"
                    : "bg-[#FCD34D] text-[#1C1611]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-black text-xl mb-3 text-[#1C1611] group-hover:text-[#FF4A3A] transition-colors duration-150 line-clamp-2">
            <Link href={lesson.href}>{lesson.title}</Link>
          </h3>

          {/* Description */}
          <p className="text-sm text-[#1C1611]/80 font-medium leading-relaxed line-clamp-3">
            {lesson.description}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-0 flex justify-between items-center border-t-2 border-[#1C1611]/15 text-[#1C1611]">
        <div className="flex items-center gap-2.5 mt-4">
          <div className="w-8 h-8 rounded-full bg-[#4DD0B1] text-[#1C1611] border-2 border-[#1C1611] text-xs font-black flex items-center justify-center">
            {lesson.author.initials}
          </div>
          <span className="text-xs font-black uppercase text-[#1C1611]/80">
            {lesson.author.name}
          </span>
        </div>

        {!lesson.isPremium && onToggleSave && (
          <button
            onClick={(e) => onToggleSave(lesson.id, e)}
            className="mt-4 w-9 h-9 rounded-lg border-2 border-[#1C1611] bg-white flex items-center justify-center text-[#1C1611] shadow-[2px_2px_0px_0px_#1C1611] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1611] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100"
            aria-label="Save reflection card"
          >
            <Bookmark
              className={`w-4 h-4 ${isSaved ? "fill-[#FF4A3A] stroke-[#1C1611]" : "stroke-[#1C1611] stroke-[2px]"}`}
            />
          </button>
        )}
      </div>

      {/* Premium overlay */}
      {lesson.isPremium && <PremiumOverlay />}
    </motion.article>
  );
}
