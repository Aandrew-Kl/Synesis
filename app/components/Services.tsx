"use client";

import { motion, useInView } from "framer-motion";
import {
  BarChart3,
  Building2,
  Calculator,
  FileText,
  Receipt,
  Scale,
} from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Επιχειρηματικά Σχέδια - Μελέτες Βιωσιμότητας",
    icon: FileText,
  },
  {
    title: "Αποτίμηση Επιχειρήσεων - Συγχωνεύσεις - Εξαγορές",
    icon: BarChart3,
  },
  {
    title: "Διαμεσολάβηση",
    icon: Scale,
  },
  {
    title: "ΕΣΠΑ - Αναπτυξιακά Προγράμματα",
    icon: Building2,
  },
  {
    title: "Εξωδικαστικός Συμβιβασμός - Ρύθμιση Οφειλών",
    icon: Calculator,
  },
  {
    title: "Φοροτεχνικά",
    icon: Receipt,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="services" ref={sectionRef} className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-[#0A1628] md:text-4xl">Υπηρεσίες</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#C8A951]" />
          <p className="mt-8 text-base leading-relaxed text-[#5A5A6A] md:text-lg">
            Τι προσφέρουμε — Διαθέτουμε τεχνογνωσία που πηγάζει από πολυετή εμπειρία σε ποικίλους
            τομείς, καλύπτοντας ένα ευρύ φάσμα υπηρεσιών και έργων.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const indicator = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative rounded-xl border border-[#E8E4DA] border-l-4 border-l-[#C8A951] bg-[#F8F6F0] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="absolute right-4 top-4 text-4xl font-bold text-[#C8A951]/15">
                  {indicator}
                </span>
                <div className="relative z-10">
                  <Icon size={40} className="text-[#C8A951]" />
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-[#0A1628]">
                    {service.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
