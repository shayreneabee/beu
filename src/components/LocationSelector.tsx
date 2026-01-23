"use client";

export const cities = [
  { id: "paris", name: "Paris" },
  { id: "london", name: "London" },
  { id: "berlin", name: "Berlin" },
  { id: "amsterdam", name: "Amsterdam" },
];

type Props = {
  selectedCity: string;
  onChange: (id: string) => void;
};

export function LocationSelector({ selectedCity, onChange }: Props) {
  return (
    <div className="flex items-center gap-3">
      <label className="text-sm text-white/70">City</label>
      <select
        value={selectedCity}
        onChange={(e) => onChange(e.target.value)}
        className="rounded-xl border border-[#D4AF37]/20 bg-white/5 px-4 py-2 text-sm text-white outline-none backdrop-blur
                   focus:ring-2 focus:ring-[#D4AF37]/30"
      >
        {cities.map((c) => (
          <option key={c.id} value={c.id} className="bg-[#081427]">
            {c.name}
          </option>
        ))}
      </select>
    </div>
  );
}

