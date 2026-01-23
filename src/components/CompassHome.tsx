"use client";

import React from "react";
import { Star, MapPin, UtensilsCrossed, Calendar } from "lucide-react";
import type { Section } from "@/types/section";

type Props = {
  onSelect: (section: Section) => void;
  selectedCityName: string;
  logoSrc?: string;
};

const items: Array<{
  key: Section;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  dir: "N" | "E" | "S" | "W";
}> = [
  { key: "promoter", title: "Promoter", subtitle: "of the Month", icon: Star, dir: "N" },
  { key: "place", title: "Place", subtitle: "of the Month", icon: MapPin, dir: "E" },
  { key: "cuisine", title: "Cuisine", subtitle: "of the Month", icon: UtensilsCrossed, dir: "S" },
  { key: "events", title: "What’s Happening", subtitle: "Near Me", icon: Calendar, dir: "W" },
];

export function CompassHome({ onSelect, selectedCityName, logoSrc = "/beu-logo.jpg" }: Props) {
  return (
    <div className="w-full">
      <div className="mb-6 flex items-end justify-between gap-4 flex-wrap">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight text-white">BEU</h1>
          <p className="text-white/70">
            Your cultural compass in <span className="text-white/90 font-medium">{selectedCityName}</span>
          </p>
        </div>

        <div className="rounded-full border border-[#D4AF37]/30 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
          Explore • Connect • Bond
        </div>
      </div>

      <div className="relative mx-auto aspect-square w-full max-w-[560px]">
        {/* Compass background with subtle shimmer */}
        <div className="absolute inset-0 rounded-[36px] bg-gradient-to-b from-[#081427] via-[#071225] to-[#060E1C] beu-shimmer shadow-[0_30px_90px_rgba(0,0,0,0.55)]" />

        {/* Rings + glow */}
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className="absolute size-[86%] rounded-full border border-[#D4AF37]/25 beu-rotate-slow" />
          <div className="absolute size-[72%] rounded-full border border-[#D4AF37]/18 beu-rotate-slow-rev" />
          <div className="absolute size-[58%] rounded-full border border-[#D4AF37]/12" />

          <div className="absolute inset-0 rounded-[36px] bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.14),transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.22] bg-[conic-gradient(from_90deg,rgba(212,175,55,0.18),transparent,rgba(212,175,55,0.18),transparent)]" />
        </div>

        {/* Cardinal letters */}
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-1/2 top-5 -translate-x-1/2 text-xs font-semibold tracking-[0.3em] text-[#F2D37C]/90">
            N
          </span>
          <span className="absolute right-6 top-1/2 -translate-y-1/2 text-xs font-semibold tracking-[0.3em] text-[#F2D37C]/90">
            E
          </span>
          <span className="absolute left-1/2 bottom-5 -translate-x-1/2 text-xs font-semibold tracking-[0.3em] text-[#F2D37C]/90">
            S
          </span>
          <span className="absolute left-6 top-1/2 -translate-y-1/2 text-xs font-semibold tracking-[0.3em] text-[#F2D37C]/90">
            W
          </span>
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 top-1/2 z-10 grid -translate-x-1/2 -translate-y-1/2 place-items-center">
          <button
            onClick={() => onSelect("events")}
            className="group relative grid size-[168px] place-items-center rounded-full border border-[#D4AF37]/25 bg-white/5 backdrop-blur-sm transition hover:bg-white/10 beu-pulse-soft"
            aria-label="Open BEU"
          >
            <div className="absolute inset-0 rounded-full shadow-[0_0_0_1px_rgba(212,175,55,0.15),0_25px_60px_rgba(0,0,0,0.55)]" />
            <img
              src={logoSrc}
              alt="BEU"
              className="relative size-[112px] object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute -bottom-7 rounded-full border border-[#D4AF37]/25 bg-black/30 px-3 py-1 text-[11px] font-medium text-white/85">
              Tap to start
            </div>
          </button>
        </div>

        {/* Direction cards */}
        {items.map((it) => {
          const Icon = it.icon;
          const pos =
            it.dir === "N"
              ? "left-1/2 top-10 -translate-x-1/2"
              : it.dir === "E"
              ? "right-8 top-1/2 -translate-y-1/2"
              : it.dir === "S"
              ? "left-1/2 bottom-10 -translate-x-1/2"
              : "left-8 top-1/2 -translate-y-1/2";

          return (
            <button
              key={it.key}
              onClick={() => onSelect(it.key)}
              className={`absolute ${pos} z-20 w-[210px] rounded-2xl border border-[#D4AF37]/20 bg-white/5 p-4 text-left text-white backdrop-blur transition
                         hover:bg-white/10 hover:shadow-[0_20px_70px_rgba(212,175,55,0.18)] active:scale-[0.99]`}
            >
              <div className="mb-3 flex items-center justify-between">
                <div className="grid size-10 place-items-center rounded-xl border border-[#D4AF37]/25 bg-black/20">
                  <Icon className="size-5 text-[#F2D37C]" />
                </div>
                <span className="text-xs font-semibold tracking-[0.3em] text-[#F2D37C]/90">{it.dir}</span>
              </div>
              <div className="font-semibold leading-tight">{it.title}</div>
              <div className="text-sm text-white/70">{it.subtitle}</div>
            </button>
          );
        })}
      </div>

      <div className="mx-auto mt-6 max-w-[560px] rounded-2xl border border-[#D4AF37]/15 bg-white/5 p-4 text-sm text-white/70">
        Monthly picks + live “Near Me” updates. Built for connection.
      </div>
    </div>
  );
}

