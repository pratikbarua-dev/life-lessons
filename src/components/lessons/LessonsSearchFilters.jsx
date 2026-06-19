"use client";

import { useState } from "react";
import { Search, ChevronDown, SlidersHorizontal, RotateCcw } from "lucide-react";

/**
 * Reusable search + filter bar.
 * Used by both:
 *  - /lessons (public, with category/tone dropdowns)
 *  - /my-lessons (dashboard, with filter/sort pills)
 *
 * Props:
 *  - variant: "public" | "dashboard" (default: "dashboard")
 *  - placeholder: custom placeholder text
 */
export default function LessonsSearchFilters({
  variant = "dashboard",
  placeholder = "Search your notebook...",
}) {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [tone, setTone] = useState("Any Tone");
  const [activeFilter, setActiveFilter] = useState("All Lessons");
  const [activeSort, setActiveSort] = useState("Newest First");

  const handleClearFilters = () => {
    setSearchQuery("");
    setCategory("All Categories");
    setTone("Any Tone");
  };

  // ── Dashboard variant: compact search + pill buttons ──
  if (variant === "dashboard") {
    return (
      <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="relative w-full sm:max-w-md">
          <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-white/20">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full h-10 pl-10 pr-4 bg-white/[0.04] border border-white/10 text-white text-xs font-sans font-light rounded-xl focus:outline-none focus:border-[#c3c0ff] transition-colors placeholder:text-white/20"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto justify-end text-xs font-sans font-medium text-[#c7c4d8]/60">
          <button
            onClick={() => console.log("Open categories selection modal")}
            className="h-10 px-4 bg-white/[0.04] border border-white/10 rounded-xl hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer select-none"
          >
            {activeFilter} <ChevronDown className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => console.log("Cycle date sorting metrics")}
            className="h-10 px-4 bg-white/[0.04] border border-white/10 rounded-xl hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer select-none"
          >
            {activeSort} <SlidersHorizontal className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    );
  }

  // ── Public variant: full filter bar with dropdowns ──
  return (
    <div
      className="w-full rounded-2xl p-4 border border-white/10 flex flex-col md:flex-row md:items-center justify-between gap-4 mx-auto max-w-7xl"
      style={{ background: "rgba(255, 255, 255, 0.04)" }}
    >
      <div className="flex flex-wrap items-center gap-3 flex-grow max-w-4xl">
        {/* Search */}
        <div className="relative w-full sm:w-72">
          <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-on-surface-variant/40">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            id="lessons-search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={placeholder}
            className="w-full h-11 pl-10 pr-4 bg-white/5 border border-white/10 focus:border-primary/50 text-white text-sm font-body-md rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all placeholder:text-white/25"
          />
        </div>

        {/* Category */}
        <div className="relative w-full sm:w-auto">
          <select
            id="lessons-category-filter"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="h-11 bg-white/5 border border-white/10 text-white font-body-md text-sm rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 pr-10 pl-4 w-full sm:w-48 appearance-none cursor-pointer transition-all"
          >
            <option value="All Categories" className="bg-neutral-900 text-white">All Categories</option>
            <option value="Productivity" className="bg-neutral-900 text-white">Productivity</option>
            <option value="Leadership" className="bg-neutral-900 text-white">Leadership</option>
            <option value="Philosophy" className="bg-neutral-900 text-white">Philosophy</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant/40">
            <ChevronDown className="w-4 h-4" />
          </span>
        </div>

        {/* Tone */}
        <div className="relative w-full sm:w-auto">
          <select
            id="lessons-tone-filter"
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="h-11 bg-white/5 border border-white/10 text-white font-body-md text-sm rounded-xl focus:outline-none focus:border-primary/50 focus:ring-2 focus:ring-primary/20 pr-10 pl-4 w-full sm:w-44 appearance-none cursor-pointer transition-all"
          >
            <option value="Any Tone" className="bg-neutral-900 text-white">Any Tone</option>
            <option value="Analytical" className="bg-neutral-900 text-white">Analytical</option>
            <option value="Reflective" className="bg-neutral-900 text-white">Reflective</option>
            <option value="Motivational" className="bg-neutral-900 text-white">Motivational</option>
          </select>
          <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-on-surface-variant/40">
            <SlidersHorizontal className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>

      {/* Reset */}
      <button
        id="lessons-clear-filters"
        onClick={handleClearFilters}
        className="h-11 text-xs font-label-md font-semibold tracking-wide text-on-surface-variant/60 hover:text-white hover:bg-white/5 rounded-xl px-4 gap-2 border-none transition-all duration-300 flex items-center justify-center self-end md:self-auto"
      >
        <RotateCcw className="w-3.5 h-3.5 stroke-[2]" />
        Clear Filters
      </button>
    </div>
  );
}
