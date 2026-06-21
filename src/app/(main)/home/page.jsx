import CallToAction from "@/components/CallToAction";
import FeaturedLessons from "@/components/FeaturedLessons";
import HeroSection from "@/components/HeroSection";
import MostSavedLessons from "@/components/MostSavedLessons";
import ReflectionFeatures from "@/components/ReflectionFeatures";
import TopContributors from "@/components/TopContributors";
import StatsSection from "@/components/StatsSection";
import SectionDivider from "@/components/SectionDivider";
import React from "react";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers()
  });
  console.log(session)
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
