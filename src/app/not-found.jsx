import Link from "next/link";
import { Home, Search, BookOpen, Sparkles, Compass } from "lucide-react";

export default function NotFound() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] px-4 py-16 flex flex-col justify-between items-center select-none overflow-hidden font-sans relative">

            {/* Top Brand Token Header */}
            <header className="z-10">
                <h2 className="text-xl md:text-2xl font-serif font-bold tracking-wide text-[#c3c0ff] drop-shadow-[0_0_15px_rgba(195,192,255,0.1)]">
                    Digital Life Lessons
                </h2>
            </header>

            {/* Primary Error Context Card */}
            <main className="w-full max-w-2xl bg-white/[0.03] border border-white/10 rounded-3xl p-8 sm:p-12 md:p-16 mx-auto my-auto text-center relative shadow-[0_24px_60px_rgba(0,0,0,0.8)] flex flex-col items-center group z-10 transition-all duration-300 hover:border-white/15">

                {/* Subtle dynamic backdrop glow */}
                <div className="absolute -inset-10 bg-[#c3c0ff]/5 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none" />

                {/* Ambient watermark icon behind the error number */}
                <div className="absolute top-10 text-white/[0.01] pointer-events-none select-none">
                    <Compass className="w-40 h-40 stroke-[0.5]" />
                </div>

                {/* Luxury Editorial Error Number */}
                <h1 className="text-[90px] sm:text-[120px] md:text-[140px] font-serif font-light leading-none tracking-tighter bg-gradient-to-b from-white via-[#c3c0ff] to-[#7c78c3] bg-clip-text text-transparent italic drop-shadow-sm select-none">
                    404
                </h1>

                {/* Heading */}
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white tracking-tight mt-4 mb-3">
                    A path less traveled.
                </h3>

                {/* Informative message parameter specs */}
                <p className="text-xs sm:text-sm text-[#c7c4d8]/60 font-light leading-relaxed max-w-md mx-auto mb-10">
                    This specific lesson has yet to be written into our digital history. It seems you've drifted beyond the mapped territories of our insight.
                </p>

                {/* Fluid Button Array Configuration */}
                <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#c3c0ff] hover:bg-[#b0adfa] text-[#1d00a5] font-bold text-sm h-11 px-6 rounded-xl shadow-lg transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    >
                        <Home className="w-4 h-4" />
                        Return Home
                    </Link>

                    <Link
                        href="/my-lessons"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 text-white font-bold text-sm h-11 px-6 rounded-xl transition-all duration-200 active:scale-[0.98] cursor-pointer"
                    >
                        <Search className="w-4 h-4 text-[#c7c4d8]" />
                        Search Lessons
                    </Link>
                </div>

                {/* Bottom Technical System Stamp Reference */}
                <span className="text-[9px] font-mono tracking-widest text-white/15 uppercase mt-12 block select-none">
                    Error Ref: #NO_ENTRY_FOUND_0x404
                </span>
            </main>

            {/* Page Base Architectural Philosophy Links */}
            <footer className="w-full max-w-md flex justify-center items-center gap-8 md:gap-12 mt-auto z-10 pt-8 border-t border-white/[0.02]">
                <div className="flex flex-col items-center gap-1.5 opacity-30 hover:opacity-70 transition-opacity">
                    <BookOpen className="w-4 h-4 text-white stroke-[1.5]" />
                    <span className="text-[9px] font-bold tracking-widest uppercase">Philosophy</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 opacity-30 hover:opacity-70 transition-opacity">
                    <Sparkles className="w-4 h-4 text-white stroke-[1.5]" />
                    <span className="text-[9px] font-bold tracking-widest uppercase">Focus</span>
                </div>
                <div className="flex flex-col items-center gap-1.5 opacity-30 hover:opacity-70 transition-opacity">
                    <Compass className="w-4 h-4 text-white stroke-[1.5]" />
                    <span className="text-[9px] font-bold tracking-widest uppercase">Structure</span>
                </div>
            </footer>

        </div>
    );
}