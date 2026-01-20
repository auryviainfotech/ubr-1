import { statsHighlights } from "../lib/content";

export function Stats() {
  return (
    <section className="section-padding navy-section/40">
      <div className="lux-container space-y-8">
        <div className="max-w-xl">
          <p className="section-title">Sky Community Highlights</p>
          <h2 className="section-heading">
            A landmark address crafted for skyline living.
          </h2>
          <p className="section-subtitle">
            From acres of elevated podium to signature rooftop experiences,
            every dimension is tuned for luxury, light and limitless views.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {statsHighlights.map((item) => (
            <div
              key={item.label}
              className="glass-panel border-white/5 bg-white/5 px-4 py-5"
            >
              <p className="text-lg font-semibold text-gold-400">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-slate-300">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

