import CallToAction from "@/components/CallToAction";
import FeaturedLessons from "@/components/FeaturedLessons";
import HeroSection from "@/components/HeroSection";
import MostSavedLessons from "@/components/MostSavedLessons";
import ReflectionFeatures from "@/components/ReflectionFeatures";
import TopContributors from "@/components/TopContributors";
import StatsSection from "@/components/StatsSection";
import SectionDivider from "@/components/SectionDivider";
import React from "react";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <SectionDivider />
      <FeaturedLessons />
      <SectionDivider />
      <ReflectionFeatures />
      <SectionDivider />
      <TopContributors />
      <SectionDivider />
      <MostSavedLessons />
      <SectionDivider />
      <CallToAction />
    </>
  );
}
