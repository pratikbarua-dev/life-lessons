import { Eye, ArrowUpRight, FileText } from "lucide-react";

const RECENT_LESSONS = [
    { id: 1, title: "The Architecture of Deep Focus", author: "Julian Thorne", views: "14.2k", visibility: "Public" },
    { id: 2, title: "The Dichotomy of Control in Modern Scaling", author: "Elena Vance", views: "9.8k", visibility: "Public" },
    { id: 3, title: "Micro-Habits: A Study in Compound Growth", author: "Marcus Aurelius", views: "1.1k", visibility: "Private" },
];

export default function SystemContentPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none">
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">

                {/* Header Block */}
                <header className="border-b border-white/5 pb-6">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase block mb-1">
                        Global Index
                    </span>
                    <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
                        System Content
                    </h1>
                    <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-1.5">
                        Audit public asset distributions, observe engagement metrics, and enforce global editorial policies.
                    </p>
                </header>

                {/* Mini Aggregate Grid */}
                <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                    {[
                        { label: "Total Indexed Lessons", count: "1,245 Assets", sub: "Across 14 categories" },
                        { label: "Accumulated Views", count: "3.4M Reads", sub: "↑ 8% this tracking period" },
                        { label: "Private Draft Pools", count: "312 Vaults", sub: "Unpublished raw data modules" },
                    ].map((stat, i) => (
                        <div key={i} className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 flex flex-col justify-between min-h-[105px]">
                            <span className="text-[10px] font-sans font-bold tracking-wider text-[#c7c4d8]/30 uppercase">{stat.label}</span>
                            <h3 className="text-xl font-serif font-bold text-white mt-2">{stat.count}</h3>
                            <p className="text-[10px] font-sans text-[#c7c4d8]/30 mt-1 font-light">{stat.sub}</p>
                        </div>
                    ))}
                </section>

                {/* Global Asset Table */}
                <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl shadow-xl overflow-hidden mt-2">
                    <div className="w-full overflow-x-auto">
                        <table className="table w-full border-collapse min-w-[600px] lg:min-w-0">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.01] text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase">
                                    <th className="p-5 text-left">Document Title</th>
                                    <th className="p-5 text-left">Author Profile</th>
                                    <th className="p-5 text-left">Total Views</th>
                                    <th className="p-5 text-left">Visibility state</th>
                                    <th className="p-5 text-center">Review</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.06] text-xs font-sans">
                                {RECENT_LESSONS.map((lesson) => (
                                    <tr key={lesson.id} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="p-5 flex items-center gap-3">
                                            <FileText className="w-4 h-4 text-[#c7c4d8]/30 shrink-0" />
                                            <span className="font-medium text-white group-hover:text-[#c3c0ff] transition-colors truncate">{lesson.title}</span>
                                        </td>
                                        <td className="p-5 text-[#c7c4d8]/70">{lesson.author}</td>
                                        <td className="p-5 text-[#c7c4d8]/50 font-light">{lesson.views}</td>
                                        <td className="p-5">
                                            <span className="text-[10px] uppercase font-bold tracking-wider text-[#c7c4d8]/60">• {lesson.visibility}</span>
                                        </td>
                                        <td className="p-5 text-center">
                                            <button className="text-[#c7c4d8]/40 hover:text-white transition-colors cursor-pointer" title="Inspect full lesson text">
                                                <ArrowUpRight className="w-4 h-4 mx-auto" />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}