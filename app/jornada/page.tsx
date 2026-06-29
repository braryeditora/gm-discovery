"use client";

import { useState, useEffect, useCallback } from "react";
import { Respostas, respostasIniciais } from "@/types/respostas";
import {
  carregarRespostas,
  salvarRespostas,
  carregarTela,
  salvarTela,
} from "@/lib/storage";

import ScreenWelcome from "@/components/screens/ScreenWelcome";
import ScreenCarta from "@/components/screens/ScreenCarta";
import ScreenRitual from "@/components/screens/ScreenRitual";
import ScreenVoz from "@/components/screens/ScreenVoz";
import ScreenPergunta from "@/components/screens/ScreenPergunta";
import ScreenDons from "@/components/screens/ScreenDons";
import ScreenMissao from "@/components/screens/ScreenMissao";
import ScreenFinal from "@/components/screens/ScreenFinal";

// Mapeamento de telas:
// 0  → Boas-vindas
// 1  → A Carta
// 2  → Ritual de entrada
// 3  → Qual voz você está ouvindo?
// 4  → Pergunta 1
// 5  → Pergunta 2
// 6  → Pergunta 3
// 7  → Pergunta 4
// 8  → Pergunta 5
// 9  → Pergunta 6
// 10 → Pergunta 7
// 11 → Pergunta 8
// 12 → Seus dons e sinais
// 13 → Missão dos Três
// 14 → Jornada concluída

const TOTAL_TELAS = 15;
const TELA_PRIMEIRA_PERGUNTA = 4;
const TOTAL_PERGUNTAS = 8;

export default function JornadaPage() {
  const [tela, setTela] = useState<number>(0);
  const [respostas, setRespostas] = useState<Respostas>(respostasIniciais);
  const [carregado, setCarregado] = useState(false);

  // Carrega estado persistido ao montar
  useEffect(() => {
    const r = carregarRespostas();
    const t = carregarTela();
    setRespostas(r);
    // Só restaura a tela se não for a tela final — deixa sempre entrar pela boas-vindas
    // mas restaura se estava no meio da jornada
    if (t > 0 && t < TOTAL_TELAS - 1) {
      setTela(t);
    }
    setCarregado(true);
  }, []);

  // Persiste tela atual
  useEffect(() => {
    if (carregado) {
      salvarTela(tela);
    }
  }, [tela, carregado]);

  const ir = useCallback((novaTela: number) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTela(novaTela);
  }, []);

  const avancar = useCallback(() => {
    setTela((t) => {
      const nova = Math.min(t + 1, TOTAL_TELAS - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return nova;
    });
  }, []);

  const voltar = useCallback(() => {
    setTela((t) => {
      const nova = Math.max(t - 1, 0);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return nova;
    });
  }, []);

  const salvarPergunta = useCallback((numero: number, valor: string) => {
    setRespostas((prev) => {
      const novos = {
        ...prev,
        perguntas: { ...prev.perguntas, [numero]: valor },
      };
      salvarRespostas(novos);
      return novos;
    });
  }, []);

  const salvarDons = useCallback((dons: Respostas["dons"]) => {
    setRespostas((prev) => {
      const novos = { ...prev, dons };
      salvarRespostas(novos);
      return novos;
    });
  }, []);

  const salvarMissao = useCallback((missao: Respostas["missao"]) => {
    setRespostas((prev) => {
      const novos = { ...prev, missao };
      salvarRespostas(novos);
      return novos;
    });
  }, []);

  const reiniciar = useCallback(() => {
    setRespostas(respostasIniciais);
    setTela(0);
    salvarTela(0);
  }, []);

  if (!carregado) {
    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FAFAF8",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            letterSpacing: "0.14em",
            color: "#C4C4C0",
          }}
        >
          GM™
        </span>
      </div>
    );
  }

  // Tela 0 — Boas-vindas
  if (tela === 0) {
    return <ScreenWelcome onNext={avancar} />;
  }

  // Tela 1 — A Carta
  if (tela === 1) {
    return <ScreenCarta onNext={avancar} onBack={voltar} />;
  }

  // Tela 2 — Ritual de entrada
  if (tela === 2) {
    return <ScreenRitual onNext={avancar} onBack={voltar} />;
  }

  // Tela 3 — Qual voz você está ouvindo?
  if (tela === 3) {
    return <ScreenVoz onNext={avancar} onBack={voltar} />;
  }

  // Telas 4–11 — Perguntas individuais
  if (tela >= TELA_PRIMEIRA_PERGUNTA && tela < TELA_PRIMEIRA_PERGUNTA + TOTAL_PERGUNTAS) {
    const indice = tela - TELA_PRIMEIRA_PERGUNTA; // 0-based
    return (
      <ScreenPergunta
        indice={indice}
        respostas={respostas.perguntas}
        onSalvar={salvarPergunta}
        onNext={avancar}
        onBack={voltar}
      />
    );
  }

  // Tela 12 — Dons e sinais
  if (tela === 12) {
    return (
      <ScreenDons
        dons={respostas.dons}
        onSalvar={salvarDons}
        onNext={avancar}
        onBack={voltar}
      />
    );
  }

  // Tela 13 — Missão dos Três
  if (tela === 13) {
    return (
      <ScreenMissao
        missao={respostas.missao}
        onSalvar={salvarMissao}
        onNext={avancar}
        onBack={voltar}
      />
    );
  }

  // Tela 14 — Final
  if (tela === 14) {
    return <ScreenFinal respostas={respostas} onReiniciar={reiniciar} />;
  }

  // Fallback
  ir(0);
  return null;
}
