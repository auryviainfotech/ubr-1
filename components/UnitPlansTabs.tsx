"use client";

import { useState } from "react";
import { unitPlans } from "../lib/content";
import { Bed, LayoutList } from "lucide-react";

export function UnitPlansTabs() {
  const [active, setActive] = useState(unitPlans[0]?.type ?? "2 BHK");

  const current = unitPlans.find((p) => p.type === active) ?? unitPlans[0];

  return (
    <section className="section-padding navy-section">
      <div className="lux-container space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-title">Unit Plans</p>
            <h2 className="section-heading">Sky residences tailored for you.</h2>
            <p className="section-subtitle">
              Smartly planned layouts with generous balconies and efficient flow for
              everyday luxury.
            </p>
          </div>
          <div className="flex gap-2">
            {unitPlans.map((plan) => (
              <button
                key={plan.type}
                onClick={() => setActive(plan.type)}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition ${
                  active === plan.type
                    ? "border-gold-500/70 bg-gold-500/10 text-gold-300 shadow-gold-glow"
                    : "border-white/10 bg-white/5 text-slate-200 hover:border-gold-500/60 hover:text-gold-200"
                }`}
              >
                {plan.type}
              </button>
            ))}
          </div>
        </div>

        <div className="glass-panel gold-border bg-navy-900/70 p-5 sm:p-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-gold-500/50 bg-white/5 text-gold-400">
                <Bed className="h-5 w-5" />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  {current.type}
                </p>
                <p className="text-lg font-semibold text-slate-50">{current.size}</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 text-xs text-slate-200">
              <LayoutList className="h-4 w-4 text-gold-400" />
              <span>{current.facing}</span>
            </div>
          </div>
          <p className="mt-4 text-sm text-slate-200">{current.description}</p>
          <p className="mt-3 text-[11px] text-slate-500">
            Note: Layouts, dimensions and facings are indicative. Refer to the official brochure for
            detailed plans.
          </p>
        </div>
      </div>
    </section>
  );
}

