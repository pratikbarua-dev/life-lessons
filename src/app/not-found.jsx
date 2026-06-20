import Link from "next/link";
import { Home, Search, BookOpen, Sparkles, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-[#F6F0DD] text-[#1C1611] px-4 py-16 flex flex-col justify-between items-center select-none overflow-hidden relative">
      
      {/* Blueprint Dot Matrix texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(#1C1611 1.5px, transparent 1.5px)",
          backgroundSize: "20px 20px"
        }}
        aria-hidden="true"
      />

      {/* Top Brand Token Header */}
      <header className="z-10 relative">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-wider text-[#1C1611]">
          Digital Life Lessons
        </h2>
      </header>

      {/* Primary Error Context Card */}
      <main className="w-full max-w-2xl bg-[#FCD34D] border-[3.5px] border-[#1C1611] rounded-3xl p-8 sm:p-12 md:p-16 mx-auto my-auto text-center relative shadow-[6px_6px_0px_0px_#1C1611] flex flex-col items-center z-10 transition-all duration-100">
        
        {/* Ambient watermark icon behind the error number */}
        <div className="absolute top-10 text-[#1C1611]/5 pointer-events-none select-none">
          <Compass className="w-40 h-40 stroke-[0.5]" />
        </div>

        {/* Luxury Editorial Error Number */}
        <h1 className="text-[90px] sm:text-[120px] md:text-[140px] font-black leading-none tracking-tighter text-[#1C1611] italic select-none">
          404
        </h1>

        {/* Heading */}
        <h3 className="text-2xl sm:text-3xl font-black text-[#1C1611] tracking-tight mt-4 mb-3 uppercase">
          A path less traveled.
        </h3>

        {/* Informative message */}
        <p className="text-xs sm:text-sm text-[#1C1611]/80 font-bold leading-relaxed max-w-md mx-auto mb-10 uppercase">
          This specific lesson has yet to be written into our digital history. It seems you&rsquo;ve drifted beyond the mapped territories of our insight.
        </p>

        {/* Fluid Button Array Configuration */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FF4A3A] text-white font-black uppercase text-sm h-12 px-6 rounded-xl border-[2.5px] border-[#1C1611] shadow-[2.5px_2.5px_0px_0px_#1C1611] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1611] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all cursor-pointer"
          >
            <Home className="w-4 h-4 stroke-[3px]" />
            Return Home
          </Link>

          <Link
            href="/my-lessons"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white text-[#1C1611] font-black uppercase text-sm h-12 px-6 rounded-xl border-[2.5px] border-[#1C1611] shadow-[2.5px_2.5px_0px_0px_#1C1611] hover:translate-x-[0.5px] hover:translate-y-[0.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1611] active:translate-x-[1.5px] active:translate-y-[1.5px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all cursor-pointer"
          >
            <Search className="w-4 h-4 text-[#1C1611] stroke-[3px]" />
            Search Lessons
          </Link>
        </div>

        {/* Bottom Technical System Stamp Reference */}
        <span className="text-[10px] font-mono tracking-widest text-[#1C1611]/60 font-black uppercase mt-12 block select-none">
          Error Ref: #NO_ENTRY_FOUND_0x404
        </span>
      </main>

      {/* Page Base Architectural Philosophy Links */}
      <footer className="w-full max-w-md flex justify-center items-center gap-8 md:gap-12 mt-auto z-10 pt-8 border-t-2 border-[#1C1611]">
        <div className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity text-[#1C1611]">
          <BookOpen className="w-4 h-4 stroke-[2.5px]" />
          <span className="text-[9px] font-black tracking-widest uppercase">Philosophy</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity text-[#1C1611]">
          <Sparkles className="w-4 h-4 stroke-[2.5px]" />
          <span className="text-[9px] font-black tracking-widest uppercase">Focus</span>
        </div>
        <div className="flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity text-[#1C1611]">
          <Compass className="w-4 h-4 stroke-[2.5px]" />
          <span className="text-[9px] font-black tracking-widest uppercase">Structure</span>
        </div>
      </footer>

    </div>
  );
}