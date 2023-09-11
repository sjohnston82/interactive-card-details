import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const space_grotesk = Space_Grotesk({ subsets: ["latin"], weight: ["500"] });

export const metadata: Metadata = {
  title: "Interactive Card Details Form",
  description: "Interactive card details form project from frontendmentor.io",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${space_grotesk.className} text-norm bg-light-grayish-violet`}>
        {children}
      </body>
    </html>
  );
}
