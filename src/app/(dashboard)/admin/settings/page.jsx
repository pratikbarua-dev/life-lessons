import { Save, RefreshCw, Server, ShieldCheck, Database, Globe, Users, FileText } from "lucide-react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "System Settings",
};

async function getPlatformStats(headersList) {
    try {
        const cookie = headersList.get('cookie') || '';
        const tokenRes = await fetch(`${process.env.BETTER_AUTH_URL}/api/auth/token`, { headers: cookie ? { cookie } : {}, cache: 'no-store' });
        const token = tokenRes.ok ? (await tokenRes.json())?.token : "";
        if (!token) return null;

        const serverUrl = process.env.SERVER_URL || 'http://localhost:3100';
        const res = await fetch(`${serverUrl}/api/admin/stats`, {
            headers: { "Authorization": `Bearer ${token}` },
            cache: 'no-store'
        });
        if (!res.ok) return null;
        const data = await res.json();
        return data.success ? data.stats : null;
    } catch (err) {
        console.error("Error fetching platform stats:", err);
        return null;
    }
}

export default async function SystemSettingsPage() {
    const headersList = await headers();
    const session = await auth.api.getSession({ headers: headersList });

    if (!session || session.user.role !== 'admin') {
        redirect("/home");
    }

    const stats = await getPlatformStats(headersList);

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none">
            <div className="max-w-4xl mx-auto w-full flex flex-col gap-8">

                {/* Header Block */}
                <header className="border-b border-white/5 pb-6">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase block mb-1">
                        Configuration Matrix
                    </span>
                    <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
                        System Settings
                    </h1>
                    <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-1.5">
                        Platform overview and system configuration.
                    </p>
                </header>

                {/* Configuration Sections */}
                <div className="flex flex-col gap-6 w-full font-sans text-xs">

                    {/* Platform Overview */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
                        <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2 tracking-tight">
                            <Server className="w-4 h-4 text-[#c3c0ff]" /> Platform Overview
                        </h3>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { label: "Total Users", value: stats?.totalUsers ?? '—', icon: Users, color: "text-[#4DD0B1]" },
                                { label: "Public Lessons", value: stats?.totalPublicLessons ?? '—', icon: Globe, color: "text-[#FCD34D]" },
                                { label: "Private Drafts", value: stats?.totalDrafts ?? '—', icon: FileText, color: "text-[#c3c0ff]" },
                                { label: "Pending Reports", value: stats?.pendingReports ?? '—', icon: ShieldCheck, color: "text-[#FF4A3A]" },
                            ].map((item) => (
                                <div key={item.label} className="bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col gap-2">
                                    <item.icon className={`w-4 h-4 ${item.color}`} />
                                    <span className="text-2xl font-bold text-white">{item.value}</span>
                                    <span className="text-[10px] text-[#c7c4d8]/40 font-light uppercase tracking-wider">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Environment Info */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
                        <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2 tracking-tight">
                            <Database className="w-4 h-4 text-[#c3c0ff]" /> Environment
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#c7c4d8]/40 uppercase">Platform Environment</label>
                                <div className="h-10 bg-white/[0.02] border border-white/5 rounded-xl px-4 flex items-center text-[#4DD0B1] font-medium">
                                    Production / Stable
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#c7c4d8]/40 uppercase">Auth Provider</label>
                                <div className="h-10 bg-white/[0.02] border border-white/5 rounded-xl px-4 flex items-center text-[#c7c4d8]/60">
                                    Better-Auth + Google OAuth
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#c7c4d8]/40 uppercase">Payment Gateway</label>
                                <div className="h-10 bg-white/[0.02] border border-white/5 rounded-xl px-4 flex items-center text-[#c7c4d8]/60">
                                    Stripe (Test Mode)
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold tracking-wider text-[#c7c4d8]/40 uppercase">Database</label>
                                <div className="h-10 bg-white/[0.02] border border-white/5 rounded-xl px-4 flex items-center text-[#c7c4d8]/60">
                                    MongoDB Atlas
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Cache Controls */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-5">
                        <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2 tracking-tight">
                            <RefreshCw className="w-4 h-4 text-[#c3c0ff]" /> Cache & Pipeline Controls
                        </h3>
                        <p className="text-[#c7c4d8]/40 font-light leading-normal -mt-2">
                            Operational actions for cache management and system verification.
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-2">
                            <button className="h-10 px-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer">
                                <RefreshCw className="w-3.5 h-3.5" /> Purge Asset Cache
                            </button>
                            <button className="h-10 px-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold rounded-xl flex items-center gap-2 transition-colors cursor-pointer">
                                <ShieldCheck className="w-3.5 h-3.5" /> Force Route Verification
                            </button>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}