"use client";

import Sidebar from "@/components/Panels/Sidebar";
import BannedScreen from "@/components/Panels/BannedScreen";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function DashboardLayout({ children }) {
  const [bannedData, setBannedData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const tokenRes = await authClient.token();
        const token = tokenRes?.data?.token;
        if (!token) {
          setIsLoading(false);
          return;
        }

        const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3100';
        const res = await fetch(`${serverUrl}/api/users/me/status`, {
          headers: { "Authorization": `Bearer ${token}` }
        });
        
        if (res.ok) {
          const data = await res.json();
          if (data.success && data.data.isBanned) {
            setBannedData(data.data);
          }
        }
      } catch (error) {
        console.error("Status check failed:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    checkStatus();
  }, []);

  if (isLoading) {
    return <div className="min-h-screen bg-[#F6F0DD] flex items-center justify-center"><div className="w-12 h-12 border-4 border-[#1C1611] border-t-transparent rounded-full animate-spin"></div></div>;
  }

  if (bannedData) {
    return <div className="min-h-screen bg-[#F6F0DD]"><BannedScreen appealStatus={bannedData.appealStatus} /></div>;
  }

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