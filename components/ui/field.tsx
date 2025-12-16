"use client";

import { useEffect, useRef, useState } from "react";
import { outfit } from "./fonts";
import Image from "next/image";

export type SelectOption = {
  label: string;
  value: string;
  image: string;
};

type SelectProps = {
  label: string;
  select: boolean;
  inputValue?: string;
  extraStyles?: string;
  placeholder?: string;
  options?: SelectOption[];
  value?: SelectOption | null;
  onInputChange?: (value: string) => void;
  onChange?: (option: SelectOption) => void;
};

export default function Field({
  label,
  select,
  inputValue,
  extraStyles = "",
  placeholder = "Select an option",
  options = [],
  value = null,
  onInputChange,
  onChange = () => {},
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="space-y-2 relative">
      {label && (
        <label className="text-[16px] font-medium text-[#013941]">
          {label}
        </label>
      )}

      {/* Select button */}
      {select ? (
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          className="w-full h-15 flex items-center justify-between rounded-[30px] border border-[#E0E0E0] bg-white p-6 mt-4"
        >
          <span
            className={`${outfit.className} font-normal text-[16px] text-[#013941]`}
          >
            {value ? value.label : placeholder}
          </span>

          <svg
            className={`w-4 h-4 text-[#013941] transition-transform ${
              isOpen ? "rotate-180" : ""
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
      ) : (
        <input
          className={`${extraStyles} outline-none focus:outline-none focus:ring-0 w-full h-15 rounded-[30px] border border-[#E0E0E0] py-4 px-6 mt-4`}
          value={inputValue}
          onChange={(e) => onInputChange?.(e.target.value)}
          placeholder={placeholder}
          readOnly={!!inputValue}
        />
      )}

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-20 -mt-5 left-0 md:left-8 w-full rounded-[20px] border border-[#E0E0E0] bg-white shadow-lg overflow-hidden py-4 px-3">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onChange?.(option);
                setIsOpen(false);
              }}
              className={`${outfit.className} flex items-start justify-start gap-2 w-full p-3 text-left font-medium text-[#013941] text-sm rounded-xl hover:bg-[#F5F5F5] transition`}
            >
              <Image
                className={
                  option.value !== "others"
                    ? "rounded-[30px] border border-[#CCF6E5]"
                    : ""
                }
                src={option.image}
                alt={option.label}
                width={24}
                height={24}
              />
              <span>{option.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
