"use client";

// Estado emocional esperado: CURIOSIDADE E ABERTURA INTERIOR
// Esta tela não faz nenhuma pergunta ainda. Ela instala uma pergunta.
// A participante deve sair daqui com algo ressoando internamente,
// não com uma resposta — mas com uma disposição para buscar uma.

import Button from "@/components/ui/Button";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function ScreenVoz({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fadeUp">
      <div className="w-full max-w-sm text-center">

        {/* Marca */}
        <div className="mb-16">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "#C4C4C0",
            }}
          >
            GM™
          </span>
        </div>

        {/* Título */}
        <h2
          className="mb-10"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(26px, 6vw, 36px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.3,
          }}
        >
          Qual voz você está ouvindo?
        </h2>

        {/* Linha */}
        <div
          className="mx-auto mb-10"
          style={{ width: "32px", height: "1px", background: "#C4C4C0" }}
        />

        {/* Texto */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            color: "#6B6B6B",
            lineHeight: 2,
          }}
          className="space-y-5"
        >
          <p>
            Antes de descobrir o que construir, é preciso perceber quais vozes
            têm dirigido suas decisões.
          </p>
          <p>Algumas vozes trazem clareza.</p>
          <p>Outras produzem ruído.</p>
          <p>Esta jornada começa aqui.</p>
        </div>

        {/* Botões */}
        <div className="mt-14 flex flex-col items-center gap-4">
          <Button onClick={onNext}>
            Avançar
          </Button>
          <button
            onClick={onBack}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: "#C4C4C0",
              letterSpacing: "0.06em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            Voltar
          </button>
        </div>

      </div>
    </div>
  );
}
