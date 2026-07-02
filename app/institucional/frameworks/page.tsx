"use client";

// Temperatura: COMPREENSÃO
// MVP curado — 4 de 21 frameworks do GM OS™ (lista oficial confirmada por
// Orlando). Não publicar os 21 de uma vez (ver Institutional Implementation
// Brief, regra da Framework Library).
//
// Curadoria: RA e RP formam o par discernimento interno/externo — coerente
// com "discernimento antes da construção". PSLV carrega a filosofia de
// presença já em linguagem própria de Orlando. fasR™ é o domínio mais
// concreto e acessível para quem chega de fora.
//
// NOTA: "Discovery Playbook™" e "Discovery Session™" foram removidos desta
// lista — não constam nos 21 frameworks oficiais do GM OS™; são etapas do
// relacionamento comercial (Architecture V1.0, seção "Como funciona"), não
// frameworks metodológicos. "Missão dos Três™" também não é, ela mesma, um
// dos 21 — é um exercício aplicado dentro da Jornada.
//
// ATENÇÃO ORLANDO: revise as definições abaixo antes de publicar. Expandi a
// partir do que você escreveu na Lista de Frameworks, sem inventar
// mecanismo — mas você é quem sabe se o tom e a extensão estão certos.

import { useState, useEffect } from "react";

interface Framework {
  nome: string;
  definicao: string;
  camada: string;
}

const frameworks: Framework[] = [
  {
    nome: "RA — Rota de Autoridade™",
    definicao:
      "Discernimento interno. Antes de qualquer posicionamento externo, existe uma pergunta mais funda: o que sustenta a autoridade de alguém por dentro? A Rota de Autoridade organiza esse território em quatro camadas — Fundamento, Fratura, Chamado e Governo — ajudando a pessoa a reconhecer o que já a sustenta, antes de tentar comunicá-lo ao mundo.",
    camada: "[definir camada — ver GMFL]",
  },
  {
    nome: "RP — Rota de Posicionamento™",
    definicao:
      "Discernimento externo. Par natural da Rota de Autoridade: enquanto uma olha para dentro, esta olha para fora — Contexto, Empatia, Encaixe e Território. Ajuda a entender onde o trabalho de alguém realmente se encaixa no mundo, para quem ele serve de verdade, e que espaço ele ocupa — antes de qualquer estratégia de comunicação ser definida.",
    camada: "[definir camada — ver GMFL]",
  },
  {
    nome: "PSLV",
    definicao:
      "O maior inimigo da autoridade não é a falta de conhecimento. É a ausência de presença. PSLV é um protocolo de retorno ao presente — Pessoa, Situação, Lugar, Você — desenvolvido para treinar a habilidade de estar plenamente no agora. Ele tira quem o pratica do futuro (ansiedade), do passado (culpa, distração) e do automático (resposta mecânica).",
    camada: "[definir camada — ver GMFL]",
  },
  {
    nome: "fasR™",
    definicao:
      "Produção contínua de conteúdo. Muita gente carrega dentro de si mais clareza e mais história do que consegue colocar para fora com regularidade. O fasR™ existe para reduzir essa distância — não como fórmula de produtividade, mas como estrutura que sustenta a produção de conteúdo ao longo do tempo, sem depender apenas de inspiração pontual.",
    camada: "[definir camada — ver GMFL]",
  },
];

export default function FrameworksPage() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisivel(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        opacity: visivel ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Abertura */}
      <section style={{ marginBottom: "64px" }}>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(26px, 5vw, 34px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.3,
            marginBottom: "20px",
          }}
        >
          Framework Library™
        </h1>
        <div
          style={{
            width: "28px",
            height: "1px",
            background: "#C4C4C0",
            marginBottom: "24px",
          }}
        />
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            color: "#6B6B6B",
            lineHeight: 1.9,
            maxWidth: "560px",
          }}
        >
          Uma seleção dos frameworks que sustentam o GM OS™. Cada um nomeia
          um domínio de problema recorrente — não um manual de aplicação.
        </p>
      </section>

      {/* Lista de frameworks */}
      <section style={{ display: "flex", flexDirection: "column", gap: "56px" }}>
        {frameworks.map((fw, i) => (
          <div
            key={i}
            style={{
              borderTop: "1px solid #E8E8E4",
              paddingTop: "32px",
            }}
          >
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.16em",
                color: "#C4C4C0",
                marginBottom: "12px",
              }}
            >
              {fw.camada}
            </p>
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(19px, 4vw, 23px)",
                fontWeight: 400,
                color: "#1A1A1A",
                marginBottom: "16px",
              }}
            >
              {fw.nome}
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#4A4A4A",
                lineHeight: 1.9,
                maxWidth: "620px",
              }}
            >
              {fw.definicao}
            </p>
          </div>
        ))}
      </section>

      {/* Nota de curadoria — sem CTA de conversão aqui, é apenas contexto */}
      <section
        style={{
          marginTop: "64px",
          paddingTop: "32px",
          borderTop: "1px solid #E8E8E4",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#C4C4C0",
          }}
        >
          Esta é uma seleção curada. A biblioteca completa do GM OS™ é mais
          extensa.
        </p>
      </section>
    </div>
  );
}
