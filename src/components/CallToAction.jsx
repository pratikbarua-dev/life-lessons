"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function CallToAction() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section className="py-24 w-full" ref={ref}>
      <div className="px-gutter max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[40px] p-12 md:p-20 overflow-hidden border border-white/10 shadow-2xl w-full"
          style={{
            background: "linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
          }}
        >
          {/* Static decorative blobs — CSS only, no infinite JS animations */}
          <div
            className="absolute -right-20 -top-20 w-96 h-96 bg-primary/15 rounded-full pointer-events-none"
            style={{ filter: "blur(80px)" }}
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 -bottom-20 w-80 h-80 bg-secondary/8 rounded-full pointer-events-none"
            style={{ filter: "blur(60px)" }}
            aria-hidden="true"
          />

          {/* Noise texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.02] rounded-[40px]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-2xl text-center lg:text-left"
            >
              <h2 className="font-headline-lg text-4xl md:text-5xl text-white mb-6">
                Ready to document your journey?
              </h2>
              <p className="text-on-surface-variant text-lg">
                Join thousands of thinkers, leaders, and creators who are building
                a collective repository of human wisdom.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 flex flex-col sm:flex-row gap-5 w-full lg:w-auto"
            >
              <Link
                href="/signup"
                className="relative overflow-hidden bg-primary text-on-primary px-10 py-5 rounded-2xl font-label-md hover:shadow-2xl hover:shadow-primary/30 hover:scale-105 hover:-translate-y-1 transition-all duration-300 text-center group"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Get Started Free
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                {/* Gradient sheen */}
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </Link>
              <Link
                href="/demo"
                className="text-white px-10 py-5 rounded-2xl font-label-md hover:bg-white/10 transition-all duration-300 border border-white/20 text-center hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                }}
              >
                Request Demo
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
