"use client";

import { useEffect, useMemo, useState } from "react";
import { Heart, Share2, UserPlus, Check, Star, Instagram, Link as LinkIcon } from "lucide-react";
import { promoterProfilesByCity, type PromoterProfile } from "@/data/locationData";

function formatFollowers(n: number) {
  if (!n) return "—";
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`;
  return `${n}`;
}

export function PromoterSpotlight({ cityId }: { cityId: string }) {
  const profile: PromoterProfile = useMemo(() => {
    return promoterProfilesByCity[cityId] ?? promoterProfilesByCity["paris"];
  }, [cityId]);

  const storageKey = `beu_follow_${profile.id}`;
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(storageKey);
      setFollowing(stored === "1");
    } catch {
      // ignore
    }
  }, [storageKey]);

  const followerDisplay = useMemo(() => {
    const base = profile.stats.followers;
    const shown = following ? base + 1 : base;
    return formatFollowers(shown);
  }, [following, profile.stats.followers]);

  const handleFollow = () => {
    const next = !following;
    setFollowing(next);
    try {
      localStorage.setItem(storageKey, next ? "1" : "0");
    } catch {
      // ignore
    }
  };

  return (
    <div className="mt-8">
      <div className="overflow-hidden rounded-2xl border border-[#D4AF37]/15 bg-white/5">
        {/* HERO (editorial full photo, no crop) */}
        <div className="relative aspect-[4/3] bg-black/40">
          {/* Backdrop + full image */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-black/55" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(212,175,55,0.12),transparent_55%)]" />
            <img
              src={profile.photo}
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-contain object-center opacity-95"
            />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_10%,rgba(212,175,55,0.18),transparent_55%)]" />

          {/* Badge */}
          <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/25 bg-black/35 px-3 py-1 text-xs text-white/85 backdrop-blur">
            <span className="font-bold tracking-[0.25em] text-[#F2D37C]">N</span>
            <span>Promoter of the Month</span>
          </div>

          {/* Top actions */}
          <div className="absolute right-5 top-5 flex items-center gap-2">
            <button className="rounded-full border border-[#D4AF37]/20 bg-black/35 p-2 text-white/85 hover:bg-black/45 transition backdrop-blur">
              <Share2 className="size-4 text-[#F2D37C]" />
            </button>
            <button className="rounded-full border border-[#D4AF37]/20 bg-black/35 p-2 text-white/85 hover:bg-black/45 transition backdrop-blur">
              <Heart className="size-4 text-[#F2D37C]" />
            </button>
          </div>

          {/* Bottom content */}
          <div className="absolute bottom-5 left-5 right-5 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h3 className="text-2xl font-semibold text-white">{profile.name}</h3>
              <div className="mt-1 text-white/75">
                {profile.cityLabel} • <span className="text-white/85">{profile.tagline}</span>
              </div>
            </div>

            <button
              onClick={handleFollow}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition border
                ${
                  following
                    ? "border-[#D4AF37]/45 bg-[#D4AF37]/25 text-white"
                    : "border-[#D4AF37]/25 bg-[#D4AF37]/15 text-white hover:bg-[#D4AF37]/20"
                }`}
            >
              {following ? (
                <Check className="size-4 text-[#F2D37C]" />
              ) : (
                <UserPlus className="size-4 text-[#F2D37C]" />
              )}
              {following ? "Following" : "Follow"}
            </button>
          </div>
        </div>

        {/* BODY */}
        <div className="p-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {/* Story */}
            <div className="md:col-span-2">
              <div className="text-white/80 leading-relaxed">{profile.bio}</div>

              <div className="mt-5 rounded-2xl border border-[#D4AF37]/12 bg-black/20 p-5">
                <div className="text-sm font-semibold text-white">Why BEU chose them</div>
                <p className="mt-2 text-white/75 leading-relaxed">{profile.whyBeuChose}</p>

                <div className="mt-4 border-l-2 border-[#D4AF37]/35 pl-4 text-white/80 italic">
                  {profile.promoterQuote}
                </div>
              </div>
            </div>

            {/* Growth */}
            <div className="rounded-2xl border border-[#D4AF37]/12 bg-black/20 p-5">
              <div className="text-sm font-semibold text-white mb-3">Recognition</div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-white/75">
                  <span>Followers</span>
                  <span className="font-semibold text-white">{followerDisplay}</span>
                </div>

                <div className="flex items-center justify-between text-white/75">
                  <span>Events hosted</span>
                  <span className="font-semibold text-white">{profile.stats.eventsHosted || "—"}</span>
                </div>

                <div className="flex items-center justify-between text-white/75">
                  <span>Community rating</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-white">
                    <Star className="size-4 text-[#F2D37C]" />
                    {profile.stats.rating ? profile.stats.rating.toFixed(1) : "—"}
                  </span>
                </div>
              </div>

              <div className="mt-5 space-y-2">
                {profile.socials.instagram && (
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <Instagram className="size-4 text-[#F2D37C]" />
                    <span>{profile.socials.instagram}</span>
                  </div>
                )}
                {profile.socials.website && (
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <LinkIcon className="size-4 text-[#F2D37C]" />
                    <span>{profile.socials.website}</span>
                  </div>
                )}
              </div>

              <div className="mt-5 text-xs text-white/50">
                Follow is saved on this device for now (we’ll sync it to accounts later).
              </div>
            </div>
          </div>

          {/* Upcoming */}
          <div className="mt-6">
            <h4 className="text-lg font-semibold text-white mb-3">Upcoming Highlights</h4>
            <div className="space-y-2">
              {profile.upcoming.map((e, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-[#D4AF37]/12 bg-white/5 px-4 py-3 text-white/80 hover:bg-white/10 transition"
                >
                  <div className="font-semibold text-white">{e.title}</div>
                  <div className="text-sm text-white/70">
                    {e.when} • {e.where}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              onClick={handleFollow}
              className={`flex-1 min-w-[220px] rounded-xl border px-6 py-3 font-semibold transition
                ${
                  following
                    ? "border-[#D4AF37]/45 bg-[#D4AF37]/25 text-white"
                    : "border-[#D4AF37]/25 bg-[#D4AF37]/15 text-white hover:bg-[#D4AF37]/20"
                }`}
            >
              {following ? "You’re supporting their growth ✨" : "Follow to support their growth"}
            </button>

            <button className="rounded-xl border border-[#D4AF37]/18 bg-white/5 px-5 py-3 font-semibold text-white/80 hover:bg-white/10 transition">
              Share Spotlight
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

