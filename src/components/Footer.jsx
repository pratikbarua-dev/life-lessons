"use client";

import Link from "next/link";
import { Globe, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { staggerContainer, fadeInUp } from "@/lib/animations";

export default function Footer() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription action here
  };

  return (
    <footer className="relative bg-background border-t border-white/10 w-full py-20 text-slate-600 text-sm overflow-hidden">
      {/* Ambient top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[2px] pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(195, 192, 255, 0.2), transparent)",
        }}
        aria-hidden="true"
      />

      <motion.div
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto px-gutter w-full"
      >
        {/* Main Footer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16 w-full">
          {/* Column 1: Branding & Description */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <Link
              href="/"
              className="font-headline-md text-3xl text-primary mb-6 inline-block hover:opacity-90 transition-opacity"
            >
              Digital Life Lessons
            </Link>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-8">
              Bridging deep editorial insight with modern productivity tools. Your
              wisdom, preserved forever.
            </p>
            {/* Social Icons Row */}
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                aria-label="Website"
              >
                <Globe className="w-5 h-5 stroke-[1.75]" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300"
                aria-label="Contact Email"
              >
                <Mail className="w-5 h-5 stroke-[1.75]" />
              </a>
            </div>
          </motion.div>

          {/* Columns 2 & 3: Platform and Resources */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 gap-8 lg:col-span-1"
          >
            <div>
              <h5 className="font-bold text-white mb-6">Platform</h5>
              <ul className="space-y-4">
                {["Vision", "X", "LinkedIn"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 relative group inline-block"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/50 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="font-bold text-white mb-6">Resources</h5>
              <ul className="space-y-4">
                {["Support", "Terms", "Privacy"].map((item) => (
                  <li key={item}>
                    <Link
                      href={`/${item.toLowerCase()}`}
                      className="text-sm text-on-surface-variant hover:text-primary transition-colors duration-300 relative group inline-block"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/50 transition-all duration-300 group-hover:w-full" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Column 4: Newsletter Subscription Form */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {/* Subtle glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(195, 192, 255, 0.08), transparent 70%)",
                }}
                aria-hidden="true"
              />

              <h5 className="font-bold text-white mb-4 relative z-10">
                Subscribe to our Reader
              </h5>
              <p className="text-sm text-on-surface-variant mb-6 relative z-10">
                Weekly editorial highlights delivered to your inbox.
              </p>
              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 w-full relative z-10"
              >
                <input
                  type="email"
                  placeholder="Email address"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 flex-grow focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/30 text-white placeholder-white/30 transition-all text-sm"
                />
                <button
                  type="submit"
                  className="relative overflow-hidden bg-primary text-on-primary px-8 py-4 rounded-xl font-label-md hover:brightness-110 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-0.5 transition-all shrink-0 active:scale-98 group"
                >
                  <span className="relative z-10">Join</span>
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Sub-row Info */}
        <motion.div
          variants={fadeInUp}
          className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-on-surface-variant"
        >
          <p>© 2024 Digital Life Lessons. All rights reserved.</p>
          <div className="flex gap-8">
            {["Cookie Policy", "Accessibility", "Status"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="hover:text-primary transition-colors duration-300 relative group"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-primary/50 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </footer>
  );
}
