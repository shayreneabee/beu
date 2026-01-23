
"use client";

import { ArrowLeft, Star, MapPin, UtensilsCrossed, Calendar, ExternalLink, Heart, Share2 } from "lucide-react";
import type { Section } from "@/types/section";
import { getLocationData } from "@/data/locationData";
import { cities } from "@/components/LocationSelector";
import { LiveEvents } from "@/components/LiveEvents";
import { PromoterSpotlight } from "@/components/PromoterSpotlight";



const sectionConfig: Record<Section, { title: string; icon: any; dir: "N" | "E" | "S" | "W" }> = {
  promoter: { title: "Promoter of the Month", icon: Star, dir: "N" },
  place: { title: "Place of the Month", icon: MapPin, dir: "E" },
  cuisine: { title: "Cuisine of the Month", icon: UtensilsCrossed, dir: "S" },
  events: { title: "What’s Happening Near Me", icon: Calendar, dir: "W" },
};

export function SectionDetail({
  section,
  onBack,
  selectedCity,
}: {
  section: Section;
  onBack: () => void;
  selectedCity: string;
}) {
  const config = sectionConfig[section];
  const Icon = config.icon;

  const cityName = cities.find((c) => c.id === selectedCity)?.name || "your city";
  const featured = getLocationData(selectedCity)[section];

  return (
    <div className="w-full">
      <button onClick={onBack} className="group mb-6 flex items-center gap-2 text-white/70 hover:text-white transition">
        <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-0.5" />
        Return to Compass
      </button>

      <div className="relative overflow-hidden rounded-2xl border border-[#D4AF37]/18 bg-white/5 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 opacity-25">
          <div className="absolute -top-28 -right-28 size-[520px] rounded-full border border-[#D4AF37]/35" />
          <div className="absolute -top-40 -right-40 size-[620px] rounded-full border border-[#D4AF37]/18" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_20%,rgba(212,175,55,0.18),transparent_55%)]" />
        </div>

        <div className="relative flex items-start justify-between gap-4 flex-wrap">
          <div className="mb-2 flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-xl border border-[#D4AF37]/25 bg-black/20">
              <Icon className="size-6 text-[#F2D37C]" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">{config.title}</h2>
              <div className="mt-1 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/20 bg-black/20 px-3 py-1 text-xs text-white/80">
                <span className="font-bold tracking-[0.3em] text-[#F2D37C]">{config.dir}</span>
                <span>Featured this month</span>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/18 bg-black/20 px-4 py-2 text-sm text-white/85">
            <MapPin className="size-4 text-[#F2D37C]" />
            {cityName}
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-2xl border border-[#D4AF37]/12 bg-black/20">
          <div className="relative aspect-[21/9] bg-black/40">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(212,175,55,0.10),transparent_55%)]" />
            <div className="absolute top-4 left-4 rounded-full border border-[#D4AF37]/25 bg-black/35 px-3 py-1 text-xs text-white/85 backdrop-blur">
              {config.dir} • {config.title}
            </div>
            <div className="absolute bottom-5 left-5 right-5">
              <h3 className="text-2xl font-semibold text-white">{featured.name}</h3>
            </div>
          </div>

          <div className="p-6">
            <p className="text-white/75 text-base">{featured.description}</p>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3 rounded-xl border border-[#D4AF37]/12 bg-white/5 p-4">
              <div className="text-center">
                <div className="font-semibold text-white">{featured.stats.events}</div>
                <div className="text-xs text-white/60">Activity</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">{featured.stats.followers}</div>
                <div className="text-xs text-white/60">Community</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-white">{featured.stats.rating}</div>
                <div className="text-xs text-white/60">Rating</div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-semibold text-white mb-3">Upcoming Highlights</h4>
              <div className="space-y-2">
                {featured.upcomingEvents.map((evt, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl border border-[#D4AF37]/12 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10 transition"
                  >
                    <Calendar className="size-5 text-[#F2D37C]" />
                    <span>{evt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button className="flex-1 min-w-[200px] rounded-xl border border-[#D4AF37]/25 bg-[#D4AF37]/15 px-6 py-3 font-semibold text-white hover:bg-[#D4AF37]/20 transition flex items-center justify-center gap-2">
                <ExternalLink className="size-5 text-[#F2D37C]" />
                Learn More
              </button>
              <button className="rounded-xl border border-[#D4AF37]/18 bg-white/5 px-5 py-3 font-semibold text-white/80 hover:bg-white/10 transition flex items-center gap-2">
                <Heart className="size-5 text-[#F2D37C]" />
                Save
              </button>
              <button className="rounded-xl border border-[#D4AF37]/18 bg-white/5 px-5 py-3 font-semibold text-white/80 hover:bg-white/10 transition flex items-center gap-2">
                <Share2 className="size-5 text-[#F2D37C]" />
                Share
              </button>
            </div>

    {section === "promoter" && <PromoterSpotlight cityId={selectedCity} />}

    {section === "events" && <LiveEvents city={selectedCity} />}

           
          </div>
        </div>
      </div>
    </div>
  );
}

