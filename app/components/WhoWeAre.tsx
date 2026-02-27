"use client";

import { motion, useInView } from "framer-motion";
import { Handshake, Shield, TrendingUp } from "lucide-react";
import { useRef } from "react";

const serviceCategories = [
  {
    title: "Επιχειρηματική Ανάπτυξη",
    description:
      "Προωθήστε την επιχείρησή σας με εξειδικευμένη υποστήριξη σε Συγχωνεύσεις και Εξαγορές, Επιχειρηματικά Πλάνα και Ψηφιακό Μάρκετινγκ. Από στρατηγική επέκταση έως την ενίσχυση της διαδικτυακής σας παρουσίας, σας βοηθάμε να πετύχετε τους στόχους σας.",
    icon: TrendingUp,
  },
  {
    title: "Χρηματοοικονομική Διαχείριση",
    description:
      "Προστατεύστε την επιχείρησή σας και την προσωπική σας οικονομική κατάσταση με εξειδικευμένες λύσεις. Βοηθάμε στη διασφάλιση της σταθερότητας και στη μεγιστοποίηση της οικονομικής αποδοτικότητας σε κάθε πτυχή της ζωής σας.",
    icon: Shield,
  },
  {
    title: "Διαχείριση Έργων και Διαμεσολάβηση",
    description:
      "Ενισχύστε τη συνεργασία και επιλύστε συγκρούσεις αποτελεσματικά μέσω των εξειδικευμένων υπηρεσιών μας. Προωθούμε την αμοιβαία κατανόηση και διασφαλίζουμε βιώσιμες λύσεις με εμπιστευτικότητα για μακροπρόθεσμη επιτυχία.",
    icon: Handshake,
  },
];

export default function WhoWeAre() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="who-are-we" ref={sectionRef} className="bg-[#F8F6F0] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-[#0A1628] md:text-4xl">Ποιοι Είμαστε</h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-secondary" />
          <p className="mt-8 text-base leading-relaxed text-gray-600 md:text-lg">
            Προσφέρουμε ολοκληρωμένες λύσεις για την ανάπτυξη, τη διαχείριση και την επιτυχία της
            επιχείρησής σας, καθώς και για την προσωπική σας οικονομική ευημερία. Ανακαλύψτε πώς
            μπορούμε να σας υποστηρίξουμε σε κάθε σας βήμα.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="transform rounded-2xl border-t-4 border-transparent bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-secondary hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-secondary text-[#0A1628]">
                  <Icon size={30} strokeWidth={1.9} />
                </div>
                <h3 className="mt-6 text-xl font-bold text-[#0A1628]">{category.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600">{category.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
