"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { PhoneCall } from "lucide-react";
import { callLink } from "../lib/content";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/project", label: "Project" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-navy-900/80 backdrop-blur-xl">
      <div className="lux-container flex items-center justify-between py-3 sm:py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-20 w-44 sm:h-24 sm:w-56 flex items-center justify-center">
              <Image
                src="/logo-sky-habitat.png"
                alt="Codename Sky Habitat logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </Link>

        <nav className="hidden items-center gap-8 text-sm sm:flex">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative py-1 transition ${
                  active ? "text-gold-400" : "text-slate-300 hover:text-slate-50"
                }`}
              >
                {item.label}
                {active && (
                  <span className="absolute inset-x-0 -bottom-1 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={callLink}
            className="hidden items-center gap-2 rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-200 transition hover:border-gold-500/70 hover:text-gold-300 sm:flex"
          >
            <PhoneCall className="h-3.5 w-3.5" />
            <span>Call Sales</span>
          </a>
          <Link
            href="/contact#site-visit"
            className="btn-gold-solid text-xs sm:text-sm"
          >
            Book a Site Visit
          </Link>
        </div>
      </div>
    </header>
  );
}

