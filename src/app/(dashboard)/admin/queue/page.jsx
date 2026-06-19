import ContentSafetyCounters from "@/components/Panels/admin/ContentSafetyCounters";
import ModerationQueueTable from "@/components/Panels/admin/ModerationQueueTable";
import ReportAnalysisPanel from "@/components/Panels/admin/ReportAnalysisPanel";

export default function FlaggedQueuePage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none flex flex-col gap-8">

            {/* Page Header */}
            <header className="w-full border-b border-white/5 pb-6">
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase block mb-1">
                    Moderation Hub
                </span>
                <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
                    Flagged Queue
                </h1>
                <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-1.5 max-w-xl leading-relaxed">
                    Real-time stream of reported platform content. Review policy violations and enforce platform safety actions immediately.
                </p>
            </header>

            {/* Split Responsive Columns Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start w-full min-w-0">

                {/* Left Hand Matrix & Feed Stream Column */}
                <div className="lg:col-span-2 flex flex-col gap-6 w-full min-w-0">
                    <ContentSafetyCounters />
                    <ModerationQueueTable />
                </div>

                {/* Right Hand Isolated Flyout Control Area */}
                <div className="w-full min-w-0">
                    <ReportAnalysisPanel />
                </div>

            </div>

        </div>
    );
}