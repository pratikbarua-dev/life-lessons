"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Search,
  RotateCcw,
  ChevronDown,
  SlidersHorizontal,
} from "lucide-react";

export default function LessonsHeader() {
  // Active filter state variables
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [tone, setTone] = useState("Any Tone");

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  // Fully operational function to handle filter resets
  const handleClearFilters = () => {
    setSearch("");
    setCategory("All Categories");
    setTone("Any Tone");
  };

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
        {/* Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 max-w-3xl"
        >
          <h1 className="font-headline-lg text-4xl md:text-5xl text-white mb-4">
            Public Lessons
          </h1>
          <p className="font-body-lg text-on-surface-variant leading-relaxed">
            Explore a curated library of wisdom from thinkers, creators, and
            everyday philosophers. Bridging insight with action.
          </p>
        </motion.div>

        {/* Filters Bar Row Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="w-full rounded-2xl p-4 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4"
          style={{ background: "rgba(255, 255, 255, 0.04)" }}
        >
          {/* Inputs Controls Wrapper */}
          <div className="flex flex-wrap items-center gap-3 flex-grow max-w-4xl">
            {/* Search Input Box */}
            <div className="relative w-full sm:w-72">
              <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-on-surface-variant/40">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                id="lessons-search-input"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search lessons..."
                className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 focus:border-primary/50 text-white text-sm font-body-md rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/25"
              />
            </div>

            {/* Categories Dropdown Filter */}
            <div className="relative w-full sm:w-auto">
              <select
                id="lessons-category-filter"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="h-11 bg-white/5 border border-white/10 text-white font-body-md text-sm rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 pr-10 pl-4 w-full sm:w-48 appearance-none cursor-pointer transition-all"
              >
                <option value="All Categories" className="bg-neutral-900 text-white">
                  All Categories
                </option>
                <option value="Productivity" className="bg-neutral-900 text-white">
                  Productivity
                </option>
                <option value="Leadership" className="bg-neutral-900 text-white">
                  Leadership
                </option>
                <option value="Philosophy" className="bg-neutral-900 text-white">
                  Philosophy
                </option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant/40">
                <ChevronDown className="w-4 h-4" />
              </span>
            </div>

            {/* Tone Filter Selection Dropdown */}
            <div className="relative w-full sm:w-auto">
              <select
                id="lessons-tone-filter"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="h-11 bg-white/5 border border-white/10 text-white font-body-md text-sm rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 pr-10 pl-4 w-full sm:w-44 appearance-none cursor-pointer transition-all"
              >
                <option value="Any Tone" className="bg-neutral-900 text-white">
                  Any Tone
                </option>
                <option value="Analytical" className="bg-neutral-900 text-white">
                  Analytical
                </option>
                <option value="Reflective" className="bg-neutral-900 text-white">
                  Reflective
                </option>
                <option value="Motivational" className="bg-neutral-900 text-white">
                  Motivational
                </option>
              </select>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant/40">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Reset Triggers Action Button */}
          <button
            id="lessons-clear-filters"
            onClick={handleClearFilters}
            className="h-11 text-xs font-label-md font-semibold tracking-wide text-on-surface-variant/60 hover:text-white hover:bg-white/5 rounded-xl px-4 gap-2 border-none transition-all duration-300 flex items-center justify-center self-end md:self-auto"
          >
            <RotateCcw className="w-3.5 h-3.5 stroke-[2]" />
            Clear Filters
          </button>
        </motion.div>
      </div>
    </section>
  );
}
