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
import { FormEvent, useMemo, useState } from "react";

type FormData = {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fieldVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: "easeOut" as const },
  },
};

const initialValues: FormData = {
  fullName: "",
  email: "",
  subject: "",
  message: "",
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  const hasErrors = useMemo(() => Object.keys(errors).length > 0, [errors]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const validationErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      validationErrors.fullName = "Το ονοματεπώνυμο είναι υποχρεωτικό.";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Το email είναι υποχρεωτικό.";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setShowSuccess(false);
      return;
    }

    setShowSuccess(true);
    setFormData(initialValues);
  };

  const handleFieldChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setShowSuccess(false);

    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
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

          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="rounded-2xl bg-white p-6 shadow-lg sm:p-8"
          >
            <h2 className="mb-6 text-2xl font-bold text-primary">Επικοινωνήστε μαζί μας</h2>

            <motion.form
              onSubmit={handleSubmit}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-5"
              noValidate
            >
              <motion.div variants={fieldVariants}>
                <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="fullName">
                  Ονοματεπώνυμο *
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(event) => handleFieldChange("fullName", event.target.value)}
                  className={`w-full rounded-lg border px-4 py-3 outline-none transition-colors ${
                    errors.fullName
                      ? "border-red-500"
                      : "border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary"
                  }`}
                />
                {errors.fullName ? (
                  <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                ) : null}
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(event) => handleFieldChange("email", event.target.value)}
                  className={`w-full rounded-lg border px-4 py-3 outline-none transition-colors ${
                    errors.email
                      ? "border-red-500"
                      : "border-gray-200 focus:border-secondary focus:ring-1 focus:ring-secondary"
                  }`}
                />
                {errors.email ? <p className="mt-1 text-sm text-red-600">{errors.email}</p> : null}
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="subject">
                  Θέμα
                </label>
                <input
                  id="subject"
                  type="text"
                  value={formData.subject}
                  onChange={(event) => handleFieldChange("subject", event.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                />
              </motion.div>

              <motion.div variants={fieldVariants}>
                <label className="mb-1 block text-sm font-medium text-gray-700" htmlFor="message">
                  Μήνυμα
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(event) => handleFieldChange("message", event.target.value)}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3 outline-none transition-colors focus:border-secondary focus:ring-1 focus:ring-secondary"
                />
              </motion.div>

              <motion.div variants={fieldVariants} className="pt-1">
                <button
                  type="submit"
                  aria-label="Υποβολή φόρμας επικοινωνίας"
                  className="w-full rounded-lg bg-secondary py-3 font-semibold text-white transition-colors hover:bg-secondary/90"
                >
                  Υποβολή
                </button>
              </motion.div>

              {showSuccess && !hasErrors ? (
                <motion.p
                  variants={fieldVariants}
                  className="rounded-lg bg-green-100 px-4 py-3 text-sm text-green-700"
                >
                  Το μήνυμά σας στάλθηκε επιτυχώς!
                </motion.p>
              ) : null}
            </motion.form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
