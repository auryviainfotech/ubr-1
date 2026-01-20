import { amenitiesPreview } from "../lib/content";

export function AmenitiesGrid() {
  return (
    <section className="section-padding navy-section">
      <div className="lux-container space-y-8">
        <div className="max-w-2xl">
          <p className="section-title">Amenities Preview</p>
          <h2 className="section-heading">
            Resort-style indulgences, every day of the week.
          </h2>
          <p className="section-subtitle">
            Thoughtfully layered amenities across podium and rooftop levels to
            balance work, wellness and weekend living.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {amenitiesPreview.map((item) => (
            <div
              key={item}
              className="glass-panel border-white/10 bg-navy-800/70 px-4 py-4 text-xs text-slate-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

