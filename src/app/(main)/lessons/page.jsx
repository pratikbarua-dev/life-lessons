import { LessonsPageHeader, LessonsSearchFilters, LessonsGrid } from "@/components/lessons";

export default function LessonsPage() {
  return (
    <main className="bg-[#F6F0DD] min-h-screen">
      <LessonsPageHeader />
      <div className="bg-[#F6F0DD] px-gutter py-8">
        <LessonsSearchFilters variant="public" placeholder="Search lessons..." />
      </div>
      <LessonsGrid />
    </main>
  );
}
