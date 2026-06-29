"use client";

interface ProgressBarProps {
  atual: number;
  total: number;
}

export default function ProgressBar({ atual, total }: ProgressBarProps) {
  const percentual = Math.round((atual / total) * 100);

  return (
    <div className="w-full">
      <div className="flex justify-between items-center mb-2">
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.12em",
            color: "#6B6B6B",
            fontWeight: 400,
          }}
        >
          {atual} DE {total}
        </span>
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.08em",
            color: "#C4C4C0",
          }}
        >
          {percentual}%
        </span>
      </div>
      <div
        className="w-full h-px bg-[#E8E8E4] relative overflow-hidden"
      >
        <div
          className="absolute left-0 top-0 h-full bg-[#1A1A1A] transition-all duration-500 ease-out"
          style={{ width: `${percentual}%` }}
        />
      </div>
    </div>
  );
}
