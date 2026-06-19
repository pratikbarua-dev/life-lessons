"use client";

import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Home", href: "/", isActive: true },
    { name: "Public Lessons", href: "/public-lessons", isActive: false },
    { name: "Add Lesson", href: "/add-lesson", isActive: false },
    { name: "My Lessons", href: "/my-lessons", isActive: false },
    { name: "Pricing", href: "/pricing", isActive: false },
  ];

  return (
    <motion.nav
      initial={false}
      animate={scrolled ? "scrolled" : "transparent"}
      variants={{
        transparent: {
          backgroundColor: "rgba(16, 20, 21, 0)",
          backdropFilter: "blur(0px)",
          borderBottomColor: "rgba(255,255,255,0)",
        },
        scrolled: {
          backgroundColor: "rgba(16, 20, 21, 0.75)",
          backdropFilter: "blur(24px)",
          borderBottomColor: "rgba(255,255,255,0.06)",
        },
      }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 border-b"
      style={{ WebkitBackdropFilter: scrolled ? "blur(24px)" : "blur(0px)" }}
    >
      <motion.div
        animate={{ height: scrolled ? 60 : 72 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="flex justify-between items-center px-gutter max-w-7xl mx-auto w-full"
      >
        {/* Logo Section */}
        <div className="flex-shrink-0">
          <Link
            href="/"
            className="font-headline-md text-2xl text-primary hover:opacity-90 transition-opacity"
          >
            Digital Life Lessons
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-8 items-center h-full">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`font-body-md relative py-1 transition-all duration-300 group ${
                link.isActive
                  ? "text-white font-bold"
                  : "text-white/60 hover:text-white"
              }`}
            >
              {link.name}
              {/* Animated underline */}
              <span
                className={`absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-300 ease-out ${
                  link.isActive
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Authentication Actions */}
        <div className="flex gap-4 items-center">
          <Link
            href="/login"
            className="text-primary font-label-md px-4 py-1 hover:bg-white/5 rounded-lg transition-all relative group"
          >
            Login
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[1px] w-0 bg-primary/50 transition-all duration-300 group-hover:w-3/4" />
          </Link>
          <Link
            href="/get-started"
            className="relative bg-primary text-on-primary font-label-md px-6 py-2 rounded-lg shadow-lg shadow-primary/20 active:scale-95 duration-150 transition-all hover:brightness-110 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 overflow-hidden group"
          >
            <span className="relative z-10">Get Started</span>
            {/* Animated gradient sheen */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </Link>
        </div>
      </motion.div>

      {/* Bottom glow line when scrolled */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(195, 192, 255, 0.2), transparent)",
        }}
        aria-hidden="true"
      />
    </motion.nav>
  );
}