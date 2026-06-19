import { Eye } from "lucide-react";
import Link from "next/link";

const QUEUE_DATA = [
    { id: 1, title: "The Stoic Guide to High-Speed Trading", type: "Editorial Insight", time: "2h ago", author: "@julian_vox", flags: 8 },
    { id: 2, title: "Decentralized Empathy in Web3", type: "Productivity Tool", time: "5h ago", author: "@block_writer", flags: 3 },
    { id: 3, title: "How to Retire on Digital Land", type: "Financial Wisdom", time: "1d ago", author: "@meta_rich", flags: 12 },
];

export default function ModerationFeed() {
    return (
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between">
            <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                    <h3 className="text-base font-serif font-semibold text-white tracking-tight">Urgent Moderation Feed</h3>
                    <Link href="/admin/queue" className="text-xs text-[#c3c0ff] hover:underline font-medium font-sans">View All Queue</Link>
                </div>

                <div className="w-full overflow-x-auto min-w-0">
                    <table className="table w-full border-collapse min-w-[500px] lg:min-w-0">
                        <thead>
                            <tr className="border-b border-white/5 text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase">
                                <th className="pb-3 text-left w-[55%]">Lesson Title</th>
                                <th className="pb-3 text-left w-[20%]">Author</th>
                                <th className="pb-3 text-left w-[15%]">Flags</th>
                                <th className="pb-3 text-center w-[10%]">Action</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-white/[0.04]">
                            {QUEUE_DATA.map((row) => (
                                <tr key={row.id} className="group">
                                    <td className="py-4 pr-3 min-w-0">
                                        <h4 className="text-sm font-sans font-semibold text-white truncate group-hover:text-[#c3c0ff] transition-colors">{row.title}</h4>
                                        <p className="text-[11px] font-sans text-[#c7c4d8]/40 mt-0.5 whitespace-nowrap">{row.type} • {row.time}</p>
                                    </td>
                                    <td className="py-4 text-xs font-sans text-[#c7c4d8]/60 whitespace-nowrap">{row.author}</td>
                                    <td className="py-4 whitespace-nowrap">
                                        <span className="inline-block text-[10px] font-sans font-bold bg-amber-500/10 border border-amber-500/20 text-amber-400 px-2 py-0.5 rounded-md">
                                            {row.flags} Reports
                                        </span>
                                    </td>
                                    <td className="py-4 text-center whitespace-nowrap">
                                        <button className="text-[#c7c4d8]/40 hover:text-white transition-colors cursor-pointer" aria-label="Review flagged item">
                                            <Eye className="w-4 h-4 mx-auto" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}