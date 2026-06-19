import { Check, Star } from "lucide-react";
import UpgradeButton from "./UpgradeButton";

export default function PricingSection() {
    return (
        <section className="w-full text-[#e0e3e5] pt-28 pb-16 px-6 flex flex-col justify-center items-center select-none bg-[#0a0a0a]">
            <div className="container mx-auto max-w-5xl">

                {/* Top Minimal Membership Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 bg-white/[0.04] border border-white/10 rounded-full px-4 py-1 text-xs font-sans text-[#c7c4d8]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c3c0ff]" />
                        Current Plan: Free Member
                    </div>
                </div>

                {/* Editorial Heading Structure — FIXED COLOR INVERSION */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-[#f8fafc] mb-4 drop-shadow-xs">
                        Invest in Your Growth.
                    </h1>
                    <p className="text-sm md:text-base text-[#c7c4d8] font-sans font-light leading-relaxed max-w-md mx-auto">
                        Unlock the full breadth of editorial insights and advanced productivity tools with a lifetime membership.
                    </p>
                </div>

                {/* Two-Tier Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full max-w-4xl mx-auto">

                    {/* Tier 1: Free Tier */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(255,255,255,0.01)] group">
                        <div>
                            <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                                Free Tier
                            </h3>
                            <p className="text-xs text-[#c7c4d8] font-sans font-light mb-8">
                                For curious minds exploring the essentials.
                            </p>

                            <div className="flex items-baseline text-white mb-8">
                                <span className="text-4xl md:text-5xl font-serif font-bold">৳0</span>
                                <span className="text-xs text-[#c7c4d8] font-sans font-light ml-2">/forever</span>
                            </div>

                            <ul className="space-y-4 font-sans text-sm text-[#e0e3e5] font-light">
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/10 text-[#c7c4d8] flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 stroke-[2.5]" />
                                    </div>
                                    <span>3 Lessons per month</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-white/[0.06] border border-white/10 text-[#c7c4d8] flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 stroke-[2.5]" />
                                    </div>
                                    <span>Standard Community Feed</span>
                                </li>
                            </ul>
                        </div>

                        <button
                            disabled
                            className="btn btn-md w-full bg-transparent border border-white/10 text-[#c7c4d8]/20 normal-case rounded-xl mt-12 font-medium pointer-events-none"
                        >
                            Current Selection
                        </button>
                    </div>

                    {/* Tier 2: Lifetime Pass */}
                    <div className="relative bg-white/[0.06] border border-white/15 rounded-3xl p-8 md:p-10 flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(195,192,255,0.03)] group">
                        <div className="absolute top-6 right-6">
                            <span className="inline-flex items-center gap-1.5 bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 text-[#c3c0ff] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md">
                                Premium
                                <Star className="w-2.5 h-2.5 fill-[#c3c0ff] stroke-none" />
                            </span>
                        </div>

                        <div>
                            <h3 className="text-2xl font-serif font-semibold text-white mb-2">
                                Lifetime Pass
                            </h3>
                            <p className="text-xs text-[#c7c4d8] font-sans font-light mb-8">
                                Bridging insight with maximum productivity.
                            </p>

                            <div className="flex items-baseline text-white mb-6">
                                <span className="text-4xl md:text-5xl font-serif font-bold">৳1,500</span>
                                <span className="text-xs text-[#c7c4d8] font-sans font-light ml-2">/one-time</span>
                            </div>

                            {/* Enhanced Indicator dot to match design document guidelines */}
                            <div className="w-full bg-white/[0.02] border border-white/[0.06] rounded-xl p-3 flex items-center gap-2.5 mb-8 text-[#c3c0ff] text-xs font-sans font-medium">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#c3c0ff] shadow-[0_0_8px_#c3c0ff]" />
                                <span>Special Launch Offer</span>
                            </div>

                            <ul className="space-y-4 font-sans text-sm text-white font-light">
                                {["Unlimited Lesson Creation", "Exclusive Editorial Content", "Ad-free Reading Experience", "Priority Profile Listing"].map((feat, index) => (
                                    <li key={index} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 text-[#c3c0ff] flex items-center justify-center shrink-0">
                                            <Check className="w-3 h-3 stroke-[3]" />
                                        </div>
                                        <span className={index === 0 ? "font-medium text-white" : "text-neutral-200"}>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Sub-component client side trigger button */}
                        <UpgradeButton />
                    </div>

                </div>
            </div>
        </section>
    );
}