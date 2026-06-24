import { Plus } from "lucide-react";
import Link from "next/link";
import { LessonsTable, PerformanceCards, LessonsSearchFilters } from "@/components/lessons";
import { auth } from "@/lib/auth"
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const metadata = {
  title: "My Lessons Notebook",
  description: "A curated collection of your intellectual contributions and life-learned insights.",
};

async function getMyLessons(userId, headersList) {
  try {
    // Get the JWT token server-side
    const tokenRes = await fetch('http://localhost:3000/api/auth/token', {
      headers: headersList,
      cache: 'no-store'
    });
    let token = "";
    if (tokenRes.ok) {
      const tokenData = await tokenRes.json();
      token = tokenData?.token || "";
    }
    if (!token) return [];

    const serverUrl = process.env.SERVER_URL || 'http://localhost:3100';
    const res = await fetch(`${serverUrl}/api/users/${userId}/lessons`, {
      headers: { "Authorization": `Bearer ${token}` },
      cache: 'no-store'
    });
    if (!res.ok) return [];
    const data = await res.json();
    return data.success ? data.data : [];
  } catch (err) {
    console.error("Error fetching user lessons:", err);
    return [];
  }
}

async function getMyStats(userId, headersList) {
  try {
    const tokenRes = await fetch('http://localhost:3000/api/auth/token', {
      headers: headersList,
      cache: 'no-store'
    });
    let token = "";
    if (tokenRes.ok) {
      const tokenData = await tokenRes.json();
      token = tokenData?.token || "";
    }
    if (!token) return null;

    const serverUrl = process.env.SERVER_URL || 'http://localhost:3100';
    const res = await fetch(`${serverUrl}/api/users/${userId}/stats`, {
      headers: { "Authorization": `Bearer ${token}` },
      cache: 'no-store'
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.success ? data.data : null;
  } catch (err) {
    console.error("Error fetching user stats:", err);
    return null;
  }
}

export default async function MyLessonsDashboardPage() {
  const headersList = await headers();
  const session = await auth.api.getSession({
    headers: headersList,
  });

  if (!session) {
    redirect("/login");
  }

  const [lessons, stats] = await Promise.all([
    getMyLessons(session.user.id, headersList),
    getMyStats(session.user.id, headersList),
  ]);

  return (
    <div className="w-full min-h-screen bg-[#F6F0DD] text-[#1C1611] p-4 sm:p-6 md:p-10 select-none">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-8">

        {/* Dynamic Page Header */}
        <header className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-[3.5px] border-[#1C1611] pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1C1611] mb-1.5">
              My Lessons Notebook
            </h1>
            <p className="text-xs sm:text-sm text-[#1C1611]/80 font-bold uppercase">
              A curated collection of your intellectual contributions and life-learned insights.
            </p>
          </div>

          <Link
            href="/add-lesson"
            className="inline-flex items-center justify-center gap-2 bg-[#FF4A3A] text-white font-black uppercase text-sm px-6 h-12 rounded-xl border-[3px] border-[#1C1611] shadow-[3px_3px_0px_0px_#1C1611] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0px_0px_#1C1611] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100 shrink-0 self-start sm:self-auto cursor-pointer"
          >
            <Plus className="w-4 h-4 stroke-[3px]" />
            <span>New Lesson</span>
          </Link>
        </header>

        {/* Shared search/filter component (dashboard variant) */}
        <LessonsSearchFilters variant="dashboard" />

        {/* Main Content */}
        <main className="w-full flex flex-col gap-6 min-w-0">
          <LessonsTable lessons={lessons} />
          <PerformanceCards stats={stats} />
        </main>

      </div>
    </div>
  );
}