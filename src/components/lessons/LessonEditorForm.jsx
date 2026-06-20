"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Smile } from "lucide-react";

// Mock data store
const LESSONS_DB = {
  "1": {
    title: "The Art of Deliberate Ignorance",
    content: "In a world drowning in information, the ability to deliberately ignore the noise is not ignorance — it's a superpower. This lesson explores how selective attention can dramatically improve decision quality and creative output.",
    category: "Philosophy & Ethics",
    tone: "Contemplative",
    isPremium: false,
  },
  "2": {
    title: "Micro-Habits: A Study in Compound Growth",
    content: "The smallest consistent actions compound into transformative change. This lesson examines the science behind habit stacking and how 2-minute rituals can reshape your identity over months.",
    category: "Productivity",
    tone: "Analytical",
    isPremium: false,
  },
  "3": {
    title: "Radical Candor in Remote Contexts",
    content: "Honest feedback is harder to deliver through a screen. This lesson provides frameworks for giving direct, caring feedback in distributed teams without losing the human touch.",
    category: "Mindset",
    tone: "Motivational",
    isPremium: true,
  },
};

export default function LessonEditorForm({ lessonId = null }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Philosophy & Ethics");
  const [tone, setTone] = useState("Contemplative");
  const [isPremium, setIsPremium] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isEditMode = Boolean(lessonId);

  // Load existing lesson data in edit mode
  useEffect(() => {
    if (!lessonId) return;

    const startTimer = setTimeout(() => {
      setIsLoading(true);
    }, 0);

    const timer = setTimeout(() => {
      const lesson = LESSONS_DB[lessonId];
      if (lesson) {
        setTitle(lesson.title);
        setContent(lesson.content);
        setCategory(lesson.category);
        setTone(lesson.tone);
        setIsPremium(lesson.isPremium);
      }
      setIsLoading(false);
    }, 300);

    return () => {
      clearTimeout(startTimer);
      clearTimeout(timer);
    };
  }, [lessonId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isEditMode ? "Updating lesson:" : "Publishing lesson:", {
      id: lessonId,
      title,
      content,
      category,
      tone,
      isPremium,
    });
  };

  if (isLoading) {
    return (
      <div className="w-full flex-grow flex items-center justify-center">
        <div className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 border-[3px] border-[#1C1611] border-t-[#FF4A3A] rounded-full animate-spin" />
          <span className="text-xs font-black uppercase text-[#1C1611]/70">Loading lesson...</span>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col flex-grow gap-8">

      {/* Dropdown Selection Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        
        {/* Category Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#1C1611]/70">
            Category
          </label>
          <div className="relative w-full">
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full h-11 bg-[#F6F0DD] border-[2.5px] border-[#1C1611] rounded-xl px-4 text-xs font-black uppercase text-[#1C1611] focus:outline-none appearance-none cursor-pointer shadow-[2px_2px_0px_0px_#1C1611] transition-all"
            >
              <option value="Philosophy & Ethics" className="bg-[#F6F0DD] text-[#1C1611]">Philosophy & Ethics</option>
              <option value="Productivity" className="bg-[#F6F0DD] text-[#1C1611]">Productivity</option>
              <option value="Mindset" className="bg-[#F6F0DD] text-[#1C1611]">Mindset</option>
            </select>
            <ChevronDown className="w-4 h-4 text-[#1C1611] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5px]" />
          </div>
        </div>

        {/* Emotional Tone Selector */}
        <div className="flex flex-col gap-2">
          <label className="text-[10px] font-black uppercase tracking-widest text-[#1C1611]/70">
            Emotional Tone
          </label>
          <div className="relative w-full">
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full h-11 bg-[#F6F0DD] border-[2.5px] border-[#1C1611] rounded-xl px-4 text-xs font-black uppercase text-[#1C1611] focus:outline-none appearance-none cursor-pointer shadow-[2px_2px_0px_0px_#1C1611] transition-all"
            >
              <option value="Contemplative" className="bg-[#F6F0DD] text-[#1C1611]">Contemplative</option>
              <option value="Analytical" className="bg-[#F6F0DD] text-[#1C1611]">Analytical</option>
              <option value="Motivational" className="bg-[#F6F0DD] text-[#1C1611]">Motivational</option>
            </select>
            <Smile className="w-4 h-4 text-[#1C1611] absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none stroke-[2.5px]" />
          </div>
        </div>
      </div>

      {/* Editorial Workspace Editor Fields */}
      <div className="flex flex-col gap-6 flex-grow min-h-[300px]">
        {/* Title Input field */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Untitled Lesson"
          className="w-full bg-[#F6F0DD] border-[3px] border-[#1C1611] p-4 text-xl font-black uppercase text-[#1C1611] placeholder-[#1C1611]/30 focus:outline-none rounded-xl shadow-[4px_4px_0px_0px_#1C1611] focus:translate-x-[1.5px] focus:translate-y-[1.5px] focus:shadow-[2.5px_2.5px_0px_0px_#1C1611] transition-all"
        />

        {/* Dynamic Context Body Textarea */}
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Preserve your wisdom... Start writing the core narrative of your lesson here. Markdown is supported."
          className="w-full flex-grow bg-[#F6F0DD] border-[3px] border-[#1C1611] p-4 text-sm font-bold text-[#1C1611] placeholder-[#1C1611]/35 focus:outline-none resize-none min-h-[250px] rounded-xl shadow-[4px_4px_0px_0px_#1C1611] focus:translate-x-[1.5px] focus:translate-y-[1.5px] focus:shadow-[2.5px_2.5px_0px_0px_#1C1611] transition-all"
        />
      </div>

      {/* Editor Layout Footer Control Bar */}
      <footer className="w-full border-t-[3.5px] border-[#1C1611] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
        {/* Premium Visibility Toggle Switch */}
        <label className="inline-flex items-center gap-3 bg-white border-2 border-[#1C1611] px-4 h-11 rounded-xl cursor-pointer select-none self-start sm:self-auto shadow-[2px_2px_0px_0px_#1C1611]">
          <input
            type="checkbox"
            checked={isPremium}
            onChange={() => setIsPremium(!isPremium)}
            className="sr-only peer"
          />
          <div className="relative w-11 h-6 bg-white border-2 border-[#1C1611] rounded-full transition-colors peer-checked:bg-[#4DD0B1] after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-[#1C1611] after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-[20px]" />
          <span className="text-[10px] font-black text-[#1C1611] uppercase tracking-wider">
            Premium Visibility
          </span>
        </label>

        {/* Action Button Set */}
        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            className="h-11 px-6 bg-[#FCD34D] border-[2.5px] border-[#1C1611] text-[#1C1611] font-black uppercase text-xs rounded-xl shadow-[2px_2px_0px_0px_#1C1611] hover:bg-[#FF4A3A] active:translate-y-0.5 transition-colors cursor-pointer"
          >
            Save Draft
          </button>

          <button
            type="submit"
            className="h-11 px-6 bg-[#FF4A3A] text-white border-[2.5px] border-[#1C1611] font-black uppercase text-xs rounded-xl shadow-[2px_2px_0px_0px_#1C1611] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1611] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100 cursor-pointer whitespace-nowrap"
          >
            {isEditMode ? "Update Lesson" : "Publish Lesson"}
          </button>
        </div>
      </footer>

    </form>
  );
}