"use client";

import { motion } from "framer-motion";
import { ArrowRight, Scale } from "lucide-react";
import Link from "next/link";

export default function DiamesolavisiPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#F8F6F0] to-[#EDE9DF] px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#0A1628] sm:text-5xl">
          Διαμεσολάβηση
        </h1>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C8A951]" />
        <p className="mt-4 text-sm text-[#6A6A7A]">
          <Link href="/" className="transition-colors hover:text-[#C8A951]">
            Αρχική
          </Link>{" "}
          &gt;{" "}
          <Link href="/ypiresies" className="transition-colors hover:text-[#C8A951]">
            Υπηρεσίες
          </Link>{" "}
          &gt; Διαμεσολάβηση
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-white p-8 shadow-lg sm:p-12"
        >
          <Scale size={48} className="text-[#C8A951]" />
          <h3 className="mt-6 text-2xl font-bold text-[#0A1628]">
            Υπηρεσίες Διαμεσολάβησης
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#5A5A6A]">
            Προσφέρουμε εξειδικευμένες υπηρεσίες διαμεσολάβησης για την
            επίλυση εμπορικών, επιχειρηματικών και αστικών διαφορών.
            Στόχος μας είναι η εξεύρεση βιώσιμων και αμοιβαία αποδεκτών
            λύσεων, αποφεύγοντας τη χρονοβόρα και δαπανηρή δικαστική οδό.
          </p>
          <p className="mt-4 text-sm italic text-[#8A8A9A]">
            Περισσότερες πληροφορίες σύντομα...
          </p>
        </motion.div>
      </section>

      <section className="bg-gradient-to-br from-[#F8F6F0] to-[#EDE9DF] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl font-bold text-[#0A1628] sm:text-4xl">
              Χρειάζεστε Διαμεσολάβηση;
            </h2>
            <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C8A951]" />
            <p className="mt-6 text-base leading-relaxed text-[#5A5A6A] md:text-lg">
              Επικοινωνήστε μαζί μας για να βρούμε τη βέλτιστη λύση
              στη διαφορά σας.
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
