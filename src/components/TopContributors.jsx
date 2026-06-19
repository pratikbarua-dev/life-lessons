"use client";

import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const CONTRIBUTORS_DATA = [
  {
    id: 1,
    name: "Elena Vance",
    lessonsCount: 42,
    verified: true,
    memberSince: "Jan 2022",
    avatarUrl:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop",
    profileHref: "/contributors/elena-vance",
  },
  {
    id: 2,
    name: "Marcus Thorne",
    lessonsCount: 38,
    verified: false,
    memberSince: "Mar 2022",
    avatarUrl:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop",
    profileHref: "/contributors/marcus-thorne",
  },
  {
    id: 3,
    name: "Sarah Chen",
    lessonsCount: 31,
    verified: false,
    memberSince: "Jun 2022",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    profileHref: "/contributors/sarah-chen",
  },
  {
    id: 4,
    name: "Julian Aris",
    lessonsCount: 27,
    verified: false,
    memberSince: "Sep 2022",
    avatarUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop",
    profileHref: "/contributors/julian-aris",
  },
];

export default function TopContributors() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="py-24 w-full overflow-hidden relative">
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(195, 192, 255, 0.03) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="px-gutter max-w-7xl mx-auto w-full relative z-10">
        {/* Header Block */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="font-headline-md text-3xl mb-12 text-center md:text-left text-white"
        >
          Top Contributors
        </motion.h2>

        {/* Scrollable Contributors Row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex gap-6 overflow-x-auto pb-10 scroll-hide -mx-gutter px-gutter w-full"
        >
          {CONTRIBUTORS_DATA.map((person) => (
            <motion.div key={person.id} variants={fadeInUp} className="flex-shrink-0">
              <Link
                href={person.profileHref}
                className="flex-shrink-0 w-72 p-5 rounded-2xl flex flex-col gap-4 transition-all group relative overflow-hidden"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                {/* Hover glow overlay */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow:
                      "0 0 40px -10px rgba(195, 192, 255, 0.15), inset 0 0 0 1px rgba(195, 192, 255, 0.12)",
                  }}
                  aria-hidden="true"
                />

                {/* Top row: avatar + info */}
                <div className="flex items-center gap-4 relative z-10">
                  {/* Profile Avatar Container */}
                  <div className="relative">
                    <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors duration-300">
                      <Image
                        src={person.avatarUrl}
                        alt={person.name}
                        fill
                        sizes="56px"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    {/* Verified badge */}
                    {person.verified && (
                      <motion.div
                        className="absolute -bottom-1 -right-1 w-5 h-5 bg-primary rounded-full border-2 border-[#101415] flex items-center justify-center"
                        whileHover={{ scale: 1.2 }}
                      >
                        <Check className="w-3 h-3 text-on-primary stroke-[3]" />
                      </motion.div>
                    )}
                    {/* Online indicator */}
                    <div className="absolute top-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-[#101415]" />
                  </div>

                  {/* Contributor Metadata */}
                  <div>
                    <p className="font-bold text-white group-hover:text-primary transition-colors duration-300">
                      {person.name}
                    </p>
                    <p className="text-xs text-on-surface-variant">
                      {person.lessonsCount} Lessons Shared
                    </p>
                  </div>
                </div>

                {/* Hover reveal info */}
                <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs text-on-surface-variant">
                  <span>Since {person.memberSince}</span>
                  <span className="flex items-center gap-1 text-primary">
                    View Profile
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
