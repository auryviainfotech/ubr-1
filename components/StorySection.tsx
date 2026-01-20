import Image from "next/image";
import { signatureExperiences } from "../lib/content";

export function StorySection() {
  return (
    <section className="section-padding navy-section">
      <div className="lux-container space-y-10">
        <div className="max-w-2xl">
          <p className="section-title">Signature Experiences</p>
          <h2 className="section-heading">
            Curated rooftop stories above the city.
          </h2>
          <p className="section-subtitle">
            From sunken lounges to skywalks and terraces, Codename Sky Habitat
            elevates every moment into a curated experience.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {signatureExperiences.map((exp) => (
            <article
              key={exp.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-sm transition hover:-translate-y-1 hover:shadow-gold-glow"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="space-y-2 px-5 py-4">
                <h3 className="text-sm font-semibold text-slate-50">
                  {exp.title}
                </h3>
                <p className="text-xs text-slate-300">{exp.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

