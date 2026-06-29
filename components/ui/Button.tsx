"use client";

import React from "react";

type Variante = "primary" | "secondary" | "ghost" | "danger";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variante?: Variante;
  fullWidth?: boolean;
  type?: "button" | "submit";
}

const estilos: Record<Variante, string> = {
  primary:
    "bg-[#1A1A1A] text-[#FAFAF8] hover:bg-[#333] active:bg-[#111] disabled:bg-[#C4C4C0] disabled:cursor-not-allowed",
  secondary:
    "border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-[#FAFAF8] active:bg-[#333]",
  ghost:
    "text-[#6B6B6B] hover:text-[#1A1A1A] underline-offset-4 hover:underline",
  danger:
    "border border-red-300 text-red-600 hover:bg-red-50 active:bg-red-100",
};

export default function Button({
  children,
  onClick,
  disabled = false,
  variante = "primary",
  fullWidth = false,
  type = "button",
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center
        px-8 py-3.5
        text-sm font-medium tracking-wide
        transition-all duration-200
        ${estilos[variante]}
        ${fullWidth ? "w-full" : ""}
      `}
      style={{ fontFamily: "Inter, sans-serif", letterSpacing: "0.04em" }}
    >
      {children}
    </button>
  );
}
