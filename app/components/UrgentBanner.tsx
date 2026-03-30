"use client";

import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Clock, Euro, Factory, Percent, Zap } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const highlights = [
  { icon: Percent, label: "Επιδότηση", value: "50–55%" },
  { icon: Euro, label: "Επένδυση", value: "100.000€ – 400.000€" },
  { icon: Factory, label: "Δικαιούχοι", value: "Μικρές & Μεσαίες Επιχειρήσεις" },
  { icon: Clock, label: "Υλοποίηση", value: "έως 15 μήνες" },
];

const eligible = [
  "Εκσυγχρονισμός παραγωγής (Εξοπλισμός, Μεταφορικά Μέσα & Όργανα)",
  "Τεχνολογική αναβάθμιση",
  "Πιστοποιήσεις και ποιότητα",
  "Σχεδιασμός και branding",
  "Ενίσχυση ανθρώπινου δυναμικού",
];

export default function UrgentBanner() {
  const ref = useRef<HTMLElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section ref={ref} className="relative overflow-hidden bg-gradient-to-br from-[#F8F6F0] to-[#EDE9DF] px-6 py-16 md:py-20">
      {/* Subtle gold gradient overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#C8A951]/[0.06] via-transparent to-[#C8A951]/[0.03]"
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Urgent badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-6 flex flex-wrap items-center gap-2"
        >
          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white">
            <Zap size={14} className="animate-pulse" />
            Νέο Πρόγραμμα
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C8A951]/50 bg-[#C8A951]/15 px-3 py-1.5 text-xs font-medium text-[#8A7030]">
            <Calendar size={12} />
            Αιτήσεις από 31 Μαρτίου 2026
          </span>
        </motion.div>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl font-bold leading-tight text-[#0A1628] md:text-4xl lg:text-5xl"
        >
          «ΠΑΡΑΓΟΥΜΕ ΣΤΗΝ ΕΛΛΑΔΑ»
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 max-w-3xl text-base leading-relaxed text-[#5A5A6A] md:text-lg"
        >
          Επιδότηση 50-55% σε παραγωγικές επιχειρήσεις. Ενισχύονται πολύ μικρές, μικρές και μεσαίες
          επιχειρήσεις που δραστηριοποιούνται στη μεταποίηση (ίδρυση πριν την 1/1/2025).
        </motion.p>

        {/* Highlight cards */}
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="rounded-xl border border-[#E8E4DA] bg-white/70 p-4 shadow-sm backdrop-blur-sm"
              >
                <Icon size={22} className="text-[#C8A951]" />
                <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#8A8A9A]">
                  {item.label}
                </p>
                <p className="mt-1 text-sm font-bold text-[#0A1628]">{item.value}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Details */}
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-[#0A1628]">Βασικές Πληροφορίες</h3>
            <ul className="space-y-3 text-sm text-[#5A5A6A]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A951]" />
                Ανώτατο όριο ενίσχυσης: <strong className="text-[#0A1628]">200.000€</strong>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A951]" />
                Ο προϋπολογισμός δεν υπερβαίνει το διπλάσιο του υψηλότερου κύκλου εργασιών (2023, 2024 ή 2025)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A951]" />
                Επιδότηση <strong className="text-[#0A1628]">55%</strong> εφόσον το 80% υλοποιηθεί εντός 9 μηνών
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A951]" />
                Προθεσμία ολοκλήρωσης: 15 μήνες από την έγκριση
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h3 className="mb-4 text-lg font-semibold text-[#0A1628]">Επιλέξιμες Δαπάνες</h3>
            <ul className="space-y-3 text-sm text-[#5A5A6A]">
              {eligible.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C8A951]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#C8A951] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#C8A951]/25 transition-all duration-300 hover:bg-[#b89840] hover:shadow-xl"
          >
            Ενημερωθείτε τώρα
            <ArrowRight size={16} />
          </Link>
          <Link
            href="/ypiresies/espa"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#0A1628]/20 px-7 py-3.5 text-sm font-medium text-[#0A1628]/70 transition-all duration-300 hover:border-[#0A1628]/40 hover:text-[#0A1628]"
          >
            Δείτε όλα τα προγράμματα ΕΣΠΑ
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
