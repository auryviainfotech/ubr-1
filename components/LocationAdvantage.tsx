import Link from "next/link";
import { MapPin, Navigation } from "lucide-react";
import { locationAdvantage } from "../lib/content";

export function LocationAdvantage({
  variant = "full",
}: {
  variant?: "preview" | "full";
}) {
  const showAll = variant === "full";
  const points = showAll
    ? locationAdvantage.points
    : locationAdvantage.points.slice(0, 4);

  // Custom background color for Location Advantage section
  return (
    <section className={`section-padding`} style={{ background: showAll ? '#f5f7fa' : '#1a2233' }}>
      <div className="lux-container grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start">
        <div className="space-y-4">
          <p className={`section-title ${showAll ? "text-gold-500" : ""}`}>
            Location Advantage
          </p>
          <h2 className={`section-heading ${showAll ? "text-slate-900" : ""}`}>
            Seamless connectivity to everything that matters.
          </h2>
          <p className={`section-subtitle ${showAll ? "text-slate-600" : ""}`}>
            {locationAdvantage.description}
          </p>

          <ul className="grid gap-2 text-sm">
            {points.map((p) => (
              <li
                key={p}
                className={`flex items-start gap-2 rounded-xl border px-3 py-2 ${
                  showAll
                    ? "border-slate-200 bg-white text-slate-700"
                    : "border-white/10 bg-white/5 text-slate-200"
                }`}
              >
                <Navigation
                  className={`mt-0.5 h-4 w-4 ${showAll ? "text-gold-500" : "text-gold-400"}`}
                />
                <span>{p}</span>
              </li>
            ))}
          </ul>

          {!showAll && (
            <Link href="/project" className="btn-gold-outline w-fit">
              Explore the Project
            </Link>
          )}
        </div>

        <div className="space-y-4">
          <div
            className={`rounded-2xl border p-5 ${
              showAll ? "border-slate-200 bg-white" : "border-white/10 bg-white/5 backdrop-blur-xl"
            }`}
          >
            <div className="flex items-center gap-2">
              <MapPin className={`${showAll ? "text-gold-500" : "text-gold-400"} h-4 w-4`} />
              <p className={`text-sm font-semibold ${showAll ? "text-slate-900" : "text-slate-100"}`}>
                Map
              </p>
            </div>
            <div
              className={`mt-3 flex h-56 items-center justify-center rounded-xl border text-xs ${
                showAll
                  ? "border-slate-200 bg-slate-50 text-slate-600"
                  : "border-white/10 bg-navy-900/60 text-slate-300"
              }`}
            >
              {locationAdvantage.mapPlaceholderLabel}
            </div>
          </div>

          <div
            className={`rounded-2xl border p-4 ${
              showAll ? "border-slate-200 bg-white" : "border-white/10 bg-white/5 backdrop-blur-xl"
            }`}
          >
            <div className="mb-2 flex items-center gap-2 text-xs font-semibold">
              <MapPin className={`${showAll ? "text-gold-500" : "text-gold-400"} h-4 w-4`} />
              <span className={showAll ? "text-slate-900" : "text-slate-100"}>
                Location Map
              </span>
            </div>
            <div
              className={`mt-3 flex h-56 items-center justify-center rounded-xl border text-xs ${
                showAll
                  ? "border-slate-200 bg-slate-50 text-slate-600"
                  : "border-white/10 bg-navy-900/60 text-slate-300"
              }`}
            >
              {locationAdvantage.mapPlaceholderLabel}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

