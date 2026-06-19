import { LessonsPageHeader, LessonsSearchFilters, LessonsGrid } from "@/components/lessons";

export default function LessonsPage() {
  return (
    <>
      <LessonsPageHeader />
      <div className="px-gutter pb-8">
        <LessonsSearchFilters variant="public" placeholder="Search lessons..." />
      </div>
      <LessonsGrid />
    </>
  );
}
