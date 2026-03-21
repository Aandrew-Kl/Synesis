"use client";

import { motion } from "framer-motion";
import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-[#F8F6F0] to-[#EDE9DF] px-6 py-24 text-center">
        <h1 className="text-4xl font-bold text-[#0A1628] sm:text-5xl">Επικοινωνία</h1>
        <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-[#C8A951]" />
        <p className="mt-4 text-sm text-[#6A6A7A]">
          <Link href="/" className="transition-colors hover:text-[#C8A951]">
            Αρχική
          </Link>{" "}
          &gt; Επικοινωνία
        </p>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-16">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="rounded-2xl bg-accent p-6 sm:p-8"
        >
          <h2 className="mb-6 text-2xl font-bold text-primary">Στοιχεία Επικοινωνίας</h2>

          <div className="space-y-4 text-sm text-gray-600">
            <div className="flex items-start gap-3">
              <MapPin size={20} className="mt-0.5 shrink-0 text-secondary" />
              <p>Αγίων Πάντων 1, 1ος όροφος, 49131, Κέρκυρα</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-secondary" />
              <p>6986567236</p>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={20} className="mt-0.5 shrink-0 text-secondary" />
              <p>26610 25394</p>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={20} className="mt-0.5 shrink-0 text-secondary" />
              <p>synesis_mch@aol.com</p>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="mb-3 font-semibold text-primary">Ακολουθήστε μας</h3>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=100057127163080"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-secondary"
              >
                <Facebook size={18} />
              </a>
              <a
                href="https://linkedin.com/sitepad"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white transition-colors hover:bg-secondary"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="mt-8 h-64 overflow-hidden rounded-xl">
            <iframe
              title="Χάρτης Κέρκυρας"
              src="https://maps.google.com/maps?q=Αγίων+Πάντων+1+Κέρκυρα&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="border-0"
              allowFullScreen
            />
          </div>
        </motion.div>
      </section>
    </main>
  );
}
