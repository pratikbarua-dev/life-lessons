"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    BookOpen, FileEdit, Bookmark, BarChart3, Settings,
    LayoutDashboard, Users2, Library, Flag, UserCog
} from "lucide-react";

const COMPREHENSIVE_ICON_MAP = {
    // User Scope Nodes
    book: BookOpen,
    edit: FileEdit,
    bookmark: Bookmark,
    chart: BarChart3,
    settings: Settings,

    // Admin Scope Nodes
    command: LayoutDashboard,
    users: Users2,
    content: Library,
    flag: Flag,
    profile: UserCog,
};

export default function SidebarLink({ item }) {
    const pathname = usePathname();
    const isActive = pathname === item.href;

    const Icon = COMPREHENSIVE_ICON_MAP[item.iconName] || BookOpen;

    return (
        <Link
            href={item.href}
            className={`relative w-full h-11 rounded-xl flex items-center gap-3.5 px-4 font-sans font-medium text-sm transition-all duration-200 select-none ${isActive
                ? "bg-white/[0.04] text-[#c3c0ff]"
                : "text-[#c7c4d8]/60 hover:text-white hover:bg-white/[0.02]"
                }`}
        >
            {isActive && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-r bg-[#c3c0ff] shadow-[0_0_8px_#c3c0ff]" />
            )}

            <Icon className={`w-4 h-4 shrink-0 ${isActive ? "stroke-[2.25]" : "stroke-[1.75]"}`} />
            <span>{item.name}</span>
        </Link>
    );
}