"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { MouseEvent } from "react";

const SERVICES_SCROLL_OFFSET = 80;

export default function Hero() {
  const handleScrollToServices = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();

    const servicesSection = document.getElementById("services");
    if (!servicesSection) {
      window.location.hash = "services";
      return;
    }

    const top =
      servicesSection.getBoundingClientRect().top +
      window.scrollY -
      SERVICES_SCROLL_OFFSET;

    window.scrollTo({
      top: Math.max(top, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "#services");
  };

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-br from-[#F8F6F0] to-[#EDE9DF] px-6 py-20">
      {/* Subtle geometric grid pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, #0A1628 0px, #0A1628 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #0A1628 0px, #0A1628 1px, transparent 1px, transparent 80px)",
        }}
      />

      {/* Floating geometric shapes */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-16 h-56 w-56 rotate-12 border-2 border-[#C8A951]/30 [animation:spin_32s_linear_infinite]" />
        <div className="absolute right-16 top-1/4 h-36 w-36 rounded-full border-2 border-[#0A1628]/20 [animation:spin_26s_linear_infinite_reverse]" />
        <div className="absolute bottom-24 left-1/3 h-44 w-44 rotate-45 border-2 border-[#C8A951]/25 [animation:spin_42s_linear_infinite]" />
        <div className="absolute -right-8 bottom-1/3 h-24 w-24 rounded-lg border-2 border-[#0A1628]/15 [animation:spin_38s_linear_infinite]" />
        <div className="absolute left-2/3 top-12 h-20 w-20 rotate-[30deg] border border-[#C8A951]/20 [animation:spin_28s_linear_infinite_reverse]" />
      </div>

      {/* Gold decorative accent */}
      <div aria-hidden="true" className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-[#C8A951]/[0.04] to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Small label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#C8A951]"
        >
          Synesis Strategic Advisors
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-4xl font-bold leading-tight text-[#0A1628] sm:text-5xl md:text-6xl"
        >
          Υπηρεσίες Οικονομικού Συμβούλου και Στρατηγικού Σχεδιασμού
        </motion.h1>

        {/* Gold divider line */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 h-1 w-24 origin-left rounded-full bg-[#C8A951]"
        />

        <motion.p
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 max-w-3xl text-base font-normal leading-relaxed text-[#4A4A5A] sm:text-lg md:text-xl"
        >
          Η Synesis Strategic Advisors αποτελεί ταυτόσημο της αποδοτικότητας και της υψηλής
          ποιότητας. Λειτουργούμε με διορατικότητα, σχεδιάζοντας με συνέπεια το μέλλον.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="#services"
            onClick={handleScrollToServices}
            className="inline-flex items-center justify-center rounded-md bg-[#C8A951] px-7 py-3.5 text-sm font-semibold tracking-wide text-white shadow-lg shadow-[#C8A951]/25 transition-all duration-300 hover:bg-[#b89840] hover:shadow-xl hover:shadow-[#C8A951]/30"
          >
            Ανακαλύψτε τις Υπηρεσίες μας
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-md border-2 border-[#0A1628] px-7 py-3.5 text-sm font-semibold tracking-wide text-[#0A1628] transition-all duration-300 hover:bg-[#0A1628] hover:text-white"
          >
            Επικοινωνήστε μαζί μας
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.15 }}
        className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-[#0A1628]/50 sm:bottom-7"
        aria-label="Κύλιση προς τα κάτω"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={30} strokeWidth={1.8} />
        </motion.div>
      </motion.div>
    </section>
  );
}
