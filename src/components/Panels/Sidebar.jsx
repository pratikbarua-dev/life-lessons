import SidebarLink from "./SidebarLink";
import UpgradePlanCard from "@/components/lessons/UpgradePlanCard";

const MENU_GROUPS = [
    {
        title: "Personal Library",
        items: [
            { name: "My Lessons", href: "/my-lessons", iconName: "book" },
            { name: "Drafts", href: "/drafts", iconName: "edit" },
            { name: "Saved Lessons", href: "/saved-lessons", iconName: "bookmark" },
        ],
    },
    {
        title: "Insights",
        items: [
            { name: "Performance", href: "/performance", iconName: "chart" },
            { name: "Notebook Settings", href: "/settings", iconName: "settings" },
        ],
    },
];

export default function Sidebar() {
    return (
        <aside className="w-64 h-screen sticky top-0 bg-[#101415] border-r border-white/10 flex flex-col justify-between py-8 px-4 select-none shrink-0 z-20">
            <div className="flex flex-col gap-8">
                {MENU_GROUPS.map((group, gIdx) => (
                    <div key={gIdx} className="flex flex-col gap-3">
                        {/* Tracked Group Header Token */}
                        <h4 className="text-[11px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase px-3">
                            {group.title}
                        </h4>

                        {/* Group Navigation Items */}
                        <nav className="flex flex-col gap-1 w-full">
                            {group.items.map((item, iIdx) => (
                                <SidebarLink key={iIdx} item={item} />
                            ))}
                        </nav>

                        {/* Divider lines between groups */}
                        {gIdx === 0 && (
                            <div className="h-[1px] w-full bg-white/5 my-2 px-3" />
                        )}
                    </div>
                ))}
            </div>

            {/* Upgrade CTA pinned to sidebar bottom */}
            <UpgradePlanCard />
        </aside>
    );
}