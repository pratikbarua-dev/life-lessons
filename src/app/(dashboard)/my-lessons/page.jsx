import Link from "next/link";
import { Plus, LayoutGrid, Clock, ArrowUpRight } from "lucide-react";

// Mock data reflecting what a user sees when navigating to "My Lessons"
const MY_LESSONS_DRAFT = [
    {
        id: 1,
        title: "The Architecture of Deep Focus",
        status: "Draft",
        updatedAt: "Updated 2 hours ago",
        category: "Productivity",
    },
    {
        id: 2,
        title: "Principles of High-Leverage Management",
        status: "Published",
        updatedAt: "Updated 3 days ago",
        category: "Leadership",
    },
    {
        id: 3,
        title: "The Dichotomy of Control in Modern Scaling",
        status: "Published",
        updatedAt: "Updated 1 week ago",
        category: "Philosophy",
    },
];

export default function MyLessonsDashboardPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-6 md:p-10 select-none">
            <div className="max-w-5xl mx-auto w-full">

                {/* Dashboard Dynamic Title Block */}
                <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12 border-b border-white/5 pb-8">
                    <div>
                        <h1 className="text-3xl font-serif font-bold tracking-tight text-white mb-2">
                            My Lessons
                        </h1>
                        <p className="text-sm text-[#c7c4d8]/50 font-sans font-light">
                            Manage your personal vault of structured insights, drafts, and shared logs.
                        </p>
                    </div>

                    {/* Action Call - High-contrast Lavender accent trigger */}
                    <Link
                        href="/add-lesson"
                        className="inline-flex items-center gap-2 bg-[#c3c0ff] hover:bg-[#b0adfa] text-[#1d00a5] font-sans font-bold text-sm px-5 h-11 rounded-xl shadow-lg shadow-purple-500/5 transition-all duration-200 active:scale-[0.98] self-start sm:self-auto"
                    >
                        <Plus className="w-4 h-4 stroke-[2.5]" />
                        Create Lesson
                    </Link>
                </header>

                {/* Dashboard Grid Feed */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {MY_LESSONS_DRAFT.map((lesson) => (
                        <article
                            key={lesson.id}
                            className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[180px] transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.05] group"
                        >
                            <div>
                                {/* Meta header layout strip */}
                                <div className="flex items-center justify-between gap-4 mb-4">
                                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase">
                                        {lesson.category}
                                    </span>

                                    {/* Badge status mapping */}
                                    <span className={`text-[10px] font-sans font-semibold px-2 py-0.5 rounded-md ${lesson.status === "Published"
                                        ? "bg-[#c3c0ff]/10 text-[#c3c0ff] border border-[#c3c0ff]/20"
                                        : "bg-white/5 text-slate-400 border border-white/5"
                                        }`}>
                                        {lesson.status}
                                    </span>
                                </div>

                                {/* Lesson Link Title */}
                                <h3 className="text-lg font-serif font-semibold text-white tracking-tight leading-snug group-hover:text-[#c3c0ff] transition-colors">
                                    <Link href={`/lessons/edit/${lesson.id}`} className="flex items-start gap-1">
                                        <span className="line-clamp-2">{lesson.title}</span>
                                    </Link>
                                </h3>
                            </div>

                            {/* Feed Card Footer info parameters */}
                            <div className="flex items-center justify-between text-xs text-[#c7c4d8]/40 pt-4 border-t border-white/[0.04] mt-4">
                                <div className="flex items-center gap-1.5 font-light">
                                    <Clock className="w-3.5 h-3.5 stroke-[1.5]" />
                                    <span>{lesson.updatedAt}</span>
                                </div>

                                <Link
                                    href={`/lessons/edit/${lesson.id}`}
                                    className="text-[#c3c0ff] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-0.5 font-medium"
                                >
                                    Edit <ArrowUpRight className="w-3 h-3" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </section>

            </div>
        </div>
    );
}