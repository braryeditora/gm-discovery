export type MissaoItem = {
  pessoa: string;
  qualidade: string;
  revelou: string;
};

export type Respostas = {
  perguntas: Record<number, string>;
  dons: {
    fazBem: string;
    ensina: string;
    pedemAjuda: string;
    resultados: string;
    conhecimentos: string;
    fariaSemRemuneracao: string;
  };
  missao: MissaoItem[];
};

export const respostasIniciais: Respostas = {
  perguntas: {},
  dons: {
    fazBem: "",
    ensina: "",
    pedemAjuda: "",
    resultados: "",
    conhecimentos: "",
    fariaSemRemuneracao: "",
  },
  missao: [
    { pessoa: "", qualidade: "", revelou: "" },
    { pessoa: "", qualidade: "", revelou: "" },
    { pessoa: "", qualidade: "", revelou: "" },
  ],
};
