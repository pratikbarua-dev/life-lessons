"use client";

export default function UpgradeButton() {
    const handleUpgrade = () => {
        console.log("Redirecting to premium secure payment checkout...");
    };

    return (
        <div className="mt-12 flex flex-col items-center gap-4 w-full relative">
            {/* Soft atmospheric ambient glow underneath the button element */}
            <div className="absolute -inset-1.5 bg-[#c3c0ff]/15 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Bigger, wider, and more premium call-to-action button */}
            <button
                onClick={handleUpgrade}
                className="w-full h-14 relative overflow-hidden bg-[#c3c0ff] text-[#1d00a5] border border-white/20 font-sans font-bold text-base tracking-normal rounded-xl shadow-[0_6px_24px_rgba(195,192,255,0.2)] transition-all duration-300 active:scale-[0.985] cursor-pointer group/btn flex items-center justify-center"
            >
                {/* Hardware-accelerated sliding gradient sheen on hover */}
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-out will-change-transform" />

                {/* Text Content */}
                <span className="relative z-10">
                    Upgrade to Premium
                </span>
            </button>

            {/* Sub-label matching your page tracking design document specifications */}
            <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase select-none mt-1">
                No Subscription. Just Mastery.
            </span>
        </div>
    );
}