import { contactDetails } from "../lib/content";
import { Mail, PhoneCall, MessageCircle } from "lucide-react";
import Link from "next/link";

export function ContactHero() {
  return (
    <section className="section-padding navy-section">
      <div className="lux-container grid gap-8 lg:grid-cols-[1.2fr,1fr] lg:items-center">
        <div className="space-y-4">
          <p className="section-title">Contact</p>
          <h1 className="section-heading">
            Talk to our sales team for a private walkthrough.
          </h1>
          <p className="section-subtitle">
            Share your details and we’ll arrange a personalized site visit, pricing discussion,
            and floor plan walkthrough for Codename Sky Habitat.
          </p>

          <div className="space-y-3 text-sm">
            <a
              href={contactDetails.callLink}
              className="flex items-center gap-2 text-slate-100 hover:text-gold-300"
            >
              <PhoneCall className="h-4 w-4 text-gold-500" />
              {contactDetails.phone}
            </a>
            <div className="flex items-center gap-2 text-slate-100">
              <Mail className="h-4 w-4 text-gold-500" />
              {contactDetails.email}
            </div>
            <a
              href={contactDetails.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 text-emerald-300 hover:text-emerald-200"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp us
            </a>
          </div>
        </div>

        <div className="glass-panel gold-border bg-navy-900/80 p-5">
          <div className="space-y-2 text-sm text-slate-100">
            <p className="text-xs uppercase tracking-[0.2em] text-gold-400">Address</p>
            <p>
              Project site – premium upcoming location in Hyderabad&apos;s growth corridor with
              quick access to IT/financial district, metro, and social infrastructure.
            </p>
            <p className="text-[11px] text-slate-400">
              Exact coordinates shared upon appointment confirmation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

