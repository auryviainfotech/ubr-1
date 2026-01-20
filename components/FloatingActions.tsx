"use client";

import { PhoneCall, MessageCircle } from "lucide-react";
import { callLink, whatsappLink } from "../lib/content";

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-6 sm:right-6">
      <a
        href={callLink}
        className="glass-panel gold-border flex h-11 w-11 items-center justify-center rounded-full bg-navy-900/90 text-gold-400 shadow-gold-glow transition hover:scale-105"
        aria-label="Call now"
      >
        <PhoneCall className="h-4.5 w-4.5" />
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-panel gold-border flex h-11 w-11 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 shadow-lg shadow-emerald-500/40 ring-1 ring-emerald-400/60 transition hover:scale-105"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-4.5 w-4.5" />
      </a>
    </div>
  );
}

