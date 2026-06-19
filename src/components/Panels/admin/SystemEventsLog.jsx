import { Check, ShieldAlert, Terminal } from "lucide-react";

const RECENT_EVENTS = [
    { id: 1, type: "verified", label: "New Publisher Verified", text: "Elena Vance passed editorial review.", time: "14m ago" },
    { id: 2, type: "limit", label: "API Limit Increase", text: "Content generation tiers updated.", time: "1h ago" },
    { id: 3, type: "system", label: "Server Maintenance", text: "Scheduled for Sunday 03:00 UTC.", time: "4h ago" },
];

export default function SystemEventsLog() {
    return (
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between min-h-[340px]">
            <div className="w-full">
                <h3 className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase mb-5">
                    Recent System Events
                </h3>

                <div className="flex flex-col gap-5 w-full">
                    {RECENT_EVENTS.map((event) => (
                        <div key={event.id} className="flex gap-3.5 items-start text-xs font-sans">
                            <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 border mt-0.5 ${event.type === "verified" ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                                event.type === "limit" ? "bg-[#c3c0ff]/10 border-[#c3c0ff]/20 text-[#c3c0ff]" :
                                    "bg-purple-500/10 border-purple-500/20 text-purple-400"
                                }`}>
                                {event.type === "verified" ? <Check className="w-3.5 h-3.5 stroke-[2.5]" /> :
                                    event.type === "limit" ? <ShieldAlert className="w-3.5 h-3.5" /> :
                                        <Terminal className="w-3.5 h-3.5" />}
                            </div>
                            <div className="min-w-0">
                                <h4 className="font-semibold text-white tracking-tight">{event.label}</h4>
                                <p className="text-[#c7c4d8]/50 font-light mt-0.5 leading-normal">{event.text}</p>
                                <span className="text-[10px] text-[#c7c4d8]/30 font-light mt-1 block">{event.time}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button className="w-full h-10 border border-white/10 hover:border-white/20 text-white font-sans font-bold text-xs rounded-xl mt-6 transition-colors cursor-pointer whitespace-nowrap">
                Download Full Logs
            </button>
        </div>
    );
}