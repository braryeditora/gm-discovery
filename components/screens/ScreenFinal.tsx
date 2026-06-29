"use client";

// Estado emocional esperado: ENCERRAMENTO E EXPECTATIVA
// A participante completou algo. Não um formulário — uma jornada interior.
// A tela deve transmitir encerramento digno de uma primeira etapa,
// e abrir, com leveza, a curiosidade para o que vem a seguir.
// Nenhum botão de compra. Nenhuma urgência. Apenas clareza e próximos passos.

import { useState } from "react";
import Button from "@/components/ui/Button";
import { Respostas } from "@/types/respostas";
import { copiarRespostas, baixarTxt, enviarWhatsApp, enviarEmail } from "@/lib/export";
import { limparRespostas } from "@/lib/storage";

interface Props {
  respostas: Respostas;
  onReiniciar: () => void;
}

export default function ScreenFinal({ respostas, onReiniciar }: Props) {
  const [copiado, setCopiado] = useState(false);
  const [confirmandoLimpar, setConfirmandoLimpar] = useState(false);
  const [email, setEmail] = useState("");
  const [emailVisivel, setEmailVisivel] = useState(false);

  const handleCopiar = async () => {
    try {
      await copiarRespostas(respostas);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2500);
    } catch {
      alert("Não foi possível copiar. Tente novamente.");
    }
  };

  const handleEmail = () => {
    if (!emailVisivel) {
      setEmailVisivel(true);
      return;
    }
    enviarEmail(respostas, email || undefined);
  };

  const handleLimpar = () => {
    if (!confirmandoLimpar) {
      setConfirmandoLimpar(true);
      return;
    }
    limparRespostas();
    onReiniciar();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20 animate-fadeUp">
      <div className="w-full max-w-sm text-center">

        {/* Marca */}
        <div className="mb-16">
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

        {/* Ícone de conclusão */}
        <div className="flex justify-center mb-10">
          <div
            style={{
              width: "48px",
              height: "48px",
              border: "1px solid #1A1A1A",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
              <path
                d="M1 8L7 14L19 1"
                stroke="#1A1A1A"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Título */}
        <h2
          className="mb-6"
          style={{
            fontFamily: "Playfair Display, serif",
            fontSize: "clamp(26px, 6vw, 34px)",
            fontWeight: 400,
            color: "#1A1A1A",
            lineHeight: 1.3,
          }}
        >
          Você concluiu o primeiro passo.
        </h2>

        {/* Linha */}
        <div
          className="mx-auto mb-10"
          style={{ width: "32px", height: "1px", background: "#C4C4C0" }}
        />

        {/* Texto */}
        <div
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "15px",
            fontWeight: 300,
            color: "#6B6B6B",
            lineHeight: 1.95,
          }}
          className="space-y-4 text-left"
        >
          <p>Talvez nem tudo esteja claro ainda.</p>
          <p>E está tudo bem.</p>
          <p>
            O objetivo desta experiência não era entregar respostas definitivas.
          </p>
          <p>
            Era ajudar você a começar a observar sua própria história com mais
            atenção.
          </p>
          <p>
            Na Discovery Session™, a GM vai ouvir o que você trouxe e ajudar
            você a enxergar padrões e possibilidades que talvez ainda estejam
            invisíveis.
          </p>
          <p className="pt-2">
            <strong style={{ fontWeight: 500, color: "#1A1A1A" }}>
              Sua próxima etapa não é comprar nada.
            </strong>
          </p>
          <p>Sua próxima etapa é conversar.</p>
        </div>

        {/* Divisor */}
        <div
          className="my-12"
          style={{ width: "100%", height: "1px", background: "#E8E8E4" }}
        />

        {/* Ações */}
        <div className="space-y-3">
          <Button onClick={handleCopiar} fullWidth>
            {copiado ? "Copiado ✓" : "Copiar minhas respostas"}
          </Button>

          <Button
            onClick={() => baixarTxt(respostas)}
            variante="secondary"
            fullWidth
          >
            Baixar respostas em .txt
          </Button>

          <Button
            onClick={() => enviarWhatsApp(respostas)}
            variante="secondary"
            fullWidth
          >
            Enviar pelo WhatsApp
          </Button>

          {/* Enviar por e-mail */}
          <div className="pt-1">
            {emailVisivel ? (
              <div className="space-y-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu e-mail (opcional)"
                  className="w-full bg-transparent border-b border-[#E8E8E4] pb-2 pt-1 text-center"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#1A1A1A",
                    outline: "none",
                  }}
                  autoFocus
                />
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "11px",
                    color: "#C4C4C0",
                    letterSpacing: "0.04em",
                  }}
                >
                  Uma cópia será enviada para você e para a GM.
                </p>
                <Button onClick={handleEmail} variante="secondary" fullWidth>
                  Confirmar envio por e-mail
                </Button>
                <button
                  onClick={() => setEmailVisivel(false)}
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "12px",
                    color: "#C4C4C0",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "4px",
                  }}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <Button onClick={handleEmail} variante="secondary" fullWidth>
                Enviar por e-mail
              </Button>
            )}
          </div>

          {/* Limpar */}
          <div className="pt-4">
            {!confirmandoLimpar ? (
              <button
                onClick={handleLimpar}
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
                Limpar respostas
              </button>
            ) : (
              <div className="space-y-2">
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#6B6B6B",
                  }}
                >
                  Tem certeza? Esta ação é irreversível.
                </p>
                <div className="flex gap-4 justify-center">
                  <button
                    onClick={handleLimpar}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#CC3333",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 8px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Sim, limpar
                  </button>
                  <button
                    onClick={() => setConfirmandoLimpar(false)}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "12px",
                      color: "#C4C4C0",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 8px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Rodapé */}
        <div className="mt-16">
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "11px",
              letterSpacing: "0.08em",
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
