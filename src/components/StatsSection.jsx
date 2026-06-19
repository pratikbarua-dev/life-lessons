"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const STATS = [
  { value: 50, suffix: "K+", label: "Lessons Shared" },
  { value: 120, suffix: "+", label: "Contributors" },
  { value: 1, suffix: "M+", label: "Readers" },
  { value: 85, suffix: "+", label: "Countries" },
];

export default function StatsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <section className="relative py-16 w-full overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(ellipse, rgba(195, 192, 255, 0.3), transparent 70%)",
          }}
        />
      </div>

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="relative z-10 px-gutter max-w-7xl mx-auto w-full"
      >
        <div className="rounded-3xl p-8 md:p-12 border border-white/10" style={{ background: "rgba(255, 255, 255, 0.04)" }}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center group"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 font-headline-lg">
                  {inView ? (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      separator=","
                      suffix={stat.suffix}
                      easingFn={(t, b, c, d) => {
                        // Custom easing - ease out expo
                        return t === d
                          ? b + c
                          : c * (-Math.pow(2, (-10 * t) / d) + 1) + b;
                      }}
                    />
                  ) : (
                    <span>0{stat.suffix}</span>
                  )}
                </div>
                <p className="text-on-surface-variant text-sm font-label-md tracking-wide uppercase">
                  {stat.label}
                </p>

                {/* Bottom accent line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{
                    duration: 0.8,
                    delay: 0.5 + index * 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="mt-4 h-px mx-auto w-12"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(195, 192, 255, 0.4), transparent)",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
