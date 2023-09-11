import "./globals.css";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import FormContextProvider from "./context/FormContext";

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
      <FormContextProvider>
        <body
          className={`${space_grotesk.className} flex justify-center items-center my-auto h-[100dvh] text-norm bg-[#141414]`}
        >
          {children}
        </body>
      </FormContextProvider>
    </html>
  );
}
