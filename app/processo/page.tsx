"use client";

// Temperatura: COMPREENSÃO
// O visitante lê como se estivesse lendo um ensaio curto.
// Cada bloco responde apenas uma pergunta.
// Nunca mais do que isso.
// Nenhum elemento comercial. Nenhuma prova social. Nenhuma urgência.
// O silêncio faz parte da identidade da GM.

import Link from "next/link";
import { useEffect, useState } from "react";

const etapas = [
  {
    nome: "Discovery Playbook™",
    descricao: "A experiência de entrada. Reflexões que preparam a conversa.",
    ativa: true,
  },
  {
    nome: "Discovery Session™",
    descricao: "A conversa. Escuta e discernimento antes de qualquer estratégia.",
    ativa: true,
  },
  {
    nome: "Session Zero™",
    descricao: "Somente por convite, após alinhamento natural.",
    ativa: false,
  },
  {
    nome: "Programa Z.E.R.O.™",
    descricao: "A construção começa aqui.",
    ativa: false,
  },
  {
    nome: "Arquiteturas GM™ · Sócio GM™",
    descricao: "Relacionamento de longo prazo.",
    ativa: false,
  },
];

const principios = [
  "Não começamos por estratégias.",
  "O Discovery coleta sinais que o problema apresentado raramente revela.",
  "O maior valor está no discernimento — não nas ferramentas.",
];

export default function ProcessoPage() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisivel(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      style={{
        background: "#F5F3EE",
        minHeight: "100vh",
        opacity: visivel ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      {/* Header fixo mínimo */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 10,
          background: "#F5F3EE",
          borderBottom: "1px solid #E8E8E4",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/hall"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "15px",
            fontWeight: 400,
            color: "#1A1A1A",
            textDecoration: "none",
            letterSpacing: "-0.01em",
          }}
        >
          GM Discovery™
        </Link>

        <Link
          href="/jornada"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            color: "#6B6B6B",
            textDecoration: "none",
            letterSpacing: "0.04em",
            fontStyle: "italic",
          }}
        >
          Iniciar minha jornada →
        </Link>
      </header>

      {/* Conteúdo */}
      <main
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "64px 24px 96px",
        }}
      >

        {/* Bloco 01 — O que é */}
        <section style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "#C4C4C0",
              marginBottom: "20px",
            }}
          >
            01
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(20px, 5vw, 26px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.4,
              marginBottom: "16px",
            }}
          >
            O que é o GM Discovery
          </h2>
          <div
            style={{
              width: "28px",
              height: "1px",
              background: "#C4C4C0",
              marginBottom: "24px",
            }}
          />
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "#4A4A4A",
              lineHeight: 1.95,
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              A maioria das decisões importantes é tomada antes do
              discernimento necessário.
            </p>
            <p>
              O GM Discovery é um processo de escuta e mapeamento criado
              para reduzir esse risco — ajudando pessoas e organizações a
              enxergarem com mais clareza aquilo que existe dentro de si
              antes de definir o que construir.
            </p>
          </div>
        </section>

        {/* Bloco 02 — Como funciona */}
        <section style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "#C4C4C0",
              marginBottom: "20px",
            }}
          >
            02
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(20px, 5vw, 26px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.4,
              marginBottom: "32px",
            }}
          >
            Como funciona
          </h2>

          <div style={{ display: "flex", flexDirection: "column" }}>
            {etapas.map((etapa, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "20px",
                  paddingBottom: i < etapas.length - 1 ? "28px" : "0",
                  position: "relative",
                }}
              >
                {/* Linha vertical */}
                {i < etapas.length - 1 && (
                  <div
                    style={{
                      position: "absolute",
                      left: "3px",
                      top: "12px",
                      bottom: "0",
                      width: "1px",
                      background: "#E8E8E4",
                    }}
                  />
                )}

                {/* Ponto */}
                <div
                  style={{
                    minWidth: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    border: `1px solid ${etapa.ativa ? "#1A1A1A" : "#C4C4C0"}`,
                    background: "#F5F3EE",
                    marginTop: "4px",
                    position: "relative",
                    zIndex: 1,
                  }}
                />

                {/* Texto */}
                <div>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: etapa.ativa ? "#1A1A1A" : "#C4C4C0",
                      marginBottom: "4px",
                    }}
                  >
                    {etapa.nome}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      fontWeight: 300,
                      color: etapa.ativa ? "#6B6B6B" : "#C4C4C0",
                      lineHeight: 1.7,
                    }}
                  >
                    {etapa.descricao}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Bloco 03 — Como nasceu */}
        <section style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "#C4C4C0",
              marginBottom: "20px",
            }}
          >
            03
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(20px, 5vw, 26px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.4,
              marginBottom: "16px",
            }}
          >
            Como nasceu
          </h2>
          <div
            style={{
              width: "28px",
              height: "1px",
              background: "#C4C4C0",
              marginBottom: "24px",
            }}
          />
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "#4A4A4A",
              lineHeight: 1.95,
            }}
          >
            <p style={{ marginBottom: "20px" }}>
              Ao longo de anos trabalhando com empreendedores em setores
              completamente diferentes, percebi que o setor quase nunca
              fazia diferença.
            </p>
            <p style={{ marginBottom: "20px" }}>
              O que realmente mudava eram as pessoas.
            </p>
            <p style={{ marginBottom: "20px" }}>
              E, na maioria das vezes, o problema que uma pessoa
              apresentava não era o verdadeiro problema. Decisões
              importantes raramente produzem bons resultados quando são
              tomadas antes do discernimento.
            </p>
            <p style={{ marginBottom: "32px" }}>
              Foi tentando compreender esses padrões que nasceu a GM.
            </p>
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "14px",
                fontStyle: "italic",
                color: "#6B6B6B",
              }}
            >
              Orlando Carvalho
            </p>
          </div>
        </section>

        {/* Bloco 04 — O que torna diferente */}
        <section style={{ marginBottom: "72px" }}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "#C4C4C0",
              marginBottom: "20px",
            }}
          >
            04
          </p>
          <h2
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(20px, 5vw, 26px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.4,
              marginBottom: "32px",
            }}
          >
            O que torna este processo diferente
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {principios.map((p, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  gap: "16px",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: "1px",
                    minWidth: "1px",
                    height: "100%",
                    minHeight: "44px",
                    background: "#C4C4C0",
                    marginTop: "2px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "15px",
                    fontWeight: 300,
                    color: "#2A2A2A",
                    lineHeight: 1.8,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bloco 05 — Convite */}
        <section
          style={{
            borderTop: "1px solid #E8E8E4",
            paddingTop: "56px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "#C4C4C0",
              marginBottom: "28px",
            }}
          >
            05
          </p>

          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(18px, 4vw, 22px)",
              fontWeight: 400,
              color: "#1A1A1A",
              lineHeight: 1.6,
              marginBottom: "12px",
            }}
          >
            Se fizer sentido para você,
          </p>

          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "15px",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#6B6B6B",
              lineHeight: 1.8,
              marginBottom: "40px",
            }}
          >
            a próxima etapa não é contratar a GM.
            <br />
            É iniciar sua jornada.
          </p>

          <Link
            href="/jornada"
            style={{
              display: "inline-block",
              padding: "13px 48px",
              background: "#1A1A1A",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "#F5F3EE",
              letterSpacing: "0.08em",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#333";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1A1A1A";
            }}
          >
            Iniciar minha jornada
          </Link>

          <div style={{ marginTop: "56px" }}>
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "#C4C4C0",
              }}
            >
              GM Discovery Experience™
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
