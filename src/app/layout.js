import PropTypes from "prop-types";
import { Geist, Geist_Mono } from "next/font/google";
import PlausibleAnalytics from "@/components/plausible-analytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Les Fauves",
  description:
    "Mini-site de test pour mesurer les visites et les recherches avec Plausible.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-stone-50 text-zinc-950">
        <PlausibleAnalytics />
        {children}
      </body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
