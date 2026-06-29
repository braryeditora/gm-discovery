"use client";

// Estado emocional esperado: CURIOSIDADE RELACIONAL
// A participante é convidada a buscar perspectivas externas sobre si mesma.
// Este exercício move o olhar para fora — e prepara para o espelho da Discovery Session.
// A tarefa é simples e clara. A instrução não deve intimidar.

import { useState, useRef, useCallback } from "react";
import Button from "@/components/ui/Button";
import { MissaoItem } from "@/types/respostas";

interface Props {
  missao: MissaoItem[];
  onSalvar: (missao: MissaoItem[]) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ScreenMissao({ missao, onSalvar, onNext, onBack }: Props) {
  const [itens, setItens] = useState<MissaoItem[]>(
    missao.length === 3
      ? missao
      : [
          { pessoa: "", qualidade: "", revelou: "" },
          { pessoa: "", qualidade: "", revelou: "" },
          { pessoa: "", qualidade: "", revelou: "" },
        ]
  );
  const [salvo, setSalvo] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = useCallback(
    (i: number, campo: keyof MissaoItem, valor: string) => {
      const novos = itens.map((item, idx) =>
        idx === i ? { ...item, [campo]: valor } : item
      );
      setItens(novos);
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onSalvar(novos);
        setSalvo(true);
        setTimeout(() => setSalvo(false), 2000);
      }, 800);
    },
    [itens, onSalvar]
  );

  const handleContinuar = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSalvar(itens);
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-16 animate-fadeUp">
      <div className="w-full max-w-xl mx-auto">

        {/* Cabeçalho */}
        <div className="mb-10">
          <p
            className="mb-3"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "#C4C4C0",
            }}
          >
            MISSÃO DOS TRÊS
          </p>
          <h2
            className="mb-6"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(22px, 5vw, 28px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.4,
            }}
          >
            O que os outros enxergam em você
          </h2>

          {/* Instrução */}
          <div
            style={{
              borderLeft: "1px solid #C4C4C0",
              paddingLeft: "20px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#6B6B6B",
                lineHeight: 1.9,
              }}
            >
              Antes da nossa Discovery Session, escolha três pessoas que te
              conhecem bem e pergunte:
            </p>
            <p
              className="mt-3"
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "15px",
                fontStyle: "italic",
                color: "#1A1A1A",
                lineHeight: 1.7,
              }}
            >
              "Quando você pensa em mim, qual é a primeira qualidade que vem à
              sua mente?"
            </p>
          </div>
        </div>

        {/* Tabela / Cards */}
        <div className="space-y-10">
          {itens.map((item, i) => (
            <div
              key={i}
              style={{
                paddingBottom: "32px",
                borderBottom: i < 2 ? "1px solid #E8E8E4" : "none",
              }}
            >
              <p
                className="mb-5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  color: "#C4C4C0",
                }}
              >
                PESSOA {i + 1}
              </p>

              <div className="space-y-5">
                {/* Pessoa */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#6B6B6B",
                      letterSpacing: "0.04em",
                      marginBottom: "6px",
                    }}
                  >
                    Quem é essa pessoa
                  </label>
                  <input
                    type="text"
                    value={item.pessoa}
                    onChange={(e) => handleChange(i, "pessoa", e.target.value)}
                    placeholder="Nome ou relação (ex: minha sócia, minha irmã)"
                    className="w-full bg-transparent border-b border-[#E8E8E4] pb-2 pt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#1A1A1A",
                      outline: "none",
                    }}
                  />
                </div>

                {/* Qualidade */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#6B6B6B",
                      letterSpacing: "0.04em",
                      marginBottom: "6px",
                    }}
                  >
                    Qualidade mencionada
                  </label>
                  <input
                    type="text"
                    value={item.qualidade}
                    onChange={(e) => handleChange(i, "qualidade", e.target.value)}
                    placeholder="O que ela respondeu"
                    className="w-full bg-transparent border-b border-[#E8E8E4] pb-2 pt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#1A1A1A",
                      outline: "none",
                    }}
                  />
                </div>

                {/* O que revelou */}
                <div>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#6B6B6B",
                      letterSpacing: "0.04em",
                      marginBottom: "6px",
                    }}
                  >
                    O que isso revelou para você
                  </label>
                  <textarea
                    value={item.revelou}
                    onChange={(e) => handleChange(i, "revelou", e.target.value)}
                    placeholder="Sua reflexão sobre a resposta dela"
                    rows={2}
                    className="w-full bg-transparent border-b border-[#E8E8E4] pb-2 pt-1"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: "#1A1A1A",
                      caretColor: "#1A1A1A",
                    }}
                  />
                </div>
              </div>
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
            Concluir minha jornada
          </Button>
        </div>

        <div className="h-16" />
      </div>
    </div>
  );
}
