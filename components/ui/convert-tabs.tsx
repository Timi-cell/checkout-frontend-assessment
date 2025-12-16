"use client";

import { outfit } from "./fonts";

type Tab = {
  label: string;
  value: string;
};

type ConvertTabsProps = {
  tabs: Tab[];
  active: string;
  onChange: (value: string) => void;
};

export default function ConvertTabs({
  tabs,
  active,
  onChange,
}: ConvertTabsProps) {
  const activeIndex = tabs.findIndex((t) => t.value === active);

  return (
    <div className="relative flex rounded-[30px] bg-[#F2F2F2]">
      {/* sliding background */}
      <div
        className="absolute inset-y-0 left-0  rounded-[30px] bg-[#013941] transition-all duration-300"
        style={{
          width: `${100 / tabs.length}%`,
          transform: `translateX(${activeIndex * 100}%)`,
        }}
      />

      {tabs.map((tab) => (
        <button
          key={tab.value}
          onClick={() => onChange(tab.value)}
          className={`${
            outfit.className
          } relative z-10 flex-1 py-2 px-4 text-sm font-medium transition-colors ${
            active === tab.value ? "text-[#F8FEFB]" : "text-[#828282]"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
