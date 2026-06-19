import Link from "next/link";
import { Lock, Star } from "lucide-react";

/**
 * Reusable premium paywall overlay for lesson cards.
 * Extracted so it can be used in LessonCard, LessonsGrid, or any card context.
 */
export default function PremiumOverlay() {
  return (
    <div
      className="absolute inset-0 z-20 flex flex-col items-center justify-center p-6 text-center"
      style={{ background: "rgba(16, 20, 21, 0.6)" }}
    >
      <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 text-primary flex items-center justify-center mb-5">
        <Lock className="w-5 h-5 stroke-[1.75]" />
      </div>
      <h4 className="font-headline-md text-base font-semibold text-white mb-2">
        Premium Lesson
      </h4>
      <p className="text-xs text-on-surface-variant/60 max-w-xs mb-6 leading-relaxed">
        Unlock our deep-dive archives with a Pro subscription.
      </p>
      <Link
        href="/pricing"
        className="relative overflow-hidden bg-primary text-on-primary px-6 py-2.5 rounded-xl font-label-md text-xs font-medium flex items-center gap-2 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all duration-300 group/btn"
      >
        <Star className="w-3 h-3 fill-current" />
        Upgrade to Unlock
        <span className="absolute inset-0 -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      </Link>
    </div>
  );
}
