"use client";

import Image from "next/image";
import { clashDisplay, outfit } from "./fonts";
import { useEffect, useRef, useState } from "react";
import { Token } from "@/types/wallet";
import { Search } from "lucide-react";

type AmountInputProps = {
  label: string;
  value: string;
  tokenSearchValue?: string;
  tokenValue: string;
  tokenImage: string;
  options?: Token[];
  onChangeToken?: (token: Token) => void;
  onChange: (value: string) => void;
  onSearchTokenChange?: (tokenSearchValue: string) => void;
};

export default function AmountField({
  label,
  value,
  tokenImage,
  tokenSearchValue = "",
  tokenValue,
  options = [],
  onChangeToken,
  onChange,
  onSearchTokenChange,
}: AmountInputProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);
  return (
    <div className="p-6 rounded-[30px] border border-[#E0E0E0] relative" ref={ref}>
      {/* Label */}
      <label
        htmlFor="number"
        className="text-[#828282] font-medium text-[16px]"
      >
        {label}
      </label>

      {/* Input container */}
      <div className="flex items-center justify-between bg-white mt-2">
        {/* Amount input */}
        <input
          type="number"
          inputMode="decimal"
          value={value}
          id="number"
          onChange={(e) => onChange(e.target.value)}
          placeholder="0.00"
          className="w-full text-2xl font-semibold outline-none placeholder:text-[#828282] "
        />

        {/* Token badge */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className={`${clashDisplay.className} flex items-center justify-center gap-1 rounded-[20px] border border-[#E0E0E0] text-sm font-medium text-[#013941] bg-[#F7F7F7] py-2 px-3 w-25`}
        >
          <Image
            src={tokenImage}
            alt={tokenValue}
            width={20}
            height={20}
            className="h-full w-full object-cover rounded-[20px] border border-[#CCF6E5]"
          />

          <span>{tokenValue}</span>

          <svg
            className={`w-9 text-[#013941]  transition-transform ${
              open ? "rotate-180" : ""
            }`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {/* Dropdown */}
        {open && (
          <div className="absolute top-23.5 right-10 w-66 z-20 rounded-[20px] border border-[#E0E0E0] bg-white shadow-lg overflow-hidden py-4 px-3">
            <div className="relative mb-2">
              {/* Icon */}
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />

              {/* Input */}
              <input
                type="text"
                value={tokenSearchValue}
                onChange={(e) => onSearchTokenChange?.(e.target.value)}
                placeholder="Search"
                className="w-full rounded-[20px] border border-[#E0E0E0] bg-white py-2 pl-10 pr-3 text-sm outline-none placeholder:text-[#828282] focus:border-[#E0E0E0]"
              />
            </div>

            {options.map((token) => {
              const isActive = token.symbol === tokenValue;

              return (
                <button
                  key={token.symbol}
                  onClick={() => {
                    onChangeToken?.(token);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-start gap-2 p-3 rounded-xl hover:bg-[#F5F5F5] ${
                    isActive ? "text-[#013941] font-medium" : "text-[#F5F5F5]"
                  }`}
                >
                  <Image
                    className="rounded-[30px] border border-[#CCF6E5]"
                    src={token.image}
                    alt={token.symbol}
                    width={24}
                    height={24}
                  />
                  <span
                    className={`${outfit.className} text-sm font-medium text-[#013941]`}
                  >
                    {token.name}
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
