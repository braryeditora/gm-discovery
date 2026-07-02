"use client";

// Temperatura: COMPREENSÃO
// Apenas mailto:. Sem formulário, sem campo de captura, sem WhatsApp
// (WhatsApp é canal da Jornada — imediatismo que não cabe aqui).
// Sem storage. Nada é salvo; o próprio navegador do visitante abre o
// cliente de e-mail dele (ver Institutional Implementation Brief, regra
// de Contato).

import { useState, useEffect } from "react";

const EMAIL = "contato@braryeditora.com";

export default function ContatoPage() {
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
      <section style={{ maxWidth: "480px" }}>
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
          Contato
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
            color: "#4A4A4A",
            lineHeight: 1.9,
            marginBottom: "40px",
          }}
        >
          Se quiser conversar, escreva.
        </p>

        <a
          href={`mailto:${EMAIL}`}
          style={{
            display: "inline-block",
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 400,
            color: "#1A1A1A",
            letterSpacing: "0.02em",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          {EMAIL}
        </a>
      </section>
    </div>
  );
}
