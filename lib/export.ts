import { Respostas } from "@/types/respostas";

const PERGUNTAS = [
  "Quem é você antes do trabalho, das redes sociais e das expectativas dos outros?",
  "Quais foram os três momentos mais definidores da sua vida — para o bem ou para o mal — e o que cada um revelou sobre você?",
  "O que você aprendeu sofrendo que não aprenderia de nenhuma outra forma?",
  "Que transformação você já produziu na vida de alguém que considera uma das suas entregas mais genuínas?",
  "Qual injustiça, lacuna ou problema no mundo mais incomoda você?",
  "Que tipo de pessoa você gostaria de ajudar durante os próximos vinte anos?",
  "O que você sente que existe dentro de você, mas ainda não conseguiu organizar, nomear ou colocar para fora?",
  "O que você espera enxergar com mais clareza na nossa conversa?",
];

const DONS_LABELS: Record<string, string> = {
  fazBem: "O que eu sei fazer muito bem",
  ensina: "O que eu ensino ou explico com facilidade",
  pedemAjuda: "O que as pessoas sempre pedem ajuda para mim",
  resultados: "Resultados que já produzi na vida de outras pessoas",
  conhecimentos: "Conhecimentos que acumulei e talvez subestime",
  fariaSemRemuneracao: "O que eu faria mesmo sem remuneração",
};

export function formatarRespostas(respostas: Respostas): string {
  const data = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  let texto = "";
  texto += "GM DISCOVERY EXPERIENCE™\n";
  texto += `Data: ${data}\n`;
  texto += "─".repeat(50) + "\n\n";

  texto += "REFLEXÕES PESSOAIS\n\n";
  PERGUNTAS.forEach((pergunta, i) => {
    const resposta = respostas.perguntas[i + 1] || "(não respondida)";
    texto += `${i + 1}. ${pergunta}\n\n`;
    texto += `${resposta}\n\n`;
    texto += "─".repeat(30) + "\n\n";
  });

  texto += "SEUS DONS E SINAIS\n\n";
  Object.entries(respostas.dons).forEach(([key, valor]) => {
    const label = DONS_LABELS[key] || key;
    texto += `${label}:\n${valor || "(não preenchido)"}\n\n`;
  });

  texto += "─".repeat(50) + "\n\n";
  texto += "MISSÃO DOS TRÊS\n\n";
  respostas.missao.forEach((item, i) => {
    texto += `Pessoa ${i + 1}: ${item.pessoa || "(não preenchido)"}\n`;
    texto += `Qualidade mencionada: ${item.qualidade || "(não preenchido)"}\n`;
    texto += `O que isso revelou: ${item.revelou || "(não preenchido)"}\n\n`;
  });

  return texto;
}

export function copiarRespostas(respostas: Respostas): Promise<void> {
  const texto = formatarRespostas(respostas);
  return navigator.clipboard.writeText(texto);
}

export function baixarTxt(respostas: Respostas): void {
  const texto = formatarRespostas(respostas);
  const blob = new Blob([texto], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "GM_Discovery_Respostas.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function enviarWhatsApp(respostas: Respostas): void {
  const texto = formatarRespostas(respostas);
  const encoded = encodeURIComponent(texto);
  window.open(`https://wa.me/5521983461734?text=${encoded}`, "_blank");
}

export function enviarEmail(respostas: Respostas, emailParticipante?: string): void {
  const texto = formatarRespostas(respostas);
  const assunto = encodeURIComponent("GM Discovery Experience™ — Minhas respostas");
  const corpo = encodeURIComponent(texto);
  const para = "contato@braryeditora.com";
  const ccParam = emailParticipante
    ? `&cc=${encodeURIComponent(emailParticipante)}`
    : "";
  window.open(
    `mailto:${para}?subject=${assunto}${ccParam}&body=${corpo}`,
    "_blank"
  );
}
