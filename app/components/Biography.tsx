"use client";

import { motion, useInView } from "framer-motion";
import {
  BriefcaseBusiness,
  GraduationCap,
  Languages,
  Microscope,
  ShieldCheck,
  University,
} from "lucide-react";
import { useRef } from "react";

const highlights = [
  {
    title: "Διδάκτωρ Ιονίου Πανεπιστημίου",
    description:
      "Διατριβή με αντικείμενο τη συμμόρφωση κατά της νομιμοποίησης εσόδων από παράνομες δραστηριότητες και της χρηματοδότησης της τρομοκρατίας.",
    icon: GraduationCap,
  },
  {
    title: "Ιδρυτής Synesis Strategic Advisors",
    description:
      "Ίδρυση το 2019 με εστίαση στη στρατηγική συμβουλευτική, τη χρηματοοικονομική διοίκηση και την επιχειρηματική ανάπτυξη.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Visiting Professor",
    description:
      "Επισκέπτης Καθηγητής στο Τμήμα Πληροφορικής του Ιονίου Πανεπιστημίου.",
    icon: University,
  },
];

const biographySections = [
  {
    title: "Ακαδημαϊκή Πορεία",
    icon: GraduationCap,
    paragraphs: [
      "Ο Μιχαήλ Σπ. Χονδρογιάννης γεννήθηκε στην Κέρκυρα το 1972. Είναι Διδάκτωρ του Τμήματος Ξένων Γλωσσών, Μετάφρασης και Διερμηνείας του Ιονίου Πανεπιστημίου.",
      "Είναι κάτοχος Μεταπτυχιακού Διπλώματος στη Διοίκηση Επιχειρήσεων με εξειδίκευση στη Χρηματοοικονομική Διοίκηση από το Πανεπιστήμιο Μακεδονίας και Πτυχίου Διοίκησης Επιχειρήσεων από το Πανεπιστήμιο Πειραιώς.",
    ],
  },
  {
    title: "Διδακτική και Θεσμική Εμπειρία",
    icon: University,
    paragraphs: [
      "Έχει διδάξει στο Ιόνιο Πανεπιστήμιο τα μαθήματα «Στρατηγική Διοίκηση Πληροφοριακών Συστημάτων», «Οργάνωση και Διοίκηση Επιχειρήσεων» και «Τουρισμός, Πολιτισμός και Δημιουργικές Βιομηχανίες».",
      "Στο παρελθόν υπήρξε ερευνητής στο Geolab Institute, όπου δίδαξε «Εισαγωγή στην Οικονομική Επιστήμη» και «Διεθνείς Οικονομικές Σχέσεις και Οικονομικό Έγκλημα». Έχει διατελέσει επίσης Αντιδήμαρχος Παιδείας και Δημοτικής Περιουσίας στον Δήμο Κεντρικής Κέρκυρας και Διαποντίων Νήσων.",
    ],
  },
  {
    title: "Επαγγελματική Διαδρομή",
    icon: BriefcaseBusiness,
    paragraphs: [
      "Η επαγγελματική του πορεία περιλαμβάνει πολυετή εμπειρία στον τραπεζικό τομέα, με διευθυντικές και επιτελικές θέσεις σε Attica Bank, Aspis Bank και Τράπεζα Πειραιώς.",
      "Στα επαγγελματικά του ενδιαφέροντα περιλαμβάνονται η διαχείριση επιχειρηματικών σχέσεων, η ανάλυση πιστωτικού κινδύνου, η καθοδήγηση ομάδων σε έργα στρατηγικής σημασίας και η εποπτεία θεμάτων επιχειρηματικών καθυστερήσεων και πιστοδοτήσεων.",
    ],
  },
  {
    title: "Ερευνητικό Έργο",
    icon: Microscope,
    paragraphs: [
      "Ως μεταδιδακτορικός ερευνητής στο Τμήμα Πληροφορικής του Ιονίου Πανεπιστημίου, εστιάζει στη μελέτη του τρόπου με τον οποίο η Μηχανική Μάθηση αναδιαμορφώνει την επιστημολογία της αξιολόγησης πιστωτικού κινδύνου.",
      "Η έρευνά του εξετάζει γνωσιακούς και πληροφοριακούς μηχανισμούς παραγωγής γνώσης στη χρηματοοικονομική λήψη αποφάσεων, με εστίαση στις ελληνικές Μικρομεσαίες Επιχειρήσεις και με στόχο πιο ακριβή, διαφανή και θεσμικά υπεύθυνα μοντέλα.",
    ],
  },
  {
    title: "Δημοσιεύσεις και Συνέδρια",
    icon: ShieldCheck,
    paragraphs: [
      "Έχει ασχοληθεί με τη διαχείριση φήμης στον τουρισμό, την ηθική στον τουρισμό, τις επιπτώσεις της sharing economy (Airbnb), την ασφαλιστική απάτη και τις ανήθικες πρακτικές αξιολογήσεων στον κλάδο της φιλοξενίας.",
      "Έχει δημοσιεύσει άρθρα σε διεθνείς εκδόσεις του Springer και έχει συμμετάσχει ως ομιλητής σε διεθνή συνέδρια, μεταξύ των οποίων το Yellow Tourism Conference και το ICSIMAT.",
    ],
  },
  {
    title: "Γλώσσες και Πιστοποιήσεις",
    icon: Languages,
    paragraphs: [
      "Μιλά άριστα αγγλικά και πολύ καλά ιταλικά.",
      "Διαθέτει επαγγελματικές πιστοποιήσεις της Τράπεζας της Ελλάδος και της Επιτροπής Κεφαλαιαγοράς για επενδυτικά προϊόντα και εκπόνηση μελετών για χρηματοοικονομικά μέσα και εκδότες, καθώς και πιστοποίηση Διαπιστευμένου Διαμεσολαβητή από το Υπουργείο Δικαιοσύνης.",
    ],
  },
];

export default function Biography() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.16 });

  return (
    <section
      id="biography"
      ref={sectionRef}
      className="relative overflow-hidden bg-gradient-to-b from-white to-[#F8F6F0] px-6 py-24"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, #C8A951 0px, transparent 280px), radial-gradient(circle at 85% 15%, #0A1628 0px, transparent 320px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.2em] text-[#C8A951] uppercase">
            Βιογραφικό
          </p>
          <h2 className="mt-4 text-3xl font-bold text-[#0A1628] md:text-4xl">
            Μιχαήλ Σ. Χονδρογιάννης
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-[#C8A951]" />
          <p className="mt-8 text-base leading-relaxed text-[#5A5A6A] md:text-lg">
            Συνδυάζει ακαδημαϊκή έρευνα, διδακτική εμπειρία και πολυετή επαγγελματική πορεία στη
            χρηματοοικονομική διοίκηση και τη στρατηγική συμβουλευτική.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;

            return (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 28 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-[#E8E4DA] bg-white p-6 shadow-sm"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C8A951]/15 text-[#0A1628]">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[#0A1628]">{highlight.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5A5A6A]">{highlight.description}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {biographySections.map((section, index) => {
            const Icon = section.icon;

            return (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-2xl border border-[#E8E4DA] border-l-4 border-l-[#C8A951] bg-[#F8F6F0] p-6"
              >
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-white p-2 text-[#0A1628] shadow-sm">
                    <Icon size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A1628]">{section.title}</h3>
                </div>

                <div className="mt-5 space-y-4 text-sm leading-relaxed text-[#4F4F5F] md:text-base">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
