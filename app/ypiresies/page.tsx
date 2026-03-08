"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Building2,
  Calculator,
  FileText,
  Receipt,
  Scale,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

const services = [
  {
    title: "Επιχειρηματικά Σχέδια - Μελέτες Βιωσιμότητας",
    description:
      "Εκπόνηση ολοκληρωμένων επιχειρηματικών σχεδίων και μελετών βιωσιμότητας για νέες και υφιστάμενες επιχειρήσεις.",
    slug: "epixeirematika-sxedia",
    icon: FileText,
  },
  {
    title: "Αποτίμηση Επιχειρήσεων - Συγχωνεύσεις - Εξαγορές",
    description:
      "Αποτίμηση αξίας επιχειρήσεων και συμβουλευτική υποστήριξη σε διαδικασίες συγχωνεύσεων και εξαγορών.",
    slug: "apotimisi-epixeiriseon",
    icon: BarChart3,
  },
  {
    title: "Διαμεσολάβηση",
    description:
      "Επίλυση διαφορών μέσω διαμεσολάβησης με βιώσιμες και αμοιβαία αποδεκτές λύσεις.",
    slug: "diamesolavisi",
    icon: Scale,
  },
  {
    title: "ΕΣΠΑ - Αναπτυξιακά Προγράμματα",
    description:
      "Ενημέρωση για τρέχοντα προγράμματα ΕΣΠΑ, εκπόνηση επιχειρηματικών σχεδίων και υποστήριξη αιτήσεων ένταξης.",
    slug: "espa",
    icon: Building2,
  },
  {
    title: "Εξωδικαστικός Συμβιβασμός - Ρύθμιση Οφειλών",
    description:
      "Διαπραγμάτευση και ρύθμιση οφειλών μέσω εξωδικαστικού μηχανισμού για επιχειρήσεις και φυσικά πρόσωπα.",
    slug: "exodikastikos-symvivasmos",
    icon: Calculator,
  },
  {
    title: "Φοροτεχνικά",
    description:
      "Φοροτεχνική υποστήριξη, φορολογικός σχεδιασμός και συμμόρφωση για επιχειρήσεις και ελεύθερους επαγγελματίες.",
    slug: "forotexnika",
    icon: Receipt,
  },
];

export default function YpiresiesPage() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });

  return (
    <main>
      <section className="bg-gradient-to-br from-[#F8F6F0] to-[#EDE9DF] px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#0A1628] sm:text-5xl">
          Υπηρεσίες
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C8A951]" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#5A5A6A] md:text-lg">
          Διαθέτουμε τεχνογνωσία που πηγάζει από πολυετή εμπειρία σε ποικίλους
          τομείς, καλύπτοντας ένα ευρύ φάσμα υπηρεσιών και έργων.
        </p>
        <p className="mt-4 text-sm text-[#6A6A7A]">
          <Link href="/" className="transition-colors hover:text-[#C8A951]">
            Αρχική
          </Link>{" "}
          &gt; Υπηρεσίες
        </p>
      </section>

      <section ref={sectionRef} className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const indicator = String(index + 1).padStart(2, "0");

            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={`/ypiresies/${service.slug}`}
                  className="group relative block rounded-xl border border-[#E8E4DA] border-l-4 border-l-[#C8A951] bg-[#F8F6F0] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="absolute right-4 top-4 text-4xl font-bold text-[#C8A951]/15">
                    {indicator}
                  </span>
                  <div className="relative z-10">
                    <Icon size={40} className="text-[#C8A951]" />
                    <h3 className="mt-5 text-lg font-semibold leading-snug text-[#0A1628]">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5A5A6A]">
                      {service.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#C8A951] transition-all duration-300 group-hover:gap-2">
                      Περισσότερα
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
