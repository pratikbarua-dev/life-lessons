import { BarChart3, Globe, Award } from "lucide-react";

const STATS_CARDS = [
    {
        title: "Total Engagement",
        metric: "4.8k",
        subtext: "↑ 12% from last month",
        icon: BarChart3,
    },
    {
        title: "Public Footprint",
        metric: "18 Lessons",
        subtext: "64% of your collection is shared",
        icon: Globe,
    },
    {
        title: "Reader Rank",
        metric: "Philosopher",
        subtext: "Next level: Stoic Master at 5k likes",
        icon: Award,
    },
];

export default function PerformanceCards() {
    return (
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
            {STATS_CARDS.map((card, index) => {
                const Icon = card.icon;
                return (
                    <div
                        key={index}
                        className={`bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col items-start justify-between min-h-[140px] transition-all duration-300 hover:scale-[1.01] ${index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
                            }`}
                    >
                        <div className="w-full">
                            <div className="flex items-center justify-between w-full mb-3 text-[#c7c4d8]/40">
                                <span className="text-[11px] font-sans font-bold tracking-wider uppercase">{card.title}</span>
                                <Icon className="w-4 h-4" />
                            </div>
                            <h3 className={`tracking-tight text-white font-bold ${index === 2 ? "text-xl md:text-2xl font-serif mt-1" : "text-2xl md:text-3xl font-sans"
                                }`}>
                                {card.metric}
                            </h3>
                        </div>
                        <p className="text-[11px] font-sans text-[#c7c4d8]/30 font-light mt-4">{card.subtext}</p>
                    </div>
                );
            })}
        </section>
    );
}