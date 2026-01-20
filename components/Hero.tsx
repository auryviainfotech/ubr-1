"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, FileText } from "lucide-react";
import { heroContent, brochures } from "../lib/content";
import { ContactForm } from "./ContactForm";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 lg:pt-14">
      <div className="lux-container grid gap-10 lg:grid-cols-[3fr,2.2fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.4 }}
          className="space-y-6"
        >
          <p className="section-title">CODENAME SKY HABITAT</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-slate-50">
            Luxury sky residences with{" "}
            <span className="gold-text">panoramic views</span> over Hyderabad.
          </h1>
          <p className="max-w-xl text-sm sm:text-base text-slate-300">
            Experience elevated living with rooftop lounges, skywalks, resort-style
            pools and curated amenities crafted by Urbanrise.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#site-visit" className="btn-gold-solid text-sm">
              {heroContent.primaryCta}
            </a>
            <a
              href={brochures.main}
              target="_blank"
              className="btn-gold-outline text-sm"
            >
              <FileText className="mr-2 h-4 w-4" />
              {heroContent.secondaryCta}
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 text-xs text-slate-300"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white/5">
                <Play className="h-3 w-3" />
              </span>
              Project film playing in background
            </button>
          </div>

          <div className="mt-4 grid max-w-xl gap-5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl sm:grid-cols-3">
            {[
              ["Towers", "3 Iconic"],
              ["Floors", "30+ Sky Levels"],
              ["Rooftop", "20+ Experiences"],
            ].map(([label, value]) => (
              <div key={label} className="space-y-1">
                <p className="text-[11px] uppercase tracking-[0.2em] text-slate-400">
                  {label}
                </p>
                <p className="text-sm font-semibold text-slate-50">{value}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 lg:space-y-5"
        >
          <div className="relative overflow-hidden rounded-3xl border border-gold-500/50 bg-gradient-to-br from-slate-900/90 to-navy-900 shadow-gold-glow">
            <div className="relative h-56 w-full sm:h-64 lg:h-72">
              <Image
                src={heroContent.heroImage}
                alt="Balcony view from Codename Sky Habitat"
                fill
                priority
                className="object-cover brightness-105 saturate-125 transition-transform duration-700 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900/80 via-transparent to-transparent" />
            </div>
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
              <div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-gold-400">
                  SKY HABITAT
                </p>
                <p className="text-xs text-slate-200">
                  Artist&apos;s impression – balcony overlooking the skyline.
                </p>
              </div>
            </div>
          </div>

          <ContactForm compact id="primary-lead" />
        </motion.div>
      </div>
    </section>
  );
}

