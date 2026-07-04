import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DLMNS | Gemeinde, Raum und Ausstattung",
  description:
    "DLMNS ist ein Familienbetrieb für Gemeindebedarf, Räume, Ausstattung, Service und ergänzende digitale Werkzeuge.",
  metadataBase: new URL("https://dlmns.vercel.app"),
  icons: {
    icon: "/dlmns-main-icon.png",
    apple: "/dlmns-main-icon.png"
  }
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
