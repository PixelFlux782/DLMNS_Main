import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DLMNS | Digitale Systeme, Denkformate und Erfahrungsräume",
  description:
    "DLMNS bündelt digitale Systeme, Produktideen, Analysewerkzeuge und Bedeutungsräume als ruhige Root Page.",
  metadataBase: new URL("https://dlmns.vercel.app")
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
