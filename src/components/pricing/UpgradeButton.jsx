"use client";

export default function UpgradeButton() {
  const handleUpgrade = () => {
    console.log("Redirecting to premium secure payment checkout...");
  };

  return (
    <div className="mt-12 flex flex-col items-center gap-4 w-full relative">
      <button
        onClick={handleUpgrade}
        className="w-full h-14 bg-[#FF4A3A] text-[#1C1611] border-[3px] border-[#1C1611] font-black uppercase text-sm tracking-wider rounded-xl shadow-[4px_4px_0px_0px_#1C1611] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[3px_3px_0px_0px_#1C1611] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100 cursor-pointer flex items-center justify-center"
      >
        <span className="relative z-10">
          Upgrade to Premium
        </span>
      </button>

      <span className="text-[10px] font-black tracking-widest text-[#1C1611]/70 uppercase select-none mt-1">
        No Subscription. Just Mastery.
      </span>
    </div>
  );
}