import Link from "next/link";
import { PhoneCall, MessageCircle, CalendarClock } from "lucide-react";
import { callLink, whatsappLink } from "../lib/content";

export function QuickActions() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      <a
        href={callLink}
        className="glass-panel border-white/10 bg-white/5 px-4 py-4 transition hover:border-gold-500/70 hover:shadow-gold-glow"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
          <span className="text-gold-400">
            <PhoneCall className="h-4 w-4" />
          </span>
          Call now
        </div>
        <p className="mt-1 text-xs text-slate-300">
          Talk to our sales expert for pricing and availability.
        </p>
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="glass-panel border-white/10 bg-white/5 px-4 py-4 transition hover:border-gold-500/70 hover:shadow-gold-glow"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
          <span className="text-gold-400">
            <MessageCircle className="h-4 w-4" />
          </span>
          WhatsApp now
        </div>
        <p className="mt-1 text-xs text-slate-300">
          Chat instantly and get brochure + plans on WhatsApp.
        </p>
      </a>
      <Link
        href="#site-visit"
        className="glass-panel border-white/10 bg-white/5 px-4 py-4 transition hover:border-gold-500/70 hover:shadow-gold-glow"
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-50">
          <span className="text-gold-400">
            <CalendarClock className="h-4 w-4" />
          </span>
          Book site visit
        </div>
        <p className="mt-1 text-xs text-slate-300">
          Schedule a personalized walkthrough at the project site.
        </p>
      </Link>
    </div>
  );
}

