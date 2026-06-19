"use client";

import { usePathname } from "next/navigation";
import SidebarLink from "./SidebarLink";
import UpgradePlanCard from "@/components/lessons/UpgradePlanCard";

export default function SidebarMenuRouter({ userMenu, adminMenu }) {
    const pathname = usePathname();

    // Dynamically determine context by checking if the path contains '/admin'
    const isAdmin = pathname?.startsWith("/admin");
    const activeMenuGroups = isAdmin ? adminMenu : userMenu;

    return (
        <aside className="w-64 h-screen sticky top-0 bg-[#101415] border-r border-white/10 flex flex-col justify-between py-8 px-4 select-none shrink-0 z-20">
            <div className="flex flex-col gap-8">
                {activeMenuGroups.map((group, gIdx) => (
                    <div key={gIdx} className="flex flex-col gap-3">
                        <h4 className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase px-3">
                            {group.title}
                        </h4>

                        <nav className="flex flex-col gap-1 w-full">
                            {group.items.map((item, iIdx) => (
                                <SidebarLink key={iIdx} item={item} />
                            ))}
                        </nav>

                        {gIdx === 0 && (
                            <div className="h-[1px] w-full bg-white/5 my-2 px-3" />
                        )}
                    </div>
                ))}
            </div>

            {/* Context-aware footer widget */}
            {isAdmin ? (
                <div className="w-full bg-white/[0.02] border border-white/5 rounded-xl p-3.5 font-sans">
                    <div className="flex items-center gap-2 text-xs font-semibold text-white">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                        System Status: Stable
                    </div>
                    <p className="text-[10px] text-[#c7c4d8]/30 font-light mt-1">v2.4.0 Editorial-Pulse</p>
                </div>
            ) : (
                <UpgradePlanCard />
            )}
        </aside>
    );
}