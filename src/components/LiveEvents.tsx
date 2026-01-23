"use client";

import { useState } from "react";
import { Calendar, MapPin, RefreshCcw } from "lucide-react";
import type { LiveEvent } from "@/data/locationData";
import { liveEventsByCity } from "@/data/locationData";

const filters = ["all", "music", "art", "wellness", "networking"] as const;

export function LiveEvents({ city }: { city: string }) {
  const [activeFilter, setActiveFilter] = useState<typeof filters[number]>("all");

  const events = liveEventsByCity[city] ?? [];

  const visibleEvents =
    activeFilter === "all"
      ? events
      : events.filter((e) => e.vibe === activeFilter);

  return (
    <div className="mt-8">
      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">What’s Happening Near You</h3>
        <button
          onClick={() => window.location.reload()}
          className="flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 transition"
        >
          <RefreshCcw className="size-4 text-[#F2D37C]" />
          Refresh
        </button>
      </div>

      {/* Filters */}
      <div className="mb-6 flex gap-2 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`rounded-full px-4 py-1.5 text-sm transition border
              ${
                activeFilter === f
                  ? "border-[#D4AF37]/40 bg-[#D4AF37]/20 text-white"
                  : "border-[#D4AF37]/15 bg-white/5 text-white/70 hover:bg-white/10"
              }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Event cards */}
      <div className="space-y-4">
        {visibleEvents.map((event) => (
          <div
            key={event.id}
            className="rounded-2xl border border-[#D4AF37]/15 bg-white/5 p-5 hover:bg-white/10 transition"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h4 className="text-lg font-semibold text-white">{event.title}</h4>
                <div className="mt-2 flex items-center gap-4 text-sm text-white/70">
                  <span className="flex items-center gap-1">
                    <Calendar className="size-4 text-[#F2D37C]" />
                    {event.date} • {event.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="size-4 text-[#F2D37C]" />
                    {event.location}
                  </span>
                </div>
              </div>

              {event.free && (
                <span className="rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/20 px-3 py-1 text-xs font-semibold text-white">
                  FREE
                </span>
              )}
            </div>
          </div>
        ))}

        {visibleEvents.length === 0 && (
          <div className="rounded-xl border border-[#D4AF37]/15 bg-white/5 p-6 text-white/70">
            No events match this filter yet.
          </div>
        )}
      </div>
    </div>
  );
}

