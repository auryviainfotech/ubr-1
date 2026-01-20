import Link from "next/link";
import { Mail, MapPin, PhoneCall, FileText } from "lucide-react";
import { brochures, contactDetails } from "../lib/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-900/90">
      <div className="lux-container py-10 text-sm text-slate-300">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <p className="text-xs font-semibold tracking-[0.3em] text-gold-400">
              URBANRISE
            </p>
            <p className="text-base font-medium text-slate-100">
              Codename Sky Habitat
            </p>
            <p className="text-xs text-slate-400">
              A landmark sky community crafted with elevated experiences, curated
              amenities and future-ready connectivity.
            </p>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Quick Links
            </p>
            <div className="flex flex-col gap-1.5 text-xs">
              <Link href="/project" className="hover:text-gold-300">
                Project Overview
              </Link>
              <Link href="/contact" className="hover:text-gold-300">
                Book a Site Visit
              </Link>
              <a
                href={brochures.main}
                target="_blank"
                className="inline-flex items-center gap-1 hover:text-gold-300"
              >
                <FileText className="h-3 w-3" />
                Main Brochure
              </a>
              <a
                href={brochures.woj}
                target="_blank"
                className="inline-flex items-center gap-1 hover:text-gold-300"
              >
                <FileText className="h-3 w-3" />
                WOJ Brochure
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Contact
            </p>
            <div className="space-y-1.5 text-xs">
              <div className="inline-flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-gold-400" />
                <span>{contactDetails.email}</span>
              </div>
              <a
                href={contactDetails.callLink}
                className="inline-flex items-center gap-2 hover:text-gold-300"
              >
                <PhoneCall className="h-3.5 w-3.5 text-gold-400" />
                <span>{contactDetails.phone}</span>
              </a>
              <p className="inline-flex items-start gap-2 text-[11px] text-slate-400">
                <MapPin className="mt-[2px] h-3.5 w-3.5 text-gold-400" />
                <span>Project site address – premium upcoming location in Hyderabad&apos;s growth corridor.</span>
              </p>
            </div>
          </div>

          <div className="space-y-2 text-[10px] text-slate-500">
            <p>
              Disclaimer: All images, videos, and visuals are artistic
              impressions used for representation purposes only. The developer
              reserves the right to make changes in plans, specifications and
              features without prior notice.
            </p>
            <p>© {new Date().getFullYear()} Urbanrise. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

