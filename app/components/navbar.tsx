"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTimes,
  FaBars,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills & Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "certificate", label: "Certificate" }
];

const mobileMenuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
  closed: {
    opacity: 0,
    y: -20,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 30,
    },
  },
} as const;

const navItemVariants = {
  open: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * i,
      type: "spring" as const,
      stiffness: 300,
      damping: 20,
    },
  }),
  closed: {
    opacity: 0,
    y: -10,
  },
};

export default function Navbar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [underlineStyle, setUnderlineStyle] = useState({});
  // Removed unused isMobile state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navbarRef = useRef<HTMLElement>(null);

  const scrollToSection = useCallback((sectionId: string, index: number) => {
    setActiveIndex(index);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  }, []);

  const updateUnderlinePosition = useCallback(() => {
    const currentRef = navRefs.current[activeIndex];
    if (currentRef) {
      requestAnimationFrame(() => {
        const rect = currentRef.getBoundingClientRect();
        const parentRect = currentRef.parentElement?.getBoundingClientRect();
        const offsetLeft = rect.left - (parentRect?.left ?? 0);

        setUnderlineStyle({
          width: `${rect.width}px`,
          transform: `translateX(${offsetLeft}px)`,
        });
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    updateUnderlinePosition();
  }, [activeIndex, updateUnderlinePosition]);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const handleScroll = () => {
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        const scrollPosition = window.scrollY + 100;

        let closestSection = null;
        let minDistance = Infinity;

        sections.forEach((section, index) => {
          if (!section) return;

          const sectionTop = section.offsetTop;
          const distance = Math.abs(scrollPosition - sectionTop);

          if (distance < minDistance) {
            minDistance = distance;
            closestSection = index;
          }
        });

        if (closestSection !== null && closestSection !== activeIndex) {
          setActiveIndex(closestSection);
        }
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [activeIndex]);

  return (
    <nav
      className="py-4 md:py-6 top-0 left-0 right-0 z-50 fixed bg-gray-200 bg-opacity-90 backdrop-blur-sm"
      ref={navbarRef}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href="#hero"
            aria-label="Home"
            onClick={() => scrollToSection("hero", 0)}
          >
            <Image
              src="/assets/images/main-logo.svg"
              alt="main-logo"
              width={35}
              height={32}
              priority
            />
          </a>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="relative">
          <div className="flex gap-6 text-md text-slate-700 font-medium relative">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                ref={(el) => {
                  navRefs.current[index] = el;
                }}
                onClick={() => scrollToSection(item.id, index)}
                className={`hover:text-blue-500 transition-colors duration-300 ${
                  activeIndex === index ? "text-blue-600" : ""
                }`}
                aria-current={activeIndex === index ? "page" : undefined}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </motion.button>
            ))}
          </div>

          <motion.span
            className="absolute bottom-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out"
            style={underlineStyle}
            aria-hidden="true"
            layoutId="underline"
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
          />
        </div>

        {/* Mobile Hamburger Button */}
        <motion.div
          className="flex xl:hidden items-center gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {mobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaTimes className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FaBars className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </motion.div>

        {/* Desktop Social Icons */}
        <motion.div
          className="hidden xl:flex gap-6"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.a
            href="https://github.com/Yuu214-gif"
            aria-label="GitHub"
            className="hover:opacity-80 transition-opacity"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="w-6 h-6 text-slate-700 hover:text-black transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/wahyu-eka-pratama-037871310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaiIaDVRzRU%2BVIISz%2F%2FsBeA%3D%3D"
            aria-label="LinkedIn"
            className="hover:opacity-80 transition-opacity"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="w-6 h-6 text-slate-700 hover:text-blue-700 transition-colors" />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/yuu.ta_21/"
            aria-label="Instagram"
            className="hover:opacity-80 transition-opacity"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.9 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 text-slate-700 hover:text-pink-500 transition-colors" />
          </motion.a>
        </motion.div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="xl:hidden absolute top-full left-0 right-0 bg-gray-200 shadow-lg py-4 px-6 overflow-hidden"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => scrollToSection(item.id, index)}
                    className={`text-left py-3 px-4 rounded-md transition-colors duration-300 ${
                      activeIndex === index
                        ? "bg-gray-300 text-white"
                        : "text-slate-700 hover:bg-gray-50"
                    }`}
                    aria-current={activeIndex === index ? "page" : undefined}
                    variants={navItemVariants}
                    custom={index}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.button>
                ))}

                <motion.div
                  className="flex gap-6 justify-center pt-4 border-t border-gray-100 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <motion.a
                    href="https://github.com/Yuu214-gif"
                    aria-label="GitHub"
                    className="hover:opacity-80 transition-opacity"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="w-6 h-6 text-slate-700 hover:text-black" />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/wahyu-eka-pratama-037871310?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BaiIaDVRzRU%2BVIISz%2F%2FsBeA%3D%3D"
                    aria-label="LinkedIn"
                    className="hover:opacity-80 transition-opacity"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <FaLinkedin className="w-6 h-6 text-slate-700 hover:text-blue-700" />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/yuu.ta_21/"
                    aria-label="Instagram"
                    className="hover:opacity-80 transition-opacity"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="w-6 h-6 text-slate-700 hover:text-pink-500" />
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
