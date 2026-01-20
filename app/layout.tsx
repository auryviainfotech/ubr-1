import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { FloatingActions } from "../components/FloatingActions";

export const metadata: Metadata = {
  title: "Codename Sky Habitat by Urbanrise | Luxury Sky Living in Hyderabad",
  description:
    "Codename Sky Habitat by Urbanrise – luxury high-rise residences with rooftop skywalks, elevated clubhouse, and premium amenities in Hyderabad.",
  openGraph: {
    title: "Codename Sky Habitat by Urbanrise",
    description:
      "Experience luxury sky living with panoramic views, rooftop experiences, and curated amenities.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen bg-navy-gradient text-slate-100">
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <FloatingActions />
      </body>
    </html>
  );
}

