"use client";

// Estado emocional esperado: PRESENÇA
// Antes de qualquer palavra, a pessoa vê apenas a marca.
// Silêncio visual puro. Nenhuma instrução. Nenhum botão.
// A experiência começa aqui — não com texto, mas com uma pausa intencional.

import { useEffect } from "react";

interface Props {
  onConcluir: () => void;
}

export default function ScreenSplash({ onConcluir }: Props) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onConcluir();
    }, 2800);
    return () => clearTimeout(timer);
  }, [onConcluir]);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ background: "#F5F3EE" }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "10px",
          animation: "splashEntrada 1.2s ease forwards",
        }}
      >
        {/* Marca principal */}
        <span
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(28px, 7vw, 42px)",
            fontWeight: 400,
            color: "#1A1A1A",
            letterSpacing: "0.06em",
            lineHeight: 1,
          }}
        >
          GM Discovery
        </span>

        {/* Linha decorativa */}
        <div
          style={{
            width: "32px",
            height: "1px",
            background: "#C4C4C0",
            margin: "4px 0",
          }}
        />

        {/* Subtítulo discreto */}
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 300,
            letterSpacing: "0.2em",
            color: "#C4C4C0",
          }}
        >
          EXPERIENCE™
        </span>
      </div>

      <style>{`
        @keyframes splashEntrada {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
