"use client";

// Estado emocional esperado: COMPROMETIMENTO CONSCIENTE
// A participante não clica por impulso — ela afirma conscientemente que está pronta.
// O checklist obrigatório cria um micro-ritual de intenção, não uma barreira.
// Quando o botão se habilita, a sensação deve ser de "agora sim estou pronta".

import { useState } from "react";
import Button from "@/components/ui/Button";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const itens = [
  "Tenho 20 a 30 minutos",
  "Estou em um ambiente tranquilo",
  "Vou responder com honestidade",
  "Entendo que não há resposta certa",
];

export default function ScreenRitual({ onNext, onBack }: Props) {
  const [marcados, setMarcados] = useState<Record<number, boolean>>({});

  const todosM = itens.every((_, i) => marcados[i]);

  const toggle = (i: number) => {
    setMarcados((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 animate-fadeUp">
      <div className="w-full max-w-sm">

        {/* Marca */}
        <div className="mb-16 text-center">
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
          className="mb-4"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(24px, 6vw, 32px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.3,
          }}
        >
          Antes de responder
        </h2>

        {/* Subtítulo */}
        <p
          className="mb-12"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            color: "#6B6B6B",
            lineHeight: 1.8,
          }}
        >
          Separe alguns minutos. Desligue distrações. Responda sem tentar
          parecer pronta. Escreva o que for verdadeiro agora.
        </p>

        {/* Checklist */}
        <div className="space-y-4 mb-12">
          {itens.map((item, i) => (
            <button
              key={i}
              onClick={() => toggle(i)}
              className="w-full flex items-center gap-4 text-left group"
              style={{ background: "none", border: "none", cursor: "pointer", padding: "4px 0" }}
            >
              {/* Checkbox customizado */}
              <div
                style={{
                  width: "20px",
                  height: "20px",
                  minWidth: "20px",
                  border: marcados[i] ? "1px solid #1A1A1A" : "1px solid #C4C4C0",
                  background: marcados[i] ? "#1A1A1A" : "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.2s ease",
                }}
              >
                {marcados[i] && (
                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                    <path
                      d="M1 4L3.5 6.5L9 1"
                      stroke="#FAFAF8"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>

              {/* Label */}
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: marcados[i] ? "#1A1A1A" : "#6B6B6B",
                  lineHeight: 1.6,
                  transition: "color 0.2s ease",
                }}
              >
                {item}
              </span>
            </button>
          ))}
        </div>

        {/* Botão */}
        <div className="flex flex-col items-center gap-4">
          <Button onClick={onNext} disabled={!todosM} fullWidth>
            {todosM ? "Estou pronta" : "Confirme todos os itens"}
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
