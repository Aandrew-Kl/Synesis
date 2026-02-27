"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useState } from "react";

type SectionId = "who-are-we" | "services";

const HEADER_OFFSET = 80;
const SECTION_IDS: SectionId[] = ["who-are-we", "services"];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 8);

      if (!isHomePage) {
        setActiveSection(null);
        return;
      }

      let currentSection: SectionId | null = null;

      for (const sectionId of SECTION_IDS) {
        const element = document.getElementById(sectionId);
        if (!element) {
          continue;
        }

        const sectionTop = element.offsetTop - HEADER_OFFSET - 12;
        if (scrollY >= sectionTop) {
          currentSection = sectionId;
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isHomePage]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const handleAnchorClick = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: SectionId,
  ) => {
    if (!isHomePage) {
      setIsMobileMenuOpen(false);
      return;
    }

    event.preventDefault();

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", `#${sectionId}`);
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const isContactActive = pathname === "/contact";

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/40 bg-white/80 backdrop-blur-lg transition-all duration-300 ${
        isScrolled ? "shadow-[0_14px_30px_-22px_rgba(10,22,40,0.7)]" : ""
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between px-6 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <Link
          href="/"
          className="group flex items-center gap-3"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Αρχική"
        >
          <Image
            src="/Synesis/logo.png"
            alt="Synesis Logo"
            width={48}
            height={48}
            className={`transition-all duration-300 ${isScrolled ? "h-9 w-9" : "h-12 w-12"}`}
          />
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-[0.28em] text-[#0A1628] sm:text-2xl">
              SYNESIS
            </span>
            <span className="mt-0.5 h-[2px] w-9 bg-[#C8A951] transition-all duration-300 group-hover:w-12" />
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href={isHomePage ? "#who-are-we" : "/#who-are-we"}
            onClick={(event) => handleAnchorClick(event, "who-are-we")}
            className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
              activeSection === "who-are-we" && isHomePage
                ? "text-[#0A1628]"
                : "text-[#0A1628]/75 hover:text-[#0A1628]"
            }`}
          >
            Ποιοι είμαστε
            <span
              className={`absolute -bottom-2 left-0 h-0.5 bg-[#C8A951] transition-all duration-300 ${
                activeSection === "who-are-we" && isHomePage
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          <Link
            href={isHomePage ? "#services" : "/#services"}
            onClick={(event) => handleAnchorClick(event, "services")}
            className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
              activeSection === "services" && isHomePage
                ? "text-[#0A1628]"
                : "text-[#0A1628]/75 hover:text-[#0A1628]"
            }`}
          >
            Υπηρεσίες
            <span
              className={`absolute -bottom-2 left-0 h-0.5 bg-[#C8A951] transition-all duration-300 ${
                activeSection === "services" && isHomePage
                  ? "w-full"
                  : "w-0 group-hover:w-full"
              }`}
            />
          </Link>

          <Link
            href="/contact"
            className={`group relative text-sm font-medium tracking-wide transition-colors duration-300 ${
              isContactActive ? "text-[#0A1628]" : "text-[#0A1628]/75 hover:text-[#0A1628]"
            }`}
          >
            Επικοινωνία
            <span
              className={`absolute -bottom-2 left-0 h-0.5 bg-[#C8A951] transition-all duration-300 ${
                isContactActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full p-2 text-[#0A1628] transition-colors duration-300 hover:bg-white/75 md:hidden"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? "Κλείσιμο μενού" : "Άνοιγμα μενού"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ x: "100%", opacity: 0.95 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0.95 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[60] flex min-h-screen flex-col bg-[#0A1628]/95 px-8 pb-12 pt-24 backdrop-blur-xl md:hidden"
          >
            <div className="flex justify-end">
              <button
                type="button"
                className="rounded-full border border-white/20 p-2 text-white transition-colors duration-300 hover:bg-white/10"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Κλείσιμο μενού"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="mt-12 flex flex-col gap-8">
              <Link
                href={isHomePage ? "#who-are-we" : "/#who-are-we"}
                onClick={(event) => handleAnchorClick(event, "who-are-we")}
                className="group inline-flex items-center text-2xl font-semibold text-white transition-colors duration-300 hover:text-[#C8A951] sm:text-3xl"
              >
                Ποιοι είμαστε
                <span
                  className={`ml-3 h-2 w-2 rounded-full bg-[#C8A951] transition-opacity duration-300 ${
                    activeSection === "who-are-we" && isHomePage
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>

              <Link
                href={isHomePage ? "#services" : "/#services"}
                onClick={(event) => handleAnchorClick(event, "services")}
                className="group inline-flex items-center text-2xl font-semibold text-white transition-colors duration-300 hover:text-[#C8A951] sm:text-3xl"
              >
                Υπηρεσίες
                <span
                  className={`ml-3 h-2 w-2 rounded-full bg-[#C8A951] transition-opacity duration-300 ${
                    activeSection === "services" && isHomePage
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>

              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="group inline-flex items-center text-2xl font-semibold text-white transition-colors duration-300 hover:text-[#C8A951] sm:text-3xl"
              >
                Επικοινωνία
                <span
                  className={`ml-3 h-2 w-2 rounded-full bg-[#C8A951] transition-opacity duration-300 ${
                    isContactActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
