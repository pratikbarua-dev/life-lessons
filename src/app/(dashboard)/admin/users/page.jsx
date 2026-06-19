import { Shield, UserMinus, Search, Filter } from "lucide-react";

const ADMIN_USERS = [
    { id: 1, name: "Elena Vance", email: "elena@blackmesa.org", role: "Publisher", joined: "Jan 12, 2026", status: "Active" },
    { id: 2, name: "Julian Thorne", email: "julian@digitalessons.io", role: "Creator", joined: "Mar 05, 2026", status: "Active" },
    { id: 3, name: "Kaelen Voss", email: "kaelen@voss.design", role: "Free Member", joined: "Jun 19, 2026", status: "Suspended" },
];

export default function ManageUsersPage() {
    return (
        <div className="w-full min-h-screen bg-[#0a0a0a] text-[#e0e3e5] p-4 sm:p-6 md:p-10 select-none">
            <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">

                {/* Header Block */}
                <header className="border-b border-white/5 pb-6">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase block mb-1">
                        Control Panel
                    </span>
                    <h1 className="text-3xl font-serif font-bold text-white tracking-tight">
                        Manage Users
                    </h1>
                    <p className="text-xs text-[#c7c4d8]/40 font-sans font-light mt-1.5">
                        Administer global user access levels, modify credential parameters, and control suspensions.
                    </p>
                </header>

                {/* Search Strip */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="relative w-full sm:max-w-md">
                        <span className="absolute inset-y-0 left-3.5 flex items-center pointer-events-none text-white/20">
                            <Search className="w-4 h-4" />
                        </span>
                        <input
                            type="text"
                            placeholder="Search users by name or email..."
                            className="w-full h-10 pl-10 pr-4 bg-white/[0.04] border border-white/10 text-white text-xs font-sans font-light rounded-xl focus:outline-none"
                        />
                    </div>
                    <button className="h-10 px-4 bg-white/[0.04] border border-white/10 rounded-xl text-xs font-sans font-medium text-[#c7c4d8]/70 flex items-center gap-2 self-end sm:self-auto">
                        <Filter className="w-3.5 h-3.5" /> Filter Roles
                    </button>
                </div>

                {/* Datatable Frame */}
                <div className="w-full bg-white/[0.04] border border-white/10 rounded-2xl shadow-xl overflow-hidden">
                    <div className="w-full overflow-x-auto">
                        <table className="table w-full border-collapse min-w-[600px] lg:min-w-0">
                            <thead>
                                <tr className="border-b border-white/10 bg-white/[0.01] text-[10px] font-sans font-bold tracking-widest text-[#c7c4d8]/30 uppercase">
                                    <th className="p-5 text-left">User Identity</th>
                                    <th className="p-5 text-left">System Role</th>
                                    <th className="p-5 text-left">Registration</th>
                                    <th className="p-5 text-left">Account Status</th>
                                    <th className="p-5 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/[0.06] text-xs font-sans">
                                {ADMIN_USERS.map((user) => (
                                    <tr key={user.id} className="hover:bg-white/[0.02] transition-colors">
                                        <td className="p-5">
                                            <div className="font-semibold text-white">{user.name}</div>
                                            <div className="text-[11px] text-[#c7c4d8]/40 mt-0.5">{user.email}</div>
                                        </td>
                                        <td className="p-5 text-[#c7c4d8]/70 font-medium">{user.role}</td>
                                        <td className="p-5 text-[#c7c4d8]/40 font-light">{user.joined}</td>
                                        <td className="p-5">
                                            <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${user.status === "Active" ? "bg-emerald-500/10 text-emerald-400" : "bg-red-500/10 text-red-400"
                                                }`}>
                                                {user.status}
                                            </span>
                                        </td>
                                        <td className="p-5">
                                            <div className="flex items-center justify-center gap-4 text-[#c7c4d8]/40">
                                                <button className="hover:text-[#c3c0ff] transition-colors" title="Modify Roles"><Shield className="w-4 h-4" /></button>
                                                <button className="hover:text-red-400 transition-colors" title="Suspend User"><UserMinus className="w-4 h-4" /></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
}