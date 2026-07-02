"use client";

// Temperatura: COMPREENSÃO
// Registros em primeira pessoa — nunca estrutura Desafio/Solução/Resultado,
// nunca depoimento entre aspas, nunca métrica de resultado, nunca nome ou
// dado que identifique alguém. Documenta processo e observação, não vende
// resultado (ver Institutional Implementation Brief, regra de Cadernos).

import { useState, useEffect } from "react";

interface Caderno {
  titulo: string;
  paragrafos: string[];
}

const cadernos: Caderno[] = [
  {
    titulo: "Quando o negócio é o disfarce",
    paragrafos: [
      "Às vezes a pergunta que chega até mim é sobre negócio. Mas o que precisa de discernimento é a vida inteira.",
      "Já sentei com alguém que mantinha onze frentes abertas ao mesmo tempo. Cada negócio novo parecia razão de orgulho. Na conversa, foi ficando claro que não era.",
      "Não era ambição. Era fuga.",
      "Cada frente nova era um jeito de não estar em casa. De não encarar o que estava rachando ali dentro. Expandir parecia crescimento, mas era o oposto: era a forma mais sofisticada de adiar.",
      "Não levou muito tempo de conversa para essa pessoa enxergar isso sozinha. Ninguém precisou convencer — só houve espaço pra ela ouvir o que já sabia e não tinha coragem de nomear.",
      "Descartou o que não sustentava mais. Ficou com o que realmente importava. Voltou pra casa.",
      "O que aprendi, de novo, é isto: quando alguém está fugindo de alguma coisa, o mundo dos negócios oferece esconderijos infinitos — cada um deles com aparência de propósito. Discernimento é o que separa crescimento de fuga disfarçada de crescimento.",
    ],
  },
  {
    titulo: "Estrutura, não roupa",
    paragrafos: [
      "Muita gente chega até mim já cansada de mentoria. Já pagou caro por isso antes, e o que recebeu foi opinião sobre a superfície — como se vestir, como falar, como aparecer melhor nas fotos.",
      "Uma pessoa me contou, há pouco tempo, sobre um processo assim: alguém parou na frente dela e comentou a roupa. Só isso. Nunca chegou perto do que realmente estava travando o negócio.",
      "Isso não é raro. É quase a regra.",
      "O motivo é simples: olhar para a estrutura dá trabalho. Exige entender os gargalos reais, ver onde a operação está rachada, nomear o que ninguém quis nomear antes. Olhar pra roupa é rápido, é confortável, e parece produtivo sem exigir nada de ninguém.",
      "Quando alguém sai de uma conversa comigo com tarefa na mão, ajuste de rota, e uma lista clara do que precisa mudar — não é porque eu inventei um método mais elaborado. É porque fui atrás do que estava embaixo, não do que aparecia primeiro.",
      "Discernimento raramente está na superfície. Está sempre uma camada abaixo de onde todo mundo já olhou.",
    ],
  },
  {
    titulo: "O bloqueio nunca foi a câmera",
    paragrafos: [
      "Uma empresária chegou até mim acreditando que precisava de coragem. Especificamente, coragem para gravar vídeos — achava que esse era o obstáculo entre ela e o que precisava comunicar ao mundo.",
      "Conversamos. Não sobre técnica de gravação, nem sobre medo de câmera. Conversamos sobre o que ela carregava dentro de si havia anos, sem organizar, sem nomear.",
      "Na madrugada seguinte, ela escreveu o livro inteiro.",
      "O bloqueio nunca foi a câmera. Era não saber, com clareza suficiente, o que precisava ser dito. Ninguém grava um vídeo travado por falta de coragem quando finalmente sabe exatamente o que quer dizer — a coragem aparece sozinha, como consequência, não como pré-requisito.",
      "Isso se repete com frequência maior do que se imagina: a pessoa nomeia o obstáculo errado, porque o obstáculo real ainda não tem nome. E o meu trabalho, na maior parte das vezes, começa exatamente aí — antes da técnica, antes da ferramenta, antes até da coragem.",
    ],
  },
  {
    titulo: "Frutos, não aparência",
    paragrafos: [
      "Ninguém escolhe um cirurgião vascular pela audiência nas redes sociais. Escolhe pelo histórico — quantas cirurgias, com que resultado, avaliado por quem entende de vascular, não por quem entende de engajamento.",
      "No mundo da consultoria e da mentoria, essa lógica costuma se inverter. Muita gente paga por acesso a quem tem visibilidade, fama, um nome conhecido — e só depois descobre que acesso não é o mesmo que direção. Confunde-se proximidade de uma pessoa importante com garantia de resultado.",
      "Já vi isso de perto: alguém pagar um valor alto só para \"estar dentro\" de um círculo, sem receber orientação nenhuma que sustente o próprio negócio a andar. O acesso, sozinho, não constrói nada. Direção constrói.",
      "O trabalho que realmente importa quase nunca é o mais visível. É o que produz fruto verificável — a estratégia que se sustenta, o negócio que se organiza, a pessoa que sai da conversa sabendo exatamente o próximo passo. Isso não aparece em número de seguidores.",
      "Se um dia eu tivesse que escolher entre ser conhecido ou ser eficaz, escolheria ser eficaz, sempre. Fama é o tipo de prova que convence quem não sabe o que está comprando. Fruto é o tipo de prova que convence quem já provou.",
    ],
  },
];

export default function CadernosPage() {
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
          Cadernos
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
          Registros de processo e observação — não estudos de caso, não
          resultados. Padrões que se repetem, vistos de perto, sem nomear
          ninguém.
        </p>
      </section>

      {/* Lista de cadernos */}
      <section style={{ display: "flex", flexDirection: "column", gap: "72px" }}>
        {cadernos.map((c, i) => (
          <article
            key={i}
            style={{
              borderTop: "1px solid #E8E8E4",
              paddingTop: "40px",
            }}
          >
            <h2
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "clamp(20px, 4vw, 25px)",
                fontWeight: 400,
                color: "#1A1A1A",
                marginBottom: "24px",
                lineHeight: 1.4,
              }}
            >
              {c.titulo}
            </h2>
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
              {c.paragrafos.map((p, j) => (
                <p key={j} style={{ marginBottom: "20px" }}>
                  {p}
                </p>
              ))}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
