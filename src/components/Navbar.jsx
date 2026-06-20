"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import GooglyEyes from "./GooglyEyes";
import PenMascot from "./PenMascot";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "home", href: "/" },
    { name: "public lessons", href: "/lessons" },
    { name: "add lesson", href: "/add-lesson" },
    { name: "my lessons", href: "/my-lessons" },
    { name: "pricing", href: "/pricing" },
  ];

  // Variants for the mobile menu container overlay
  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.2, ease: "easeInOut" },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <div className="fixed top-0 w-full z-50 flex flex-col">
      {/* Top Navbar Header */}
      <nav className="w-full bg-[#F6F0DD] text-[#1C1611] border-b-[3.5px] border-[#1C1611] transition-all duration-200">
        <div className="flex justify-between items-center h-16 sm:h-20 px-4 sm:px-8 max-w-7xl mx-auto w-full">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="hover:opacity-95 transition-opacity flex items-center gap-3"
            >
              <PenMascot variant="logo" color="teal" className="scale-[0.8] sm:scale-100 origin-center -my-3" />
              <span className="font-extrabold text-xl sm:text-2xl tracking-tight text-[#1C1611] lowercase font-sans">
                digital life lessons
              </span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-6 items-center h-full">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="font-sans text-sm font-extrabold tracking-tight py-2 px-3 text-[#1C1611] hover:text-[#FF4A3A] hover:bg-[#1C1611]/5 rounded-md transition-all duration-100 uppercase"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Authentication Actions & Mobile Toggle */}
          <div className="flex gap-2 sm:gap-4 items-center">
            <div className="hidden md:flex gap-2 sm:gap-4 items-center">
              <Link
                href="/login"
                className="text-[#1C1611] font-extrabold text-sm uppercase px-4 py-2 hover:bg-[#FFB3A7] border-[2.5px] border-transparent hover:border-[#1C1611] rounded-xl transition-all duration-100"
              >
                login
              </Link>
              <Link
                href="/get-started"
                className="bg-[#FF4A3A] text-[#1C1611] font-black text-sm uppercase px-5 py-2.5 rounded-full border-[3px] border-[#1C1611] shadow-[3px_3px_0px_0px_#1C1611] hover:translate-x-[1.5px] hover:translate-y-[1.5px] hover:shadow-[1.5px_1.5px_0px_0px_#1C1611] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_0px_#1C1611] transition-all duration-100 whitespace-nowrap"
              >
                get started
              </Link>
            </div>

            {/* Mobile/Tablet Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#1C1611] focus:outline-none z-50 ml-2 border-[2.5px] border-[#1C1611] rounded-lg bg-white/20 active:translate-y-0.5"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              <svg className="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                <motion.path
                  strokeWidth="3"
                  strokeLinecap="round"
                  d="M 3.75 6.75 L 20.25 6.75"
                  animate={isOpen ? { d: "M 4.5 19.5 L 19.5 4.5" } : { d: "M 3.75 6.75 L 20.25 6.75" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  strokeWidth="3"
                  strokeLinecap="round"
                  d="M 3.75 12 L 20.25 12"
                  initial={{ opacity: 1 }}
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.15 }}
                />
                <motion.path
                  strokeWidth="3"
                  strokeLinecap="round"
                  d="M 3.75 17.25 L 20.25 17.25"
                  animate={isOpen ? { d: "M 4.5 4.5 L 19.5 19.5" } : { d: "M 3.75 17.25 L 20.25 17.25" }}
                  transition={{ duration: 0.2 }}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Infinite Marquee Ribbon */}
      <div className="w-full bg-[#1C1611] text-white py-2 border-b-[3px] border-[#1C1611] overflow-hidden whitespace-nowrap flex select-none relative z-30">
        <div className="animate-marquee flex items-center gap-12 text-xs font-black uppercase tracking-widest">
          {/* Set 1 */}
          <span>preserve your wisdom</span>
          <span className="text-[#FF4A3A]">●</span>
          <span>document your blueprint</span>
          <span className="text-[#FCD34D]">●</span>
          <span>retro-grade layouts</span>
          <span className="text-[#4DD0B1]">●</span>
          <span>honest onboarding</span>
          <span className="text-[#FFB3A7]">●</span>
          <span>share what matters</span>
          <span className="text-[#FF4A3A]">●</span>

          {/* Set 2 */}
          <span>preserve your wisdom</span>
          <span className="text-[#FF4A3A]">●</span>
          <span>document your blueprint</span>
          <span className="text-[#FCD34D]">●</span>
          <span>retro-grade layouts</span>
          <span className="text-[#4DD0B1]">●</span>
          <span>honest onboarding</span>
          <span className="text-[#FFB3A7]">●</span>
          <span>share what matters</span>
          <span className="text-[#FF4A3A]">●</span>
        </div>
      </div>

      {/* Mobile/Tablet Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 top-0 left-0 w-full h-screen bg-[#F6F0DD] z-40 lg:hidden flex flex-col justify-center px-6 sm:px-12 pt-24 border-b-[4px] border-[#1C1611]"
          >
            <div className="flex flex-col gap-5 my-auto max-w-md mx-auto w-full">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl font-black uppercase text-[#1C1611] hover:text-[#FF4A3A] transition-colors border-b-2 border-[#1C1611]/20 pb-2"
                >
                  {link.name}
                </Link>
              ))}

              <div className="flex flex-col gap-3 mt-6">
                <Link
                  href="/login"
                  onClick={() => setIsOpen(false)}
                  className="text-center text-[#1C1611] border-[3px] border-[#1C1611] bg-white py-3 rounded-xl font-bold uppercase shadow-[3px_3px_0px_0px_#1C1611]"
                >
                  login
                </Link>
                <Link
                  href="/get-started"
                  onClick={() => setIsOpen(false)}
                  className="text-center bg-[#FF4A3A] text-[#1C1611] border-[3px] border-[#1C1611] py-3 rounded-xl font-black uppercase shadow-[3px_3px_0px_0px_#1C1611]"
                >
                  get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}