"use client";

import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  Banknote,
  Building2,
  Calendar,
  Factory,
  Fish,
  GraduationCap,
  HandCoins,
  Landmark,
  Leaf,
  MapPin,
  Monitor,
  Cpu,
  Home,
  Briefcase,
  ShieldCheck,
  Tractor,
  Lightbulb,
} from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

type Program = {
  title: string;
  description: string;
  subsidy: string;
  maxFunding: string;
  deadline: string;
  region: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
};

const activePrograms: Program[] = [
  {
    title: "Εκσυγχρονισμός Μικρής Επιχειρηματικότητας",
    description:
      "Αναβάθμιση εξοπλισμού, ψηφιακός μετασχηματισμός, λογισμικό και πιστοποιήσεις για πολύ μικρές και μικρές επιχειρήσεις.",
    subsidy: "50%",
    maxFunding: "Έως €120.000",
    deadline: "20/03/2026",
    region: "Δυτική Ελλάδα",
    icon: Building2,
  },
  {
    title: "Επιχειρώ Καινοτόμα - Υφιστάμενες Επιχειρήσεις",
    description:
      "Ενίσχυση υφιστάμενων ΜΜΕ για καινοτόμες επενδύσεις και αναβάθμιση παραγωγικής δυναμικότητας.",
    subsidy: "40–60%",
    maxFunding: "Έως €800.000",
    deadline: "17/03/2026",
    region: "Ήπειρος",
    icon: Lightbulb,
  },
  {
    title: "Επιχειρώ Καινοτόμα - Νέες Επιχειρήσεις",
    description:
      "Στήριξη νέων και startup επιχειρήσεων με υψηλό ποσοστό επιδότησης για καινοτόμα επιχειρηματικά σχέδια.",
    subsidy: "75%",
    maxFunding: "Έως €150.000",
    deadline: "18/03/2026",
    region: "Ήπειρος",
    icon: Briefcase,
  },
  {
    title: "Πράσινη Επιχειρηματικότητα",
    description:
      "Ενσωμάτωση φιλοπεριβαλλοντικών διαδικασιών παραγωγής και ανανεώσιμων πηγών ενέργειας (Net Billing) σε ΜΜΕ.",
    subsidy: "60%",
    maxFunding: "Έως €300.000",
    deadline: "02/04/2026",
    region: "Κρήτη",
    icon: Leaf,
  },
  {
    title: "Παραγωγικές Επενδύσεις",
    description:
      "Τεχνολογικός μετασχηματισμός και εκσυγχρονισμός υφιστάμενων πολύ μικρών και μικρών επιχειρήσεων.",
    subsidy: "50–65%",
    maxFunding: "Έως €200.000",
    deadline: "Ανοιχτό",
    region: "Αττική",
    icon: Factory,
  },
  {
    title: "Ψηφιοποίηση ΜΜΕ - Δάνεια Συγχρηματοδότησης",
    description:
      "Χρηματοδότηση ψηφιακού μετασχηματισμού και ψηφιακής υποδομής μέσω δανείων συγχρηματοδότησης για μικρές και μεσαίες επιχειρήσεις.",
    subsidy: "Grant/Loan",
    maxFunding: "Έως €1.000.000",
    deadline: "30/06/2026",
    region: "Πανελλαδικά",
    icon: Monitor,
  },
  {
    title: "Φορείς Κ.ΑΛ.Ο.",
    description:
      "Επιδότηση 100% για νέες, υφιστάμενες και συνεταιριστικές κοινωνικές επιχειρήσεις.",
    subsidy: "100%",
    maxFunding: "—",
    deadline: "30/04/2026",
    region: "Αττική, Δυτ. Μακεδονία, Ήπειρος, Ιόνια, Πελοπόννησος",
    icon: HandCoins,
  },
  {
    title: "Μεταποίηση Αλιευτικών Προϊόντων",
    description:
      "Ενίσχυση επιχειρήσεων στη μεταποίηση αλιευτικών προϊόντων και προϊόντων υδατοκαλλιέργειας.",
    subsidy: "—",
    maxFunding: "—",
    deadline: "20/03 – 01/06/2026",
    region: "Πανελλαδικά",
    icon: Fish,
  },
  {
    title: "Δίκαιη Αναπτυξιακή Μετάβαση",
    description:
      "Στήριξη νέων επενδυτικών σχεδίων σε ζώνες μετα-λιγνιτικής μετάβασης.",
    subsidy: "—",
    maxFunding: "—",
    deadline: "19/03 – 30/06/2026",
    region: "Δυτ. Μακεδονία, Πελοπόννησος",
    icon: ShieldCheck,
  },
];

const upcomingPrograms: Program[] = [
  {
    title: "«Παράγουμε Εδώ»",
    description:
      "Flagship πρόγραμμα για υφιστάμενες μικρές και μεσαίες μεταποιητικές επιχειρήσεις. Φαρμακευτικά, ιατρικά, χημικά, πλαστικά, μέταλλα, ηλεκτρονικά.",
    subsidy: "50%",
    maxFunding: "€100.000 – €600.000",
    deadline: "Αναμένεται Q2 2026",
    region: "Πανελλαδικά",
    icon: Factory,
  },
  {
    title: "Αυτοαπασχόληση Πτυχιούχων",
    description:
      "100% επιδότηση για πτυχιούχους (πτυχίο μετά το 2016) που ιδρύουν νέα επιχείρηση ή ξεκίνησαν από το 2025.",
    subsidy: "100%",
    maxFunding: "€13.000 – €36.000",
    deadline: "Αναμένεται 2026",
    region: "Πανελλαδικά",
    icon: GraduationCap,
  },
  {
    title: "STEP - Ψηφιακές & Καθαρές Τεχνολογίες",
    description:
      "Ψηφιακές τεχνολογίες, βιοτεχνολογία, καθαρές τεχνολογίες και αποδοτική χρήση πόρων. Συνολικός προϋπολογισμός €50 εκ.",
    subsidy: "—",
    maxFunding: "€50 εκ. (σύνολο)",
    deadline: "Αναμένεται 2026",
    region: "Πανελλαδικά",
    icon: Cpu,
  },
  {
    title: "«Ανακαινίζω»",
    description:
      "Πρόγραμμα στήριξης ανακαίνισης ακινήτων. Λεπτομέρειες αναμένονται.",
    subsidy: "—",
    maxFunding: "—",
    deadline: "Ανακοίνωση αναμένεται",
    region: "Πανελλαδικά",
    icon: Home,
  },
  {
    title: "Επιχειρηματικά Πάρκα σε Ζώνες Μετάβασης",
    description:
      "Υποδομές κλιματικά ουδέτερης οικονομικής μετάβασης σε πρώην λιγνιτικές περιοχές.",
    subsidy: "—",
    maxFunding: "—",
    deadline: "26/02 – 05/06/2026",
    region: "Δυτ. Μακεδονία, Αρκαδία",
    icon: Building2,
  },
];

const financialTools: Program[] = [
  {
    title: "Ταμείο Αγροτικής Επιχειρηματικότητας",
    description:
      "Ευνοϊκοί όροι δανεισμού για νέες και υφιστάμενες εξαγωγικές επιχειρήσεις στην πρωτογενή αγροτική παραγωγή. Προϋπολογισμός €170 εκ.",
    subsidy: "Δάνειο",
    maxFunding: "€170 εκ. (σύνολο)",
    deadline: "2026",
    region: "Πανελλαδικά",
    icon: Tractor,
  },
  {
    title: "Ταμείο Εγγυοδοσίας DeLFI",
    description:
      "Διευκόλυνση πρόσβασης ΜΜΕ σε τραπεζικά δάνεια με μειωμένες εγγυήσεις. Αναμενόμενη κινητοποίηση €3,6 δισ. σε δάνεια για 25.000+ ΜΜΕ.",
    subsidy: "Εγγυοδοσία",
    maxFunding: "€500 εκ. (σύνολο)",
    deadline: "2026",
    region: "Πανελλαδικά",
    icon: Landmark,
  },
  {
    title: "Ταμείο Διπλωμάτων Ευρεσιτεχνίας",
    description:
      "Επιδότηση έως 80% για καταχώρηση και διατήρηση διπλωμάτων ευρεσιτεχνίας, εθνικών και διεθνών. Προϋπολογισμός €41,4 εκ.",
    subsidy: "Έως 80%",
    maxFunding: "€41,4 εκ. (σύνολο)",
    deadline: "2026",
    region: "Πανελλαδικά",
    icon: Banknote,
  },
];

type CategorySection = {
  id: string;
  title: string;
  subtitle: string;
  programs: Program[];
  badgeLabel: string;
  badgeColor: string;
};

