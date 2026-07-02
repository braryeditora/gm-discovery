"use client";

// Temperatura: COMPREENSÃO → CONVITE (único CTA no fim natural)
// Header e navegação já vêm de app/institucional/layout.tsx.
// Não adicionada ao menu — teto de 5 itens preservado (ver Institutional
// Implementation Brief). Acessível por URL direta e links contextuais.

import { useState, useEffect } from "react";
import Link from "next/link";

export default function DiscoverySessionPage() {
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
      {/* Hero */}
      <section style={{ marginBottom: "72px" }}>
        <h1
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(28px, 6vw, 38px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.3,
            marginBottom: "20px",
          }}
        >
          GM Discovery Session™
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
            maxWidth: "600px",
            marginBottom: "28px",
          }}
        >
          Uma experiência estruturada de discernimento para pessoas e
          organizações que precisam compreender o que realmente deve ser
          construído antes de avançar.
        </p>
        <p
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "17px",
            fontStyle: "italic",
            color: "#1A1A1A",
            lineHeight: 1.7,
            marginBottom: "24px",
          }}
        >
          Toda construção importante começa com uma interpretação correta
          da realidade.
        </p>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            letterSpacing: "0.06em",
            color: "#6B6B6B",
          }}
        >
          Sessão individual, por videochamada — 90 minutos.
        </p>
      </section>

      {/* 01 — O problema */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>01</p>
        <h2 style={blockTitle}>O problema</h2>
        <div style={blockBody}>
          <p style={{ marginBottom: "20px" }}>
            A maioria das pessoas e organizações que chegam até aqui não
            sofrem por falta de capacidade, ideias ou oportunidade.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Sofrem porque estão construindo a partir de uma interpretação
            incompleta — ou equivocada — da própria realidade.
          </p>
          <p>
            Há energia sendo investida. Há decisões sendo tomadas. Há um
            desejo real de construir algo que importe. Mas a leitura do
            problema pode estar errada — e quando a interpretação está
            errada, toda construção que vem depois carrega esse erro
            adiante.
          </p>
        </div>
      </section>

      {/* 02 — O que é */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>02</p>
        <h2 style={blockTitle}>O que é a GM Discovery Session™</h2>
        <div style={blockBody}>
          <p style={{ marginBottom: "20px" }}>
            Uma sessão estruturada de discernimento estratégico que
            verifica a interpretação atual de uma pessoa, negócio ou
            organização — antes da construção de qualquer estratégia,
            produto, posicionamento ou arquitetura de crescimento.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Não substitui uma implementação. Antecede a implementação.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Contratar execução — consultoria, marketing, uma nova
            estratégia — antes de verificar a interpretação em que ela se
            apoia tem um risco silencioso: o custo de construir na
            direção errada é quase sempre maior do que o custo de
            verificar a direção antes. A Discovery Session existe para
            que esse investimento seguinte, seja ele qual for, comece
            sobre uma leitura já corrigida.
          </p>
          <p>Existe para responder:</p>
          <ul style={{ listStyle: "none", padding: 0, marginTop: "12px" }}>
            {[
              "O que realmente está acontecendo aqui?",
              "Qual é o problema certo?",
              "O que não deve ser construído agora?",
              "Qual decisão merece ser tomada depois desta leitura?",
            ].map((q, i) => (
              <li
                key={i}
                style={{
                  fontFamily: "Playfair Display, serif",
                  fontStyle: "italic",
                  fontSize: "15px",
                  color: "#2A2A2A",
                  marginBottom: "8px",
                }}
              >
                {q}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 03 — O que você compra */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>03</p>
        <h2 style={blockTitle}>O que você compra</h2>
        <div style={blockBody}>
          <p style={{ marginBottom: "20px" }}>
            Não horas. Não uma conversa informal. Não uma mentoria, um
            plano completo ou um pacote de execução.
          </p>
          <p style={{ marginBottom: "20px" }}>
            Você compra escuta estruturada, leitura de padrões, síntese
            estratégica, interpretação corrigida da realidade, clareza
            sobre o que deve — ou não — avançar agora.
          </p>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              color: "#1A1A1A",
            }}
          >
            O produto não é a resposta rápida. É a leitura que permite que
            a próxima decisão seja tomada com mais verdade.
          </p>
        </div>
      </section>

      {/* 04 — O que acontece */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>04</p>
        <h2 style={blockTitle}>O que acontece na experiência</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {[
            ["Escuta estruturada", "A GM ouve a história, o contexto, as tensões, os desejos e as decisões em aberto."],
            ["Leitura de padrões", "Identificação de repetições, incoerências, forças, riscos e sinais estruturais."],
            ["Síntese de discernimento", "O que estava disperso é organizado, e o problema é nomeado com mais precisão."],
            ["Arquitetura preliminar", "O tipo de construção que faria sentido agora — ou o que ainda não deve ser construído."],
          ].map(([titulo, texto], i) => (
            <div key={i} style={{ display: "flex", gap: "16px" }}>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "13px",
                  color: "#C4C4C0",
                  minWidth: "16px",
                }}
              >
                {i + 1}
              </p>
              <div>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 400,
                    color: "#1A1A1A",
                    marginBottom: "4px",
                  }}
                >
                  {titulo}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#4A4A4A",
                    lineHeight: 1.8,
                  }}
                >
                  {texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 05 — O que você recebe */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>05</p>
        <h2 style={blockTitle}>O que você recebe</h2>
        <div style={blockBody}>
          <p style={{ marginBottom: "20px" }}>
            Uma síntese estratégica com leitura do contexto, problema
            estrutural identificado, principais padrões observados,
            riscos de construção prematura, prioridades de discernimento
            e próximos caminhos possíveis.
          </p>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              color: "#1A1A1A",
            }}
          >
            O entregável mais profundo é uma interpretação corrigida da
            realidade — o resto nasce dela.
          </p>
        </div>
      </section>

      {/* 06 — Para quem é */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>06</p>
        <h2 style={blockTitle}>Para quem é</h2>
        <div style={blockBody}>
          <p style={{ marginBottom: "20px" }}>
            Empresários, especialistas, fundadores, líderes e
            organizações — pessoas com trajetória, conhecimento ou
            negócio em operação, que sentem que há algo relevante a
            construir, mas ainda não sabem qual deve ser o próximo
            movimento.
          </p>
          <p>
            Também para quem está diante de decisões importantes e não
            quer construir por ansiedade.
          </p>
        </div>
      </section>

      {/* 07 — Para quem não é */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>07</p>
        <h2 style={blockTitle}>Para quem não é</h2>
        <div style={blockBody}>
          <p style={{ marginBottom: "20px" }}>
            Não é para quem busca respostas rápidas, quer apenas validação
            de uma decisão já tomada, procura fórmula pronta, deseja
            terceirizar responsabilidade, ou quer apenas marketing,
            campanha ou execução.
          </p>
          <p>
            Também não é para quem não está disposto a rever a própria
            interpretação da realidade, ou espera promessa de resultado
            imediato.
          </p>
        </div>
      </section>

      {/* 08 — O que não está incluído */}
      <section style={{ marginBottom: "64px" }}>
        <p style={numLabel}>08</p>
        <h2 style={blockTitle}>O que não está incluído</h2>
        <div style={blockBody}>
          <p style={{ marginBottom: "20px" }}>
            Implementação, acompanhamento contínuo, plano de marketing
            completo, branding completo, construção de funil, execução de
            conteúdo, gestão de tráfego, desenvolvimento de site,
            mentoria recorrente ou suporte mensal.
          </p>
          <p
            style={{
              fontFamily: "Playfair Display, serif",
              fontStyle: "italic",
              color: "#1A1A1A",
              marginBottom: "20px",
            }}
          >
            A Discovery Session encerra uma entrega completa. Qualquer
            relação posterior nasce de uma nova decisão, nunca de uma
            continuidade obrigatória.
          </p>
          <p>
            Você pode contratar apenas a Discovery Session, ponto final —
            e sair dela com uma entrega completa, sem qualquer expectativa
            implícita de continuar.
          </p>
        </div>
      </section>

      {/* 09 — Desdobramentos */}
      <section style={{ marginBottom: "72px" }}>
        <p style={numLabel}>09</p>
        <h2 style={blockTitle}>Possíveis desdobramentos</h2>
        <div style={blockBody}>
          <p>
            Arquitetura estratégica, desenvolvimento de framework,
            posicionamento, organização de produtos, construção de ativos
            intelectuais, uma experiência GM mais longa — ou a decisão
            consciente de não avançar agora. Nenhum caminho é assumido de
            antemão.
          </p>
        </div>
      </section>

      {/* Fechamento — único CTA da página */}
      <section
        style={{
          borderTop: "1px solid #E8E8E4",
          paddingTop: "56px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(18px, 4vw, 22px)",
            fontStyle: "italic",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.6,
            marginBottom: "40px",
          }}
        >
          Antes de construir mais, talvez seja necessário enxergar
          melhor.
        </p>
        <Link
          href="/institucional/contato"
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
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#333";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.background = "#1A1A1A";
          }}
        >
          Solicitar uma Discovery Session
        </Link>
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "12px",
            color: "#6B6B6B",
            marginTop: "20px",
          }}
        >
          R$ 5.000 · Sessão individual, 90 minutos
        </p>
      </section>
    </div>
  );
}

const numLabel: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "10px",
  letterSpacing: "0.16em",
  color: "#C4C4C0",
  marginBottom: "16px",
};

const blockTitle: React.CSSProperties = {
  fontFamily: "Playfair Display, serif",
  fontSize: "clamp(19px, 4vw, 23px)",
  fontWeight: 400,
  color: "#1A1A1A",
  lineHeight: 1.4,
  marginBottom: "20px",
};

const blockBody: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: "15px",
  fontWeight: 300,
  color: "#4A4A4A",
  lineHeight: 1.9,
  maxWidth: "620px",
};
