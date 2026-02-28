"use client";

import { motion } from "framer-motion";
import Image from "next/image";
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

      {/* Butterfly decorative image — right side, cropped to show only butterfly */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 0.08, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute -right-10 top-[55%] hidden w-[500px] -translate-y-1/2 overflow-hidden mix-blend-multiply md:block lg:right-4 lg:w-[580px]"
        style={{ clipPath: "inset(30% 0 0 0)" }}
      >
        <Image
          src="/Synesis/butterfly.jpg"
          alt=""
          width={960}
          height={920}
          className="h-auto w-full"
          priority
        />
      </motion.div>

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
