"use client";

import Link from "next/link";
import { Edit2, Trash2, Heart, Bookmark } from "lucide-react";
import VisibilityToggle from "./VisibilityToggle";

const TABLE_LESSONS = [
    {
        id: 1,
        title: "The Art of Deliberate Ignorance",
        subtitle: "Philosophy & Productivity",
        created: "Oct 12, 2024",
        isPublic: true,
        likes: "1.2k",
        saves: "452",
        iconBg: "bg-purple-900/30 text-purple-300",
    },
    {
        id: 2,
        title: "Micro-Habits: A Study in Compound Growth",
        subtitle: "Personal Growth",
        created: "Sep 28, 2024",
        isPublic: false,
        likes: "0",
        saves: "0",
        iconBg: "bg-amber-900/30 text-amber-400",
    },
    {
        id: 3,
        title: "Radical Candor in Remote Contexts",
        subtitle: "Leadership",
        created: "Aug 05, 2024",
        isPublic: true,
        likes: "842",
        saves: "115",
        iconBg: "bg-slate-800 text-slate-300",
    },
];

export default function LessonsTable() {
    return (
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl shadow-xl mb-8 overflow-hidden">
            {/* Responsive scroll boundary shell */}
            <div className="w-full overflow-x-auto min-w-0">
                <table className="table w-full border-collapse min-w-[700px] lg:min-w-0">
                    <thead>
                        <tr className="border-b border-white/10 bg-white/[0.01]">
                            <th className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase p-5 text-left w-[40%]">Lesson Title</th>
                            <th className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase p-5 text-left w-[15%]">Created</th>
                            <th className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase p-5 text-left w-[15%]">Visibility</th>
                            <th className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase p-5 text-left w-[15%]">Engagement</th>
                            <th className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase p-5 text-center w-[15%]">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.06]">
                        {TABLE_LESSONS.map((row) => (
                            <tr key={row.id} className="hover:bg-white/[0.02] transition-colors duration-150 group">
                                <td className="p-5 flex items-center gap-4 min-w-0">
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold shrink-0 ${row.iconBg}`}>
                                        {row.title.charAt(0)}
                                    </div>
                                    <div className="min-w-0 truncate">
                                        <h4 className="text-sm font-sans font-semibold text-white tracking-tight truncate group-hover:text-[#c3c0ff] transition-colors">
                                            {row.title}
                                        </h4>
                                        <p className="text-[11px] font-sans text-[#c7c4d8]/40 mt-0.5 truncate">{row.subtitle}</p>
                                    </div>
                                </td>

                                <td className="p-5 text-sm font-sans text-[#c7c4d8]/70 font-light whitespace-nowrap">
                                    {row.created}
                                </td>

                                <td className="p-5 whitespace-nowrap">
                                    <VisibilityToggle lessonId={row.id} initialStatus={row.isPublic} />
                                </td>

                                <td className="p-5 whitespace-nowrap">
                                    <div className="flex items-center gap-4 text-xs font-sans font-medium text-[#c7c4d8]/60">
                                        <span className="flex items-center gap-1.5"><Heart className="w-3.5 h-3.5" /> {row.likes}</span>
                                        <span className="flex items-center gap-1.5"><Bookmark className="w-3.5 h-3.5" /> {row.saves}</span>
                                    </div>
                                </td>

                                <td className="p-5 whitespace-nowrap">
                                    <div className="flex items-center justify-center gap-3.5 text-[#c7c4d8]/40">
                                        <Link
                                            href={`/add-lesson?id=${row.id}`}
                                            className="hover:text-[#c3c0ff] transition-colors cursor-pointer"
                                            aria-label={`Edit lesson: ${row.title}`}
                                        >
                                            <Edit2 className="w-4 h-4" />
                                        </Link>
                                        <button className="hover:text-red-400 transition-colors cursor-pointer" aria-label={`Delete lesson: ${row.title}`}><Trash2 className="w-4 h-4" /></button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}