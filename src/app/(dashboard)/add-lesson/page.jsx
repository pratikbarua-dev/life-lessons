"use client";

import { Suspense } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LessonEditorForm } from "@/components/lessons";

function AddLessonContent() {
    const searchParams = useSearchParams();
    const lessonId = searchParams.get("id");

    return (
        <div className="max-w-4xl mx-auto w-full flex flex-col gap-8 flex-grow">

            {/* Page Header with back navigation */}
            <header className="flex items-center gap-4 border-b border-white/5 pb-6">
                <Link
                    href="/my-lessons"
                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#c7c4d8]/60 hover:text-white hover:bg-white/[0.06] transition-all duration-200"
                    aria-label="Back to My Lessons"
                >
                    <ArrowLeft className="w-4 h-4" />
                </Link>
                <div>
                    <h1 className="text-2xl font-serif font-bold tracking-tight text-white">
                        {lessonId ? "Edit Lesson" : "New Lesson"}
                    </h1>
                    <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-0.5">
                        {lessonId
                            ? "Update your lesson and republish when ready."
                            : "Document a new life lesson and share it with the world."
                        }
                    </p>
                </div>
            </header>

            {/* Editor Form — receives lessonId for edit mode */}
            <LessonEditorForm lessonId={lessonId} />

        </div>
    );
}

export default function AddLessonPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none flex flex-col">
            <Suspense fallback={
                <div className="max-w-4xl mx-auto w-full flex-grow flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-[#c3c0ff]/30 border-t-[#c3c0ff] rounded-full animate-spin" />
                </div>
            }>
                <AddLessonContent />
            </Suspense>
        </div>
    );
}
