import { Respostas, respostasIniciais } from "@/types/respostas";

const CHAVE = "gm_discovery_val";

export function salvarRespostas(respostas: Respostas): void {
  try {
    localStorage.setItem(CHAVE, JSON.stringify(respostas));
  } catch {
    // silencioso
  }
}

export function carregarRespostas(): Respostas {
  try {
    const raw = localStorage.getItem(CHAVE);
    if (!raw) return respostasIniciais;
    return { ...respostasIniciais, ...JSON.parse(raw) };
  } catch {
    return respostasIniciais;
  }
}

export function limparRespostas(): void {
  try {
    localStorage.removeItem(CHAVE);
  } catch {
    // silencioso
  }
}

export function salvarTela(tela: number): void {
  try {
    localStorage.setItem("gm_discovery_tela", String(tela));
  } catch {
    // silencioso
  }
}

export function carregarTela(): number {
  try {
    const t = localStorage.getItem("gm_discovery_tela");
    return t ? parseInt(t, 10) : 0;
  } catch {
    return 0;
  }
}
