import {
  Facebook,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#E8E4DA] bg-[#F0EDE6] text-[#0A1628]">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src="/Synesis/logo.png"
              alt="Synesis Logo"
              width={44}
              height={44}
              className="h-11 w-11"
            />
            <h2 className="text-2xl font-bold tracking-wider text-[#0A1628]">SYNESIS</h2>
          </div>
          <div className="mt-3 h-0.5 w-12 bg-[#C8A951]" />
          <p className="mt-4 text-sm text-[#6A6A7A]">Strategic Advisors</p>
          <p className="mt-2 text-xs text-[#8A8A9A]">
            Στρατηγικοί Σύμβουλοι Επιχειρήσεων στην Κέρκυρα
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-[#0A1628] uppercase">
            Σύνδεσμοι
          </h3>
          <div className="space-y-2 text-sm">
            <Link
              href="/#who-are-we"
              className="block text-[#5A5A6A] transition-colors hover:text-[#C8A951]"
            >
              Ποιοι είμαστε
            </Link>
            <Link
              href="/#services"
              className="block text-[#5A5A6A] transition-colors hover:text-[#C8A951]"
            >
              Υπηρεσίες
            </Link>
            <Link
              href="/contact"
              className="block text-[#5A5A6A] transition-colors hover:text-[#C8A951]"
            >
              Επικοινωνία
            </Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-[#0A1628] uppercase">
            Επικοινωνία
          </h3>
          <div className="space-y-2 text-sm text-[#5A5A6A]">
            <p className="flex items-start gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#C8A951]" />
              <span>Αγίων Πάντων 1, 1ος όροφος, 49131, Κέρκυρα</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#C8A951]" />
              <span>6986567236</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone size={16} className="shrink-0 text-[#C8A951]" />
              <span>26610 25394</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail size={16} className="shrink-0 text-[#C8A951]" />
              <span>synesis_mch@aol.com</span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wide text-[#0A1628] uppercase">
            Ακολουθήστε μας
          </h3>
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/profile.php?id=100057127163080"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1628] text-white transition-colors hover:bg-[#C8A951]"
            >
              <Facebook size={18} />
            </a>
            <a
              href="https://linkedin.com/sitepad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0A1628] text-white transition-colors hover:bg-[#C8A951]"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D8D4CA] py-6">
        <p className="text-center text-sm text-[#8A8A9A]">
          © 2025 Synesis Strategic Advisors. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
