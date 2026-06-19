"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

/**
 * Reusable page header for the public /lessons route.
 * Extracted from LessonsGrid so the header and grid are independent modules.
 */
export default function LessonsPageHeader() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="w-full pt-28 pb-12 px-gutter relative overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[400px] pointer-events-none opacity-40"
        style={{
          background:
            "radial-gradient(ellipse, rgba(195, 192, 255, 0.06), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-0 max-w-3xl"
        >
          <h1 className="font-headline-lg text-4xl md:text-5xl text-white mb-4">
            Public Lessons
          </h1>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Explore a curated library of wisdom from thinkers, creators, and
            everyday philosophers. Bridging insight with action.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
