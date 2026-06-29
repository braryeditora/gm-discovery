"use client";

// Estado emocional esperado: REFLEXÃO PROFUNDA
// Uma pergunta por tela. Nenhuma distração.
// O campo grande de texto convida ao fluxo — não ao preenchimento rápido.
// O salvamento automático silencioso cria segurança: ela pode parar e voltar.

import { useState, useEffect, useRef, useCallback } from "react";
import Button from "@/components/ui/Button";
import ProgressBar from "@/components/ui/ProgressBar";

const PERGUNTAS = [
  "Quem é você antes do trabalho, das redes sociais e das expectativas dos outros?",
  "Quais foram os três momentos mais definidores da sua vida — para o bem ou para o mal — e o que cada um revelou sobre você?",
  "O que você aprendeu sofrendo que não aprenderia de nenhuma outra forma?",
  "Que transformação você já produziu na vida de alguém que considera uma das suas entregas mais genuínas?",
  "Qual injustiça, lacuna ou problema no mundo mais incomoda você?",
  "Que tipo de pessoa você gostaria de ajudar durante os próximos vinte anos?",
  "O que você sente que existe dentro de você, mas ainda não conseguiu organizar, nomear ou colocar para fora?",
  "O que você espera enxergar com mais clareza na nossa conversa?",
];

interface Props {
  indice: number; // 0-based
  respostas: Record<number, string>;
  onSalvar: (indice: number, valor: string) => void;
  onNext: () => void;
  onBack: () => void;
}

export default function ScreenPergunta({
  indice,
  respostas,
  onSalvar,
  onNext,
  onBack,
}: Props) {
  const pergunta = PERGUNTAS[indice];
  const numero = indice + 1; // 1-based para o usuário
  const [valor, setValor] = useState(respostas[numero] || "");
  const [salvo, setSalvo] = useState(false);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Foca o textarea ao montar
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, [indice]);

  // Carrega resposta existente ao trocar de pergunta
  useEffect(() => {
    setValor(respostas[numero] || "");
    setSalvo(false);
  }, [indice, numero, respostas]);

  // Salva com debounce
  const salvarComDebounce = useCallback(
    (novoValor: string) => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
      debounceRef.current = setTimeout(() => {
        onSalvar(numero, novoValor);
        setSalvo(true);
        setTimeout(() => setSalvo(false), 2000);
      }, 800);
    },
    [numero, onSalvar]
  );

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const novoValor = e.target.value;
    setValor(novoValor);
    salvarComDebounce(novoValor);
  };

  const handleContinuar = () => {
    if (debounceRef.current) clearTimeout(debounceRef.current);
    onSalvar(numero, valor);
    onNext();
  };

  return (
    <div className="min-h-screen flex flex-col px-6 py-12 animate-fadeUp">
      <div className="w-full max-w-xl mx-auto flex flex-col flex-1">

        {/* Barra de progresso */}
        <div className="mb-12">
          <ProgressBar atual={numero} total={PERGUNTAS.length} />
        </div>

        {/* Pergunta */}
        <div className="flex-1 flex flex-col">
          <h2
            className="mb-10"
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(20px, 5vw, 26px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.5,
            }}
          >
            {pergunta}
          </h2>

          {/* Campo de texto */}
          <div className="flex-1 flex flex-col">
            <textarea
              ref={textareaRef}
              value={valor}
              onChange={handleChange}
              placeholder="Escreva aqui..."
              className="flex-1 w-full bg-transparent border-0 border-b border-[#E8E8E4] pb-4 pt-2"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#1A1A1A",
                lineHeight: 1.9,
                minHeight: "200px",
                caretColor: "#1A1A1A",
              }}
              rows={8}
            />

            {/* Indicador de salvamento */}
            <div className="h-6 flex items-center mt-2">
              {salvo && (
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    color: "#C4C4C0",
                    letterSpacing: "0.06em",
                    transition: "opacity 0.3s",
                  }}
                >
                  salvo automaticamente
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Navegação */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4">
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
            {numero === PERGUNTAS.length ? "Concluir reflexões" : "Salvar e continuar"}
          </Button>
        </div>

      </div>
    </div>
  );
}
