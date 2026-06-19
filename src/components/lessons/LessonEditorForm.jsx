"use client";

import { useState, useEffect } from "react";
import { ChevronDown, Smile } from "lucide-react";

/**
 * Shared editor form for creating and editing lessons.
 *
 * Props:
 *  - lessonId: string | null — if provided, form loads in edit mode
 */

// Mock data store — in a real app this would be an API call
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

        setIsLoading(true);
        // Simulate API fetch delay
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

        return () => clearTimeout(timer);
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
                    <div className="w-6 h-6 border-2 border-[#c3c0ff]/30 border-t-[#c3c0ff] rounded-full animate-spin" />
                    <span className="text-xs font-sans text-[#c7c4d8]/40">Loading lesson...</span>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="w-full flex flex-col flex-grow gap-8">

            {/* Dropdown Selection Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                {/* Category Selector */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase">
                        Category
                    </label>
                    <div className="relative w-full">
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full h-11 bg-white/[0.04] border border-white/10 rounded-xl px-4 text-sm text-[#e0e3e5] focus:outline-none focus:border-[#c3c0ff] appearance-none cursor-pointer"
                        >
                            <option value="Philosophy & Ethics" className="bg-[#101415]">Philosophy & Ethics</option>
                            <option value="Productivity" className="bg-[#101415]">Productivity</option>
                            <option value="Mindset" className="bg-[#101415]">Mindset</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-[#c7c4d8]/40 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>

                {/* Emotional Tone Selector */}
                <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase">
                        Emotional Tone
                    </label>
                    <div className="relative w-full">
                        <select
                            value={tone}
                            onChange={(e) => setTone(e.target.value)}
                            className="w-full h-11 bg-white/[0.04] border border-white/10 rounded-xl px-4 text-sm text-[#e0e3e5] focus:outline-none focus:border-[#c3c0ff] appearance-none cursor-pointer"
                        >
                            <option value="Contemplative" className="bg-[#101415]">Contemplative</option>
                            <option value="Analytical" className="bg-[#101415]">Analytical</option>
                            <option value="Motivational" className="bg-[#101415]">Motivational</option>
                        </select>
                        <Smile className="w-4 h-4 text-[#c7c4d8]/40 absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Luxury Editorial Workspace Editor Fields */}
            <div className="flex flex-col gap-6 flex-grow min-h-[300px]">
                {/* Title Input field using the Headline spec */}
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Untitled Lesson"
                    className="w-full bg-transparent border-b border-white/5 pb-3 text-3xl md:text-4xl font-serif font-bold text-white placeholder:text-white/10 focus:outline-none focus:border-[#c3c0ff]/30 transition-colors"
                />

                {/* Dynamic Context Body Textarea */}
                <textarea
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="Preserve your wisdom... Start writing the core narrative of your lesson here. Markdown is supported."
                    className="w-full flex-grow bg-transparent text-sm md:text-base font-sans font-light leading-relaxed text-[#c7c4d8]/70 placeholder:text-[#c7c4d8]/20 focus:outline-none resize-none min-h-[200px]"
                />
            </div>

            {/* Editor Layout Footer Control Bar */}
            <footer className="w-full border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
                {/* Premium Visibility Toggle Switch */}
                <label className="inline-flex items-center gap-3 bg-white/[0.02] border border-white/5 px-4 h-11 rounded-xl cursor-pointer select-none self-start sm:self-auto">
                    <input
                        type="checkbox"
                        checked={isPremium}
                        onChange={() => setIsPremium(!isPremium)}
                        className="sr-only peer"
                    />
                    <div className="relative w-8 h-4 bg-white/10 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-[#c3c0ff]" />
                    <span className="text-xs font-sans font-medium text-[#c7c4d8]/50 uppercase tracking-wider">
                        Premium Visibility
                    </span>
                </label>

                {/* Action Button Set */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                    <button
                        type="button"
                        className="h-11 px-6 font-sans font-semibold text-sm text-[#c7c4d8]/70 hover:text-white transition-colors cursor-pointer"
                    >
                        Save Draft
                    </button>

                    <button
                        type="submit"
                        className="h-11 px-6 bg-[#c3c0ff] hover:bg-[#b0adfa] text-[#1d00a5] font-sans font-bold text-sm rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer whitespace-nowrap"
                    >
                        {isEditMode ? "Update Lesson" : "Publish Lesson"}
                    </button>
                </div>
            </footer>

        </form>
    );
}