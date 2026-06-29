"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Logo from "./logo";
import AnimatedButton from "./AnimatedButton";

const navLinks = [
  { href: "#benefits", label: "Benefits" },
  { href: "#how-it-works", label: "How it works" },
  { href: "#services", label: "Services" },
  { href: "#faq", label: "FAQ" },
  { href: "/legal", label: "Legal" },
];

const SCROLL_UP_REVEAL_THRESHOLD = 8;
const SCROLL_DOWN_HIDE_THRESHOLD = 80;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const shouldReduceMotion = useReducedMotion();
  const headerRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const closeMenu = useCallback(() => setMobileOpen(false), []);
  const toggleMenu = useCallback(() => setMobileOpen((prev) => !prev), []);

  // Track scroll direction and swap header background / visibility
  useEffect(() => {
    const update = () => {
      const current = window.scrollY;
      const previous = lastScrollY.current;
      const delta = current - previous;

      if (mobileOpen || current < SCROLL_DOWN_HIDE_THRESHOLD) {
        setHidden(false);
      } else if (delta > SCROLL_UP_REVEAL_THRESHOLD) {
        setHidden(true);
      } else if (delta < -SCROLL_UP_REVEAL_THRESHOLD) {
        setHidden(false);
      }

      lastScrollY.current = current;
      ticking.current = false;
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close menu on Escape and trap focus inside the open panel
  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        closeMenu();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = [
        menuButtonRef.current,
        firstLinkRef.current,
        ...(headerRef.current?.querySelectorAll<HTMLElement>(
          '#mobile-menu a[href], #mobile-menu button'
        ) ?? []),
      ].filter(Boolean);

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    const raf = requestAnimationFrame(() => {
      firstLinkRef.current?.focus();
    });

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(raf);
    };
  }, [mobileOpen, closeMenu]);

  // Return focus to the menu button when the panel closes
  const wasOpenRef = useRef(false);
  useEffect(() => {
    if (!mobileOpen && wasOpenRef.current) {
      menuButtonRef.current?.focus();
    }
    wasOpenRef.current = mobileOpen;
  }, [mobileOpen]);

  // Close mobile menu when the viewport crosses into desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) closeMenu();
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [closeMenu]);

  return (
    <motion.header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 h-[var(--header-height)] bg-white border-b border-[var(--color-muted)]/10 shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
      initial={false}
      animate={{
        y: hidden ? "-100%" : "0%",
      }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.3,
        ease: [0.22, 1, 0.36, 1] as const,
      }}
      style={{
        transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
        zIndex: 99999,
        backgroundColor: "#ffffff",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <div className="container-wide h-full flex items-center justify-between">
        <motion.a
          href="#top"
          className="relative z-10 inline-flex items-center"
          whileHover={shouldReduceMotion ? undefined : { scale: 1.02 }}
          whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
          aria-label="phaneosAI - Back to top"
        >
          <Logo size={36} />
        </motion.a>

        {/* Desktop navigation */}
        <nav
          className="hidden md:flex items-center gap-6"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-ink)] transition-colors"
              whileHover={shouldReduceMotion ? undefined : { y: -1 }}
              transition={{ type: "spring", stiffness: 400, damping: 24 }}
            >
              {link.label}
            </motion.a>
          ))}
          <AnimatedButton
            href="#register"
            variant="primary"
            className="py-2.5 px-5 text-sm"
          >
            Become a Partner
          </AnimatedButton>
        </nav>

        {/* Mobile menu toggle */}
        <button
          ref={menuButtonRef}
          type="button"
          onClick={toggleMenu}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="md:hidden relative z-10 inline-flex items-center justify-center w-11 h-11 rounded-md text-[var(--color-ink)] hover:bg-[var(--color-surface)] transition-colors"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="md:hidden fixed inset-0 top-[var(--header-height)] bg-[var(--color-ink)]/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.2,
              }}
              aria-hidden="true"
              onClick={closeMenu}
            />
            <motion.div
              id="mobile-menu"
              initial={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -16 }
              }
              animate={{ opacity: 1, y: 0 }}
              exit={
                shouldReduceMotion
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: -16 }
              }
              transition={{
                duration: shouldReduceMotion ? 0.01 : 0.25,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="md:hidden fixed top-[var(--header-height)] left-0 right-0 bg-white border-b border-[var(--color-muted)]/10 shadow-[0_12px_24px_-8px_var(--color-shadow)]"
              style={{ zIndex: 99998, backgroundColor: "#ffffff" }}
            >
              <nav
                className="container-wide py-6 flex flex-col gap-2"
                aria-label="Mobile navigation"
              >
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    ref={index === 0 ? firstLinkRef : undefined}
                    onClick={closeMenu}
                    className="text-base font-medium text-[var(--color-ink)] py-3 px-4 rounded-md hover:bg-[var(--color-surface)] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)]"
                    initial={
                      shouldReduceMotion
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -12 }
                    }
                    animate={{ opacity: 1, x: 0 }}
                    exit={
                      shouldReduceMotion
                        ? { opacity: 1, x: 0 }
                        : { opacity: 0, x: -12 }
                    }
                    transition={{
                      duration: shouldReduceMotion ? 0.01 : 0.2,
                      delay: shouldReduceMotion ? 0 : index * 0.05,
                      ease: [0.25, 1, 0.5, 1],
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div onClick={closeMenu} className="mt-2">
                  <AnimatedButton
                    href="#register"
                    variant="primary"
                    className="w-full py-3.5 text-base"
                  >
                    Become a Partner
                  </AnimatedButton>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
