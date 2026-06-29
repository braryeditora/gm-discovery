"use client";

// Estado emocional esperado: ABERTURA E CONFIANÇA
// A participante lê a história de Orlando e começa a perceber que não está
// diante de uma metodologia — está diante de uma pessoa.
// O ritmo lento do texto, os parágrafos curtos, o espaço em branco:
// tudo convida à leitura contemplativa, não à varredura rápida.

import Button from "@/components/ui/Button";

interface Props {
  onNext: () => void;
  onBack: () => void;
}

export default function ScreenCarta({ onNext, onBack }: Props) {
  return (
    <div className="min-h-screen flex flex-col items-center py-20 px-6 animate-fadeIn">

      {/* Container da carta — largura de leitura confortável */}
      <div className="w-full max-w-[600px]">

        {/* Marca discreta no topo */}
        <div className="mb-16 text-center">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "#C4C4C0",
            }}
          >
            GM™
          </span>
        </div>

        {/* Título da carta */}
        <h2
          className="mb-12"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(22px, 5vw, 28px)",
            fontWeight: 400,
            fontStyle: "italic",
            color: "#1A1A1A",
            lineHeight: 1.4,
          }}
        >
          Antes de começarmos...
        </h2>

        {/* Corpo da carta */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            color: "#2A2A2A",
            lineHeight: 2,
          }}
          className="space-y-6"
        >
          <p>
            Ao longo da minha vida tive a oportunidade de empreender em áreas
            completamente diferentes.
          </p>

          <p>
            Comecei muito cedo, trabalhando com meu pai. Depois vieram a
            metalurgia, a indústria naval, experiências internacionais, empresas,
            livros, mentorias e o privilégio de aprender com grandes professores,
            empreendedores e líderes.
          </p>

          <p>Olhando para trás, percebo que o setor quase nunca fazia diferença.</p>

          <p>O que realmente mudava eram as pessoas.</p>

          <p>
            Elas chegavam com pedidos diferentes. Algumas diziam que precisavam
            vender mais. Outras acreditavam que precisavam criar uma marca. Algumas
            queriam lançar novos produtos. Outras apenas diziam:
          </p>

          {/* Citação em destaque */}
          <blockquote
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(17px, 4vw, 19px)",
              fontStyle: "italic",
              color: "#1A1A1A",
              lineHeight: 1.7,
              borderLeft: "1px solid #C4C4C0",
              paddingLeft: "24px",
              margin: "32px 0",
            }}
          >
            "Eu sei que existe algo maior dentro de mim, mas não consigo
            organizar tudo isso."
          </blockquote>

          <p>
            Durante muito tempo pensei que meu trabalho era construir estratégias.
          </p>

          <p>Hoje percebo que meu trabalho sempre começou muito antes.</p>

          <p>
            Começava tentando enxergar aquilo que permanecia invisível para quem
            estava vivendo o problema.
          </p>

          <p>
            Lembro de uma empresária que chegou até mim acreditando que precisava
            encontrar coragem para gravar vídeos. Depois das nossas conversas, ela
            escreveu o livro que carregava dentro de si em uma única madrugada.
            Naquele momento percebi que o verdadeiro bloqueio nunca foi a escrita.
          </p>

          <p>
            Outra empresária me procurou depois de investir muito em marketing.
            Ela acreditava que precisava vender mais. Ao conhecermos sua história,
            ficou claro que o desafio não era marketing. Era organizar a empresa.
            Era governar o crescimento. Era construir uma estrutura capaz de
            sustentar tudo aquilo que ela já havia criado.
          </p>

          <p>
            Também me recordo de uma empreendedora que chegou dizendo algo que
            nunca esqueci.
          </p>

          <p>
            Ela não pediu uma marca. Não pediu um funil. Não pediu novos produtos.
          </p>

          <p>Ela disse:</p>

          <blockquote
            style={{
              fontFamily: "Playfair Display, serif",
              fontSize: "clamp(17px, 4vw, 19px)",
              fontStyle: "italic",
              color: "#1A1A1A",
              lineHeight: 1.7,
              borderLeft: "1px solid #C4C4C0",
              paddingLeft: "24px",
              margin: "32px 0",
            }}
          >
            "Eu preciso de alguém que consiga colocar para fora aquilo que
            existe dentro de mim."
          </blockquote>

          <p>Essa frase permaneceu comigo.</p>

          <p>
            Porque percebi que ela descrevia algo que acontece com muito mais
            pessoas do que imaginamos.
          </p>

          <p>
            Ao longo dos anos fui entendendo que, na maioria das vezes, o problema
            que uma pessoa apresenta não é o verdadeiro problema. E decisões
            importantes raramente produzem bons resultados quando são tomadas antes
            do discernimento.
          </p>

          <p>Foi dessa percepção que nasceu a GM.</p>

          <p>E esta experiência é o primeiro passo dessa jornada.</p>

          <p>
            Ela não foi criada para dizer quem você deve ser. Também não foi criada
            para oferecer respostas prontas. Foi criada para ajudá-la a observar
            sua própria história com mais clareza.
          </p>

          <p>
            Talvez, durante as próximas páginas, você encontre perguntas que nunca
            tenha respondido. Talvez perceba conexões que sempre estiveram diante
            de você, mas ainda não haviam recebido nome.
          </p>

          <p>Não tenha pressa.</p>

          <p>
            Esta não é uma avaliação. Também não é um formulário. É apenas o
            início de uma conversa.
          </p>

          <p>
            Se, ao final desta experiência, você enxergar um pouco mais de clareza
            do que tinha quando começou, ela já terá cumprido sua missão.
          </p>

          {/* Assinatura */}
          <div className="pt-8 pb-4">
            <div
              style={{ width: "32px", height: "1px", background: "#C4C4C0", marginBottom: "24px" }}
            />
            <p
              style={{
                fontFamily: "Playfair Display, serif",
                fontSize: "15px",
                fontStyle: "italic",
                color: "#6B6B6B",
              }}
            >
              Seja muito bem-vinda.
            </p>
            <p
              className="mt-2"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#6B6B6B",
                letterSpacing: "0.04em",
              }}
            >
              Orlando Carvalho
            </p>
          </div>
        </div>

        {/* Navegação */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <Button onClick={onNext}>
            Continuar
          </Button>
          <button
            onClick={onBack}
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "12px",
              color: "#C4C4C0",
              letterSpacing: "0.06em",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            Voltar
          </button>
        </div>

        <div className="h-20" />
      </div>
    </div>
  );
}
