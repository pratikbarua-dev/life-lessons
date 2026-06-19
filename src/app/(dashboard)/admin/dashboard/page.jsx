import OverviewMetrics from "@/components/Panels/admin/OverviewMetrics";
import PlatformHealthChart from "@/components/Panels/admin/PlatformHealthChart";
import ModerationFeed from "@/components/Panels/admin/ModerationFeed";
import SystemEventsLog from "@/components/Panels/admin/SystemEventsLog";
import Image from "next/image";

export default function AdminDashboardPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none flex flex-col gap-8">
            <div className="max-w-7xl mx-auto w-full flex flex-col gap-8">

                {/* Global Admin Header Nav Area */}
                <header className="flex flex-row items-center justify-between gap-4 border-b border-white/5 pb-6">
                    <div>
                        <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase block mb-1">
                            Admin Control Center
                        </span>
                        <h1 className="text-xl font-serif font-bold text-white tracking-tight">
                            Command Center Overview
                        </h1>
                        <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-1 hidden sm:block">
                            Real-time oversight of global editorial growth and moderation priority.
                        </p>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                        <div className="flex flex-col items-end text-right hidden sm:flex">
                            <span className="text-sm font-sans font-semibold text-white leading-none">Marcus Thorne</span>
                            <span className="text-[11px] font-sans text-[#c3c0ff] font-medium mt-1">Lead Editor</span>
                        </div>
                        <div className="w-9 h-9 rounded-full border border-purple-500/20 relative overflow-hidden bg-white/5">
                            <Image
                                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop"
                                alt="Admin avatar"
                                fill
                                sizes="36px"
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </header>

                {/* Overview Metric Row */}
                <OverviewMetrics />

                {/* Main Analytics Visualization Section */}
                <PlatformHealthChart />

                {/* Bottom Split Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start w-full min-w-0">
                    <div className="lg:col-span-2 min-w-0 w-full">
                        <ModerationFeed />
                    </div>
                    <div className="w-full">
                        <SystemEventsLog />
                    </div>
                </div>

            </div>
        </div>
    );
}