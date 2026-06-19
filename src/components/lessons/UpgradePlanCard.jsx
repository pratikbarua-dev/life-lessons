import Link from "next/link";

export default function UpgradePlanCard() {
    return (
        <div className="w-full bg-white/[0.04] border border-white/10 rounded-xl p-4 flex flex-col gap-4 mt-auto">
            <div>
                <h4 className="text-xs font-sans font-bold text-white tracking-wide">Upgrade Plan</h4>
                <p className="text-[11px] font-sans text-[#c7c4d8]/40 font-light leading-relaxed mt-1">
                    Unlock detailed editorial metrics and private collections.
                </p>
            </div>
            <Link
                href="/pricing"
                className="w-full h-9 bg-[#c3c0ff] hover:bg-[#b0adfa] text-[#1d00a5] font-sans font-bold text-xs rounded-lg flex items-center justify-center transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
                Explore Pro
            </Link>
        </div>
    );
}