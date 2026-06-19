import { Plus } from "lucide-react";
import Link from "next/link";
import { LessonsTable, PerformanceCards, LessonsSearchFilters } from "@/components/lessons";

export default function MyLessonsDashboardPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none">
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">

                {/* Dynamic Page Header */}
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-6">
                    <div>
                        <h1 className="text-3xl font-serif font-bold tracking-tight text-white mb-1.5">
                            My Lessons Notebook
                        </h1>
                        <p className="text-xs sm:text-sm text-[#c7c4d8]/50 font-sans font-light">
                            A curated collection of your intellectual contributions and life-learned insights.
                        </p>
                    </div>

                    <Link
                        href="/add-lesson"
                        className="inline-flex items-center justify-center gap-2 bg-[#c3c0ff] hover:bg-[#b0adfa] text-[#1d00a5] font-sans font-bold text-sm px-5 h-11 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] shrink-0 self-start sm:self-auto cursor-pointer"
                    >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        New Lesson
                    </Link>
                </header>

                {/* Shared search/filter component (dashboard variant) */}
                <LessonsSearchFilters variant="dashboard" />

                {/* Main Content */}
                <main className="w-full flex flex-col gap-6 min-w-0">
                    <LessonsTable />
                    <PerformanceCards />
                </main>

            </div>
        </div>
    );
}