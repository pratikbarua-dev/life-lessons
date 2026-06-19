// src/components/FeatureBreakdown.jsx
import { Star } from "lucide-react";

const BREAKDOWN_DATA = [
    { capability: "Creation Limits", free: "3 per month", premium: "Unlimited" },
    { capability: "Premium Content", free: "Restricted", premium: "Full Access" },
    { capability: "Reading Experience", free: "Ad-supported", premium: "Zero Ads" },
    { capability: "Profile Discovery", free: "Standard", premium: "Priority Placement" },
    { capability: "Editorial Notes", free: "None", premium: "Included" },
    { capability: "Support Speed", free: "48-72 hours", premium: "Instant Response" },
];

export default function FeatureBreakdown() {
    return (
        <section className="w-full text-[#e0e3e5] pb-24 px-6 flex flex-col items-center">
            <div className="container mx-auto max-w-4xl">

                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-white">
                        Feature Breakdown
                    </h2>
                </div>

                {/* Table Content Container Card */}
                <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl overflow-hidden shadow-xl mb-16">
                    <div className="overflow-x-auto">
                        <table className="table w-full border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.02]">
                                    <th className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase p-5 text-left">
                                        Capability
                                    </th>
                                    <th className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/40 uppercase p-5 text-left">
                                        Free
                                    </th>
                                    <th className="text-[11px] font-sans font-bold tracking-widest text-[#c3c0ff] uppercase p-5 text-left flex items-center gap-1">
                                        Premium
                                        <Star className="w-3 h-3 fill-[#c3c0ff] stroke-none" />
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.06]">
                                {BREAKDOWN_DATA.map((row, index) => (
                                    <tr key={index} className="hover:bg-white/[0.02] transition-colors duration-150">
                                        <td className="p-5 text-sm font-sans font-medium text-[#e0e3e5]">
                                            {row.capability}
                                        </td>
                                        <td className="p-5 text-sm font-sans font-light text-[#c7c4d8]/60">
                                            {row.free}
                                        </td>
                                        <td className="p-5 text-sm font-sans font-semibold text-[#c3c0ff]">
                                            {row.premium}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Sub-Panel Bottom Banner Card */}
                <div className="w-full bg-white/[0.04] border border-white/10 rounded-3xl p-10 md:p-14 text-center relative overflow-hidden shadow-lg">
                    <div className="max-w-xl mx-auto flex flex-col items-center justify-center">
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-white mb-3 tracking-tight">
                            Join the Elite Collective
                        </h3>
                        <p className="text-xs md:text-sm text-[#c7c4d8]/60 font-sans font-light leading-relaxed">
                            Thousands of creators are already using the Premium tools to shape their digital legacy.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}