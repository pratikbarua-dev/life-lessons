import Link from "next/link";
import { Lock, Star } from "lucide-react";

export default function PremiumOverlay() {
  return (
    <div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center bg-[#1C1611]/90"
    >
      <div className="w-12 h-12 rounded-xl bg-[#FCD34D] border-2 border-[#1C1611] text-[#1C1611] flex items-center justify-center mb-5 shadow-[2px_2px_0px_0px_#1C1611]">
        <Lock className="w-5 h-5 stroke-[2.5px]" />
      </div>
      <h4 className="font-black text-base text-white mb-2 uppercase tracking-tight">
        Premium Lesson
      </h4>
      <p className="text-xs text-white/80 max-w-xs mb-6 leading-relaxed font-bold">
        Unlock our deep-dive archives with a Pro subscription.
      </p>
      <Link
        href="/pricing"
        className="bg-[#FF4A3A] text-[#1C1611] px-6 py-2.5 rounded-full font-black text-xs uppercase flex items-center gap-2 border-[2.5px] border-[#1C1611] shadow-[3px_3px_0px_0px_#1C1611] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1611] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100"
      >
        <Star className="w-3.5 h-3.5 fill-[#1C1611] stroke-[#1C1611] stroke-[2px]" />
        Upgrade to Unlock
      </Link>
    </div>
  );
}