const categories: CategorySection[] = [
  {
    id: "active",
    title: "Ενεργά Προγράμματα",
    subtitle: "Προγράμματα που δέχονται αιτήσεις τώρα",
    programs: activePrograms,
    badgeLabel: "Ενεργό",
    badgeColor: "bg-emerald-100 text-emerald-700",
  },
  {
    id: "upcoming",
    title: "Αναμενόμενα Προγράμματα",
    subtitle: "Προγράμματα σε φάση προδημοσίευσης ή τελικής προετοιμασίας",
    programs: upcomingPrograms,
    badgeLabel: "Αναμενόμενο",
    badgeColor: "bg-blue-100 text-blue-700",
  },
  {
    id: "financial",
    title: "Χρηματοδοτικά Εργαλεία",
    subtitle: "Ταμεία εγγυοδοσίας, δάνεια και χρηματοδοτικά μέσα",
    programs: financialTools,
    badgeLabel: "Χρηματοδοτικό",
    badgeColor: "bg-amber-100 text-amber-700",
  },
];

function ProgramSection({ category }: { category: CategorySection }) {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <div ref={sectionRef} className="mb-20 last:mb-0">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <h2 className="text-2xl font-bold text-[#0A1628] md:text-3xl">
          {category.title}
        </h2>
        <div className="mt-3 h-1 w-16 rounded-full bg-[#C8A951]" />
        <p className="mt-3 text-sm text-[#6A6A7A] md:text-base">
          {category.subtitle}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {category.programs.map((program, index) => {
          const Icon = program.icon;

          return (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 32 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative rounded-xl border border-[#E8E4DA] border-l-4 border-l-[#C8A951] bg-[#F8F6F0] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-4 flex items-start justify-between gap-3">
                <Icon size={36} className="shrink-0 text-[#C8A951]" />
                <span
                  className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${category.badgeColor}`}
                >
                  {category.badgeLabel}
                </span>
              </div>

              <h3 className="text-lg font-semibold leading-snug text-[#0A1628]">
                {program.title}
              </h3>

              <p className="mt-2 text-sm leading-relaxed text-[#5A5A6A]">
                {program.description}
              </p>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/70 px-3 py-2">
                  <p className="text-xs font-medium text-[#8A8A9A]">Επιδότηση</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#0A1628]">
                    {program.subsidy}
                  </p>
                </div>
                <div className="rounded-lg bg-white/70 px-3 py-2">
                  <p className="text-xs font-medium text-[#8A8A9A]">Ποσό</p>
                  <p className="mt-0.5 text-sm font-semibold text-[#0A1628]">
                    {program.maxFunding}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-white/70 px-3 py-2">
                  <Calendar size={14} className="shrink-0 text-[#C8A951]" />
                  <div>
                    <p className="text-xs font-medium text-[#8A8A9A]">Προθεσμία</p>
                    <p className="mt-0.5 text-sm font-semibold text-[#0A1628]">
                      {program.deadline}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg bg-white/70 px-3 py-2">
                  <MapPin size={14} className="shrink-0 text-[#C8A951]" />
                  <div>
                    <p className="text-xs font-medium text-[#8A8A9A]">Περιοχή</p>
                    <p className="mt-0.5 text-sm font-semibold text-[#0A1628]">
                      {program.region}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function EspaPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#F8F6F0] to-[#EDE9DF] px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#0A1628] sm:text-5xl">
          Προγράμματα ΕΣΠΑ
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C8A951]" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#5A5A6A] md:text-lg">
          Ενημερωθείτε για τα τρέχοντα και αναμενόμενα προγράμματα ΕΣΠΑ
          2021–2027 για επιχειρήσεις.
        </p>
        <p className="mt-4 text-sm text-[#6A6A7A]">
          <Link href="/" className="transition-colors hover:text-[#C8A951]">
            Αρχική
          </Link>{" "}
          &gt; Προγράμματα ΕΣΠΑ
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        {categories.map((category) => (
          <ProgramSection key={category.id} category={category} />
        ))}
      </section>

      <section className="bg-[#0A1628] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Χρειάζεστε Επιχειρηματικό Σχέδιο;
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C8A951]" />
            <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
              Η Synesis Strategic Advisors αναλαμβάνει την εκπόνηση
              επιχειρηματικών σχεδίων και μελετών βιωσιμότητας για ένταξη στα
              προγράμματα ΕΣΠΑ. Επικοινωνήστε μαζί μας για εξατομικευμένη
              καθοδήγηση.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#C8A951] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#C8A951]/90"
            >
              Επικοινωνήστε μαζί μας
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
