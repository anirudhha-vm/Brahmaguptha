import type { Metadata } from "next";
import { Cinzel, Montserrat } from "next/font/google";
import Link from "next/link";
import Navigation from "../components/Navigation";
import "./globals.css";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  weight: ["400", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Brahmagupta Mathematics & AI Club | DSU Bengaluru",
  description: "Official portal for the Brahmagupta Club — Empowering Mathematics and AI at Dayananda Sagar University, Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${montserrat.variable}`}>
      <body>
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  );
}
