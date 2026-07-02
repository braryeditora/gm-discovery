"use client";

// Temperatura: COMPREENSÃO
// 9 de 21 frameworks do GM OS™ — segunda leva de curadoria (lista oficial
// confirmada por Orlando). Ainda não é a biblioteca completa — restam 12
// para crescimento futuro (ver Institutional Implementation Brief, regra
// da Framework Library: "curada, não completa no MVP").
//
// Critério de seleção desta leva: domínio de problema legível para quem
// chega de fora. Deixados de fora por ora (mais operacionais/internos):
// PBML™, EEVE™, GM-Canvas™, KX-GM™, EPR™, GSB™, Win-Loss GM™,
// Win-Loss Pós-Decisão™, IMD-GM™, Storytelling, MAPA-Mentor™, RA/RP já
// incluídos anteriormente.
//
// NOTA (confirmado via GM Foundations v1.4): a taxonomia de "camadas" do
// GM OS™ ainda não existe oficialmente — por isso o campo de camada segue
// fora da página pública. Reintroduzir quando o GMFL™ fechar a taxonomia.

import { useState, useEffect } from "react";

interface Framework {
  nome: string;
  definicao: string;
}

const frameworks: Framework[] = [
  {
    nome: "Mentor Conselheiro",
    definicao:
      "Antes de qualquer framework específico, existe uma postura que os governa a todos: a de mentor, não a de especialista distante. Mentor Conselheiro nomeia essa postura — pedagógica, paciente, presente — que atravessa cada framework do GM OS™, garantindo que nenhum deles seja aplicado como fórmula fria, mas sempre como acompanhamento.",
  },
  {
    nome: "RA — Rota de Autoridade™",
    definicao:
      "Discernimento interno. Antes de qualquer posicionamento externo, existe uma pergunta mais funda: o que sustenta a autoridade de alguém por dentro? A Rota de Autoridade organiza esse território em quatro camadas — Fundamento, Fratura, Chamado e Governo — ajudando a pessoa a reconhecer o que já a sustenta, antes de tentar comunicá-lo ao mundo.",
  },
  {
    nome: "RP — Rota de Posicionamento™",
    definicao:
      "Discernimento externo. Par natural da Rota de Autoridade: enquanto uma olha para dentro, esta olha para fora — Contexto, Empatia, Encaixe e Território. Ajuda a entender onde o trabalho de alguém realmente se encaixa no mundo, para quem ele serve de verdade, e que espaço ele ocupa — antes de qualquer estratégia de comunicação ser definida.",
  },
  {
    nome: "QV-GM™ Life",
    definicao:
      "Diagnóstico da vida antes do diagnóstico do negócio. QV-GM™ Life organiza quatro perguntas essenciais — clareza, prioridade, complexidade e resultado — para que alguém entenda o estado real da própria vida antes de tentar resolver qualquer coisa fora dela.",
  },
  {
    nome: "VFSN™",
    definicao:
      "Governo pessoal como fundamento do governo profissional. VFSN™ organiza quatro áreas que sustentam qualquer liderança — Vida Espiritual, Família, Saúde e Negócios — partindo do princípio de que ninguém governa uma empresa com solidez enquanto essas quatro áreas estão desalinhadas entre si.",
  },
  {
    nome: "PSLV",
    definicao:
      "O maior inimigo da autoridade não é a falta de conhecimento. É a ausência de presença. PSLV é um protocolo de retorno ao presente — Pessoa, Situação, Lugar, Você — desenvolvido para treinar a habilidade de estar plenamente no agora. Ele tira quem o pratica do futuro (ansiedade), do passado (culpa, distração) e do automático (resposta mecânica).",
  },
  {
    nome: "Audiência™ — ICAS",
    definicao:
      "Como uma mensagem realmente chega até quem ouve. Audiência™ organiza quatro elementos — Imaginação, Cotidiano, Adaptação e Storytelling — que determinam se uma comunicação apenas informa ou verdadeiramente conecta.",
  },
  {
    nome: "fasR™",
    definicao:
      "Produção contínua de conteúdo. Muita gente carrega dentro de si mais clareza e mais história do que consegue colocar para fora com regularidade. O fasR™ existe para reduzir essa distância — não como fórmula de produtividade, mas como estrutura que sustenta a produção de conteúdo ao longo do tempo, sem depender apenas de inspiração pontual.",
  },
  {
    nome: "ORAL-GM™",
    definicao:
      "Transformar fala em obra. ORAL-GM™ existe para quem carrega conhecimento na voz, não no teclado — um caminho estruturado que parte da escuta de áudios longos até a produção de livros, materiais didáticos e documentação de método, sem exigir que o conhecimento passe primeiro pela escrita.",
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
