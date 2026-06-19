"use client";

import { Lightbulb, BookOpen, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const FEATURES_DATA = [
  {
    id: 1,
    icon: Lightbulb,
    title: "Active Reflection",
    description:
      "Transform passing thoughts into structured insights through guided editorial prompts.",
  },
  {
    id: 2,
    icon: BookOpen,
    title: "Legacy Preservation",
    description:
      "Securely store your life's most valuable lessons in a digital vault designed for longevity.",
  },
  {
    id: 3,
    icon: TrendingUp,
    title: "Exponential Growth",
    description:
      "Identify patterns in your decision-making and accelerate your personal evolution.",
  },
  {
    id: 4,
    icon: Users,
    title: "Curation Community",
    description:
      "Connect with a thoughtful, ambitious audience that values intellectual substance.",
  },
];

export default function ReflectionFeatures() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <section className="py-24 relative overflow-hidden w-full">
      {/* Skewed Background Accent */}
      <div className="absolute inset-0 bg-primary/5 -skew-y-3 origin-right pointer-events-none" />

      {/* Layered radial gradient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 20% 50%, rgba(195, 192, 255, 0.04) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(147, 51, 234, 0.03) 0%, transparent 50%)",
        }}
        aria-hidden="true"
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div ref={ref} className="px-gutter max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16"
        >
          <h2 className="font-headline-lg text-4xl text-white mb-6">
            Why Reflection Matters
          </h2>
          <p className="text-on-surface-variant max-w-xl mx-auto">
            Bridging deep editorial insight with modern productivity tools to
            help you grow faster and deeper.
          </p>
        </motion.div>

        {/* 4-Column Grid with stagger */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
        >
          {FEATURES_DATA.map((item) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeInUp}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 group flex flex-col items-start text-left relative overflow-hidden border border-white/8"
                style={{ background: "rgba(255, 255, 255, 0.04)" }}
              >
                {/* Radial glow background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background:
                      "radial-gradient(circle at 30% 30%, rgba(195, 192, 255, 0.06), transparent 60%)",
                  }}
                  aria-hidden="true"
                />

                {/* Icon Wrapper with animation */}
                <motion.div
                  className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-6 relative z-10"
                  whileHover={{
                    scale: 1.15,
                    rotate: [0, -5, 5, 0],
                    transition: { duration: 0.5 },
                  }}
                >
                  <IconComponent className="w-7 h-7 text-primary stroke-[1.75]" />
                </motion.div>

                {/* Feature Title */}
                <h4 className="font-bold text-white text-lg mb-3 relative z-10">
                  {item.title}
                </h4>

                {/* Feature Description */}
                <p className="text-on-surface-variant text-sm leading-relaxed relative z-10">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
