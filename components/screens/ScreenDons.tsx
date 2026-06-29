"use client";

// Estado emocional esperado: RECONHECIMENTO
// A participante começa a nomear o que já existe nela — não o que quer construir.
// Cada campo é um espelho. A sensação ao preencher deve ser de descoberta, não de inventário.

import { useState, useRef, useCallback } from "react";
import Button from "@/components/ui/Button";
import { Respostas } from "@/types/respostas";

interface Props {
  dons: Respostas["dons"];
  onSalvar: (dons: Respostas["dons"]) => void;
  onNext: () => void;
  onBack: () => void;
}

const campos: { key: keyof Respostas["dons"]; label: string; placeholder: string }[] = [
  {
    key: "fazBem",
    label: "O que eu sei fazer muito bem",
    placeholder: "Seja específica. Não generalize.",
  },
  {
    key: "ensina",
    label: "O que eu ensino ou explico com facilidade",
    placeholder: "Aquilo que parece óbvio para você, mas não para outros.",
  },
  {
    key: "pedemAjuda",
    label: "O que as pessoas sempre pedem ajuda para mim",
    placeholder: "Mesmo em situações informais.",
  },
  {
    key: "resultados",
    label: "Resultados que já produzi na vida de outras pessoas",
    placeholder: "Uma mudança real que você ajudou a acontecer.",
  },
  {
    key: "conhecimentos",
    label: "Conhecimentos que acumulei e talvez subestime",
    placeholder: "O que você sabe que ninguém te pediu para aprender.",
  },
  {
    key: "fariaSemRemuneracao",
    label: "O que eu faria mesmo sem remuneração",
    placeholder: "O que já fez de graça porque não conseguia deixar de fazer.",
  },
];

export default function ScreenDons({ dons, onSalvar, onNext, onBack }: Props) {
  const [valores, setValores] = useState<Respostas["dons"]>({ ...dons });
  const [salvo, setSalvo] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback(
    (key: keyof Respostas["dons"], valor: string) => {
      const novos = { ...valores, [key]: valor };
      setValores(novos);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onSalvar(novos);
        setSalvo(true);
        setTimeout(() => setSalvo(false), 2000);
      }, 800);
    },
    [valores, onSalvar]
  );

  const handleContinuar = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSalvar(valores);
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-16 animate-fadeUp">
      <div className="w-full max-w-xl mx-auto">

        {/* Cabeçalho */}
        <div className="mb-12">
          <p
            className="mb-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "#C4C4C0",
            }}
          >
            SEUS DONS E SINAIS
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(22px, 5vw, 28px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.4,
            }}
          >
            O que já existe em você
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              color: "#6B6B6B",
              lineHeight: 1.8,
            }}
          >
            Responda com brevidade. Uma frase é suficiente. Não tente parecer grande —
            apenas seja honesta.
          </p>
        </div>

        {/* Campos */}
        <div className="space-y-10">
          {campos.map((campo) => (
            <div key={campo.key}>
              <label
                style={{
                  display: "block",
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: "#1A1A1A",
                  letterSpacing: "0.02em",
                  marginBottom: "8px",
                }}
              >
                {campo.label}
              </label>
              <textarea
                value={valores[campo.key]}
                onChange={(e) => handleChange(campo.key, e.target.value)}
                placeholder={campo.placeholder}
                rows={2}
                className="w-full bg-transparent border-b border-[#E8E8E4] pt-2 pb-3"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#1A1A1A",
                  lineHeight: 1.8,
                  caretColor: "#1A1A1A",
                }}
              />
            </div>
          ))}
        </div>

        {/* Indicador salvo */}
        <div className="h-8 flex items-center mt-4">
          {salvo && (
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "11px",
                color: "#C4C4C0",
                letterSpacing: "0.06em",
              }}
            >
              salvo automaticamente
            </span>
          )}
        </div>

        {/* Navegação */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBack}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "13px",
              color: "#C4C4C0",
              letterSpacing: "0.06em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px 0",
            }}
          >
            ← Voltar
          </button>
          <Button onClick={handleContinuar}>
            Salvar e continuar
          </Button>
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
}
