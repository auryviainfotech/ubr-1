import { amenitiesFull } from "../lib/content";

export function AmenitiesList() {
  return (
    <section className="section-padding navy-section">
      <div className="lux-container space-y-6">
        <div className="max-w-2xl">
          <p className="section-title">Amenities</p>
          <h2 className="section-heading">A resort palette, every day.</h2>
          <p className="section-subtitle">
            Layered indulgences across podium and rooftop levels to balance work, wellness,
            leisure and celebration.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          {amenitiesFull.map((item) => (
            <div
              key={item}
              className="glass-panel border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-100"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

