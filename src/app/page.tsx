"use client";

import { useMemo, useState } from "react";
import type { Section } from "@/types/section";
import { CompassHome } from "@/components/CompassHome";
import { SectionDetail } from "@/components/SectionDetail";
import { LocationSelector, cities } from "@/components/LocationSelector";

export default function Page() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("paris");

  const selectedCityName = useMemo(
    () => cities.find((c) => c.id === selectedCity)?.name || "your city",
    [selectedCity]
  );

  return (
    <main className="min-h-screen bg-[#050B14] text-white">
      <div className="mx-auto max-w-5xl px-5 py-8">
        <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl border border-[#D4AF37]/20 bg-white/5">
              <span className="text-[#F2D37C] font-semibold">BEU</span>
            </div>
            <div>
              <div className="text-sm text-white/60">BLACK EUROPE</div>
              <div className="text-lg font-semibold">Cultural Compass</div>
            </div>
          </div>

          <LocationSelector selectedCity={selectedCity} onChange={setSelectedCity} />
        </div>

        {!activeSection ? (
          <CompassHome
            onSelect={(s) => setActiveSection(s)}
            selectedCityName={selectedCityName}
            logoSrc="/beu-logo.jpg"
          />
        ) : (
          <SectionDetail
            section={activeSection}
            onBack={() => setActiveSection(null)}
            selectedCity={selectedCity}
          />
        )}
      </div>
    </main>
  );
}

