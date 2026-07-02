"use client";

// Temperatura: PRESENÇA → COMPREENSÃO
// Raiz do ambiente institucional. Header e navegação já vêm de
// app/institucional/layout.tsx — esta página não cria header próprio.
// Um único CTA, no fim, convidando a aprofundar — não a converter.

import { useState, useEffect } from "react";
import Link from "next/link";

export default function SobrePage() {
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
      {/* Abertura — nome e frase de posicionamento */}
      <section style={{ marginBottom: "72px" }}>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(28px, 6vw, 40px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.3,
            marginBottom: "20px",
          }}
        >
          GM Discovery™
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
            maxWidth: "520px",
          }}
        >
          Arquitetura de discernimento para pessoas e organizações que
          desejam construir com mais clareza.
        </p>
      </section>

      {/* Corpo — o que a GM Discovery é */}
      <section style={{ marginBottom: "72px" }}>
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            color: "#4A4A4A",
            lineHeight: 1.95,
            maxWidth: "620px",
          }}
        >
          <p style={{ marginBottom: "20px" }}>
            A GM Discovery nasceu de um princípio simples, mas raramente
            praticado: discernimento antes da construção.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Trabalhamos com pessoas e organizações que já perceberam algo
            importante dentro de si, mas ainda não conseguiram organizar,
            nomear ou colocar isso para fora com clareza suficiente para
            agir.
          </p>
          <p>
            O que oferecemos não é um método de venda, nem uma promessa
            de resultado imediato. É um processo de escuta e mapeamento —
            estruturado, mas humano — que precede qualquer estratégia,
            qualquer construção, qualquer próximo passo.
          </p>
        </div>
      </section>

      {/* Princípio subordinado */}
      <section
        style={{
          marginBottom: "72px",
          borderLeft: "1px solid #C4C4C0",
          paddingLeft: "24px",
        }}
      >
        <p
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "18px",
            fontStyle: "italic",
            color: "#1A1A1A",
            lineHeight: 1.7,
          }}
        >
          Discernimento antes da construção.
        </p>
      </section>

      {/* Convite — único CTA da página, aprofunda em vez de converter */}
      <section
        style={{
          borderTop: "1px solid #E8E8E4",
          paddingTop: "48px",
        }}
      >
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "14px",
            fontWeight: 300,
            color: "#6B6B6B",
            marginBottom: "20px",
          }}
        >
          Se quiser entender como pensamos antes de qualquer outra coisa,
          comece por aqui.
        </p>
        <Link
          href="/institucional/como-pensamos"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "13px",
            fontWeight: 400,
            color: "#1A1A1A",
            letterSpacing: "0.04em",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }}
        >
          Como pensamos →
        </Link>
      </section>
    </div>
  );
}
