"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Maximize2 } from "lucide-react";
import { galleryItems } from "../lib/content";
import { AnimatePresence, motion } from "framer-motion";

export function GalleryLightbox() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="section-padding navy-section">
      <div className="lux-container space-y-8">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="section-title">Gallery</p>
            <h2 className="section-heading">Luxury brought to life.</h2>
            <p className="section-subtitle">
              Explore the elevated podiums, rooftop lounges, and resort-style leisure decks.
            </p>
          </div>
          <p className="text-[11px] text-slate-400">
            Images are artistic impressions for representation.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {galleryItems.map((item, idx) => (
            <button
              key={item.title}
              onClick={() => setActiveIndex(idx)}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between px-4 py-3">
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <Maximize2 className="h-4 w-4 text-slate-400 group-hover:text-gold-500" />
              </div>
            </button>
          ))}
        </div>

        <AnimatePresence>
          {activeIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
              onClick={() => setActiveIndex(null)}
            >
              <div className="flex h-full items-center justify-center px-4 py-6">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-navy-900/90 p-3"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setActiveIndex(null)}
                    className="absolute right-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 hover:text-gold-300"
                  >
                    <X className="h-4 w-4" />
                  </button>
                  <div className="relative h-[70vh] w-full min-h-[320px]">
                    <Image
                      src={galleryItems[activeIndex].src}
                      alt={galleryItems[activeIndex].title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-3 flex items-center justify-between px-1">
                    <div>
                      <p className="text-sm font-semibold text-slate-50">
                        {galleryItems[activeIndex].title}
                      </p>
                      <p className="text-xs text-slate-400">
                        Artist&apos;s impression. Subject to design development.
                      </p>
                    </div>
                    <p className="text-[11px] text-slate-500">
                      Codename Sky Habitat by Urbanrise
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

