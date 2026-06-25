import { Shield, Mail, Key, Activity, Calendar } from "lucide-react";
import Image from "next/image";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "Admin Profile",
};

export default async function AdminProfilePage() {
    const headersList = await headers();
    const session = await auth.api.getSession({ headers: headersList });

    if (!session || session.user.role !== 'admin') {
        redirect("/home");
    }

    const user = session.user;
    const joinDate = user.createdAt ? new Date(user.createdAt).toLocaleDateString('en-US', { month: 'long', year: 'numeric' }) : 'N/A';

    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none">
            <div className="max-w-4xl mx-auto w-full flex flex-col gap-8">

                {/* Header Block */}
                <header className="border-b border-white/5 pb-6">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase block mb-1">
                        Identity Card
                    </span>
                    <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
                        Admin Profile
                    </h1>
                </header>

                {/* Profile Card Hero Component */}
                <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl">
                    {/* Avatar Container */}
                    <div className="w-20 h-20 rounded-full border-2 border-[#c3c0ff]/30 relative overflow-hidden bg-white/5 shrink-0 shadow-lg">
                        {user.image ? (
                            <Image
                                src={user.image}
                                alt={`${user.name} Profile Avatar`}
                                fill
                                sizes="80px"
                                className="object-cover"
                            />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-white font-black text-2xl uppercase">
                                {user.name?.charAt(0) || '?'}
                            </div>
                        )}
                    </div>

                    {/* Info Elements */}
                    <div className="flex-grow text-center sm:text-left">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 justify-center sm:justify-start">
                            <h2 className="text-xl font-sans font-bold text-white tracking-tight">{user.name}</h2>
                            <span className="inline-flex items-center justify-center gap-1 bg-[#c3c0ff]/10 border border-[#c3c0ff]/20 text-xs text-[#c3c0ff] px-2.5 py-0.5 rounded-full w-max mx-auto sm:mx-0 font-medium">
                                <Shield className="w-3 h-3" /> {user.isPremium ? 'Premium Admin' : 'Admin'}
                            </span>
                        </div>
                        <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                            <Mail className="w-3.5 h-3.5" /> {user.email}
                        </p>
                        <p className="text-[11px] text-[#c7c4d8]/30 font-sans font-light mt-3 flex items-center justify-center sm:justify-start gap-1.5">
                            <Calendar className="w-3.5 h-3.5" /> Member since: {joinDate}
                        </p>
                    </div>
                </div>

                {/* Security / System Logs Section Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans text-xs">

                    {/* Account Details Block */}
                    <div className="md:col-span-2 bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col gap-4">
                        <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2 tracking-tight">
                            <Activity className="w-4 h-4 text-[#c3c0ff]" /> Account Details
                        </h3>

                        <div className="flex flex-col gap-3 w-full divide-y divide-white/[0.04]">
                            {[
                                { label: "User ID", value: user.id },
                                { label: "Role", value: user.role?.toUpperCase() || 'ADMIN' },
                                { label: "Tier", value: user.isPremium ? 'PREMIUM' : 'FREE' },
                                { label: "Email Verified", value: user.emailVerified ? 'Yes' : 'No' },
                            ].map((item) => (
                                <div key={item.label} className="flex justify-between items-center pt-3 first:pt-0 gap-4">
                                    <span className="text-[#c7c4d8]/40 font-light">{item.label}</span>
                                    <span className="text-white font-medium text-right truncate max-w-[200px]">{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Direct Security Token Box Controls */}
                    <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-6 flex flex-col justify-between min-h-[180px]">
                        <div>
                            <h3 className="text-sm font-serif font-bold text-white flex items-center gap-2 tracking-tight">
                                <Key className="w-4 h-4 text-[#c3c0ff]" /> Security
                            </h3>
                            <p className="text-[11px] text-[#c7c4d8]/40 font-light leading-normal mt-2">
                                Session is managed by Better-Auth with JWT tokens.
                            </p>
                        </div>

                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#4DD0B1] animate-pulse" />
                                <span className="text-[10px] text-[#c7c4d8]/50 font-light">Session Active</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}