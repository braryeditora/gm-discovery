"use client";

// Estado emocional esperado: ACOLHIMENTO
// A participante deve sentir que chegou a um lugar preparado para ela.
// Não uma plataforma genérica — um ambiente que a aguardava.

import Button from "@/components/ui/Button";

interface Props {
  onNext: () => void;
}

export default function ScreenWelcome({ onNext }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fadeUp">
      <div className="w-full max-w-sm text-center">

        {/* Marca discreta */}
        <div className="mb-16">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "#C4C4C0",
              fontWeight: 400,
            }}
          >
            GM™
          </span>
        </div>

        {/* Título */}
        <h1
          className="mb-8"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(32px, 8vw, 44px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
          }}
        >
          Bem-vinda, Val.
        </h1>

        {/* Linha divisória */}
        <div
          className="mx-auto mb-10"
          style={{ width: "32px", height: "1px", background: "#C4C4C0" }}
        />

        {/* Texto introdutório */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            color: "#6B6B6B",
            lineHeight: 1.8,
          }}
        >
          <p className="mb-4">
            Este ambiente foi preparado especialmente para iniciar nossa conversa.
          </p>
          <p className="mb-4">
            Tempo estimado: 25 minutos.
          </p>
          <p className="mb-4">
            Tudo o que você escrever ficará salvo neste navegador.
          </p>
          <p>
            Quando terminar, Orlando estará melhor preparado para nossa Discovery Session.
          </p>
        </div>

        {/* Botão */}
        <div className="mt-14">
          <Button onClick={onNext}>
            Começar minha jornada
          </Button>
        </div>

        {/* Rodapé discreto */}
        <div className="mt-16">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.08em",
              color: "#C4C4C0",
            }}
          >
            GM Discovery Experience™
          </span>
        </div>

      </div>
    </div>
  );
}
