"use client";

// Temperatura: RECEPÇÃO
// O visitante chega e entende onde está.
// A tela responde uma única pergunta: "Onde estou?"
// Nada mais. Nenhuma explicação. Nenhuma venda.
// A decisão acontece naturalmente.

import Link from "next/link";
import { useEffect, useState } from "react";

export default function HallPage() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisivel(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        background: "#F5F3EE",
        opacity: visivel ? 1 : 0,
        transition: "opacity 0.8s ease",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "360px",
          textAlign: "center",
        }}
      >
        {/* Nome da experiência */}
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(28px, 7vw, 40px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.2,
            letterSpacing: "-0.01em",
            marginBottom: "16px",
          }}
        >
          GM Discovery™
        </h1>

        {/* Linha divisória */}
        <div
          style={{
            width: "28px",
            height: "1px",
            background: "#C4C4C0",
            margin: "0 auto 36px",
          }}
        />

        {/* Frase de posicionamento */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#6B6B6B",
            lineHeight: 1.9,
            marginBottom: "48px",
          }}
        >
          Arquitetura de discernimento para pessoas e organizações
          que desejam construir com mais clareza.
        </p>

        {/* Dois botões empilhados */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
          }}
        >
          {/* Secundário — Conhecer a GM (antes: Conhecer o processo → /processo) */}
          <Link
            href="/institucional"
            style={{
              display: "block",
              padding: "13px 24px",
              border: "1px solid #1A1A1A",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "#1A1A1A",
              letterSpacing: "0.08em",
              textDecoration: "none",
              textAlign: "center",
              transition: "background 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1A1A1A";
              (e.currentTarget as HTMLAnchorElement).style.color = "#F5F3EE";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              (e.currentTarget as HTMLAnchorElement).style.color = "#1A1A1A";
            }}
          >
            Conhecer a GM
          </Link>

          {/* Primário — Iniciar minha jornada (inalterado) */}
          <Link
            href="/jornada"
            style={{
              display: "block",
              padding: "13px 24px",
              background: "#1A1A1A",
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              color: "#F5F3EE",
              letterSpacing: "0.08em",
              textDecoration: "none",
              textAlign: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#333";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#1A1A1A";
            }}
          >
            Iniciar minha jornada
          </Link>
        </div>

        {/* Rodapé */}
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
      </div>
    </div>
  );
}
