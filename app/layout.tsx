import type { Metadata } from "next";
import { Inter, Roboto } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className="scroll-smooth">
      <body className={`${roboto.variable} ${inter.variable} bg-accent text-text antialiased`}>
        {children}
      </body>
    </html>
  );
}
