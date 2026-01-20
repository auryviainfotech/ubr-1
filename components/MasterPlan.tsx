import Image from "next/image";
import { masterPlanContent } from "../lib/content";

export function MasterPlan() {
  return (
    <section className="section-padding navy-section">
      <div className="lux-container space-y-8">
        <div className="max-w-2xl">
          <p className="section-title">Master Plan</p>
          <h2 className="section-heading">
            A podium-plus-sky lifestyle, thoughtfully layered.
          </h2>
          <p className="section-subtitle">
            Vehicular-free podium levels, green perimeters and elevated amenity
            decks come together to craft a rare vertical community.
          </p>
        </div>

        <div className="glass-panel border-white/10 bg-white/5 p-3 sm:p-5">
          <div className="relative h-64 w-full overflow-hidden rounded-xl border border-white/10">
            <Image
              src={masterPlanContent.image}
              alt="Master plan aerial view of Codename Sky Habitat"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
          <div className="mt-4 space-y-1">
            <h3 className="text-sm font-semibold text-slate-50">
              {masterPlanContent.title}
            </h3>
            <p className="text-xs text-slate-300">
              {masterPlanContent.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

