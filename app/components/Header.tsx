"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useRef, useState } from "react";

type SectionId = "who-are-we";

const HEADER_OFFSET = 80;
const SECTION_IDS: SectionId[] = ["who-are-we"];

const serviceLinks = [
  { title: "Επιχειρηματικά Σχέδια", href: "/ypiresies/epixeirematika-sxedia" },
  { title: "Αποτίμηση Επιχειρήσεων", href: "/ypiresies/apotimisi-epixeiriseon" },
  { title: "Διαμεσολάβηση", href: "/ypiresies/diamesolavisi" },
  { title: "ΕΣΠΑ", href: "/ypiresies/espa" },
  { title: "Εξωδικαστικός Συμβιβασμός", href: "/ypiresies/exodikastikos-symvivasmos" },
  { title: "Φοροτεχνικά", href: "/ypiresies/forotexnika" },
];

export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
    setIsMobileServicesOpen(false);
    setIsDropdownOpen(false);
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

  const isServicesActive = pathname.startsWith("/ypiresies");
  const isContactActive = pathname === "/contact";

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

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
            src="/logo.png"
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

          {/* Υπηρεσίες dropdown */}
          <div
            className="relative"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <Link
              href="/ypiresies"
              className={`group relative inline-flex items-center gap-1 text-sm font-medium tracking-wide transition-colors duration-300 ${
                isServicesActive
                  ? "text-[#0A1628]"
                  : "text-[#0A1628]/75 hover:text-[#0A1628]"
              }`}
            >
              Υπηρεσίες
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
              />
              <span
                className={`absolute -bottom-2 left-0 h-0.5 bg-[#C8A951] transition-all duration-300 ${
                  isServicesActive ? "w-full" : "w-0 group-hover:w-full"
                }`}
              />
            </Link>

            <AnimatePresence>
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 rounded-xl border border-[#DDD8CC] bg-[#F8F6F0] py-2 shadow-xl"
                >
                  {serviceLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsDropdownOpen(false)}
                      className={`block px-5 py-2.5 text-sm transition-colors duration-200 ${
                        pathname === link.href
                          ? "bg-[#EDE9DF] font-medium text-[#C8A951]"
                          : "text-[#0A1628]/75 hover:bg-[#EDE9DF] hover:text-[#0A1628]"
                      }`}
                    >
                      {link.title}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

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

              {/* Mobile services accordion */}
              <div>
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  className="group inline-flex items-center text-2xl font-semibold text-white transition-colors duration-300 hover:text-[#C8A951] sm:text-3xl"
                >
                  Υπηρεσίες
                  <ChevronDown
                    size={20}
                    className={`ml-2 transition-transform duration-200 ${
                      isMobileServicesOpen ? "rotate-180" : ""
                    }`}
                  />
                  <span
                    className={`ml-3 h-2 w-2 rounded-full bg-[#C8A951] transition-opacity duration-300 ${
                      isServicesActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isMobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div className="ml-4 mt-4 flex flex-col gap-4 border-l-2 border-[#C8A951]/30 pl-4">
                        <Link
                          href="/ypiresies"
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`text-lg transition-colors duration-200 ${
                            pathname === "/ypiresies"
                              ? "font-medium text-[#C8A951]"
                              : "text-white/70 hover:text-[#C8A951]"
                          }`}
                        >
                          Όλες οι υπηρεσίες
                        </Link>
                        {serviceLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={`text-lg transition-colors duration-200 ${
                              pathname === link.href
                                ? "font-medium text-[#C8A951]"
                                : "text-white/70 hover:text-[#C8A951]"
                            }`}
                          >
                            {link.title}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

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
