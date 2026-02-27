import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import StructuredData from "./components/StructuredData";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "greek"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin", "greek"],
  variable: "--font-roboto",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Synesis Strategic Advisors | Στρατηγικοί Σύμβουλοι Επιχειρήσεων",
  description: "Υπηρεσίες Οικονομικού Συμβούλου και Στρατηγικού Σχεδιασμού στην Κέρκυρα",
  openGraph: {
    title: "Synesis Strategic Advisors | Στρατηγικοί Σύμβουλοι Επιχειρήσεων",
    description: "Υπηρεσίες Οικονομικού Συμβούλου και Στρατηγικού Σχεδιασμού στην Κέρκυρα",
    type: "website",
    locale: "el_GR",
    siteName: "Synesis Strategic Advisors",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body className={`${roboto.variable} ${inter.variable} bg-accent text-text antialiased`}>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
        <StructuredData />
      </body>
    </html>
  );
}
