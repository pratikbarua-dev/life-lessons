import { ArrowUpRight, Globe, AlertCircle, TrendingUp } from "lucide-react";

const METRICS = [
    { title: "Total Active Minds", value: "142.8k", sub: "+12% vs last month", style: "bg-white/[0.04] border-white/10 text-emerald-400", icon: TrendingUp },
    { title: "Total System Wisdom", value: "1.2M", sub: "Global Lesson Count", style: "bg-white/[0.04] border-white/10 text-[#c7c4d8]/40", icon: Globe },
    { title: "Pending Reports", value: "41", sub: "Immediate action required", style: "bg-red-500/5 border-red-500/10 text-red-400", icon: AlertCircle },
    { title: "Premium Conversions", value: "8.4%", sub: "Exceeding quarterly goal", style: "bg-white/[0.06] border-[#c3c0ff]/30 text-amber-400 shadow-[0_0_20px_rgba(195,192,255,0.02)]", icon: ArrowUpRight, isFeatured: true },
];

export default function OverviewMetrics() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
            {METRICS.map((item, index) => {
                const Icon = item.icon;
                return (
                    <div
                        key={index}
                        className={`border rounded-2xl p-5 flex flex-col justify-between min-h-[125px] transition-all duration-300 hover:scale-[1.01] ${item.style}`}
                    >
                        <div>
                            <span className="text-[10px] font-sans font-bold tracking-wider text-[#c7c4d8]/30 uppercase block mb-2">
                                {item.title}
                            </span>
                            <h3 className="text-2xl font-sans font-bold text-white tracking-tight">
                                {item.value}
                            </h3>
                        </div>
                        <div className="flex items-center gap-1.5 text-[11px] mt-3 font-medium">
                            <Icon className="w-3.5 h-3.5 shrink-0" />
                            <span className={item.isFeatured ? "text-[#c7c4d8]/70 font-light" : ""}>{item.sub}</span>
                        </div>
                    </div>
                );
            })}
        </section>
    );
}