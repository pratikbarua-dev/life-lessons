// src/app/(dashboard)/layout.jsx

import Sidebar from "@/components/Panels/Sidebar";


export default function DashboardLayout({ children }) {
    return (
        <div className="flex w-full min-h-screen bg-[#0a0a0a] overflow-x-hidden">
            {/* Left Column: Fixed/Sticky Side Panel */}
            <Sidebar />

            {/* Right Column: Dynamic Screen Space */}
            <main className="flex-grow min-w-0 flex flex-col relative">
                {children}
            </main>
        </div>
    );
}