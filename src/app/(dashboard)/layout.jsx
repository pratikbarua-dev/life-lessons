import Sidebar from "@/components/Panels/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div className="flex w-full min-h-screen bg-[#F6F0DD] overflow-x-hidden text-[#1C1611]">
      {/* Left Column: Fixed/Sticky Side Panel */}
      <Sidebar />

      {/* Right Column: Dynamic Screen Space */}
      <main className="flex-grow min-w-0 flex flex-col relative bg-[#F6F0DD]">
        {children}
      </main>
    </div>
  );
}