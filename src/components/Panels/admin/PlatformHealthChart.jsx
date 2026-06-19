"use client";

import { useState } from "react";

export default function PlatformHealthChart() {
    const [activeTab, setActiveTab] = useState("users");

    // Mock representations of the vertical layout bars
    const chartBars = [52, 68, 60, 74, 88, 38, 70, 64, 82];

    return (
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 shadow-xl">
            {/* Chart Headers and View Switches */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
                <div>
                    <h3 className="text-base font-serif font-semibold text-white tracking-tight">
                        Platform Health Analytics
                    </h3>
                    <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-0.5">
                        User Growth vs. Asset Generation (Past 30 Days)
                    </p>
                </div>

                {/* Dynamic Controls Switch */}
                <div className="flex items-center gap-6 text-xs font-sans font-medium text-[#c7c4d8]/50">
                    <button
                        onClick={() => setActiveTab("users")}
                        className={`flex items-center gap-2 cursor-pointer transition-colors ${activeTab === "users" ? "text-[#c3c0ff]" : "hover:text-white"}`}
                    >
                        <span className={`w-2 h-2 rounded-full ${activeTab === "users" ? "bg-[#c3c0ff] shadow-[0_0_8px_#c3c0ff]" : "bg-white/10"}`} />
                        Users
                    </button>

                    <button
                        onClick={() => setActiveTab("assets")}
                        className={`flex items-center gap-2 cursor-pointer transition-colors ${activeTab === "assets" ? "text-[#c3c0ff]" : "hover:text-white"}`}
                    >
                        <span className={`w-2 h-2 rounded-full ${activeTab === "assets" ? "bg-[#c3c0ff] shadow-[0_0_8px_#c3c0ff]" : "bg-white/10"}`} />
                        Assets
                    </button>
                </div>
            </div>

            {/* Fluid Bar Graph Container */}
            <div className="w-full h-48 bg-white/[0.01] border border-white/5 rounded-xl p-4 flex items-end justify-between gap-2 md:gap-4 overflow-hidden">
                {chartBars.map((height, idx) => (
                    <div
                        key={idx}
                        style={{ height: `${height}%` }}
                        className="w-full bg-white/15 rounded-t-md transition-all duration-500 hover:bg-[#c3c0ff]/30 cursor-pointer group relative"
                    >
                        {/* Tooltip representation on bar hover */}
                        <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-neutral-900 border border-white/10 text-[10px] px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity text-white whitespace-nowrap z-10">
                            Value: {height}%
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}