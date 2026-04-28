import { createContext, ReactNode, useContext, useState } from "react";

export type ModoTema = "claro" | "escuro";

const temas = {
    claro: {
        fundo: "#F6F8FB",
        superficie: "#FFFFFF",
        campo: "#EEF4F8",
        texto: "#111827",
        textoSuave: "#667085",
        borda: "#D7DEE8",
        destaque: "#2F80ED",
        acaoPrincipal: "#14B8A6",
        icone: "#526070",
        iconeNavegacao: "#1F2937",
        iconeEditar: "#B7791F",
        iconeConcluir: "#159947",
        iconeExcluir: "#D64545",
        tarefaConcluida: "#98A2B3",
    },
    escuro: {
        fundo: "#101418",
        superficie: "#1B222A",
        campo: "#111820",
        texto: "#F3F6FA",
        textoSuave: "#9AA7B6",
        borda: "#2F3A46",
        destaque: "#5B8DEF",
        acaoPrincipal: "#2DD4BF",
        icone: "#C7D0DA",
        iconeNavegacao: "#F3F6FA",
        iconeEditar: "#F2B84B",
        iconeConcluir: "#4ADE80",
        iconeExcluir: "#F87171",
        tarefaConcluida: "#788596",
    },
};

interface TemaContextProps {
    modoTema: ModoTema;
    tema: typeof temas.claro;
    alternarTema: () => void;
}

const TemaContext = createContext<TemaContextProps | null>(null);

export function TemaProvider({ children }: { children: ReactNode }) {
    const [modoTema, setModoTema] = useState<ModoTema>("escuro");

    function alternarTema() {
        setModoTema((valorAtual) => valorAtual === "escuro" ? "claro" : "escuro");
    }

    return (
        <TemaContext.Provider value={{ modoTema, tema: temas[modoTema], alternarTema }}>
            {children}
        </TemaContext.Provider>
    );
}

export function useTema() {
    const context = useContext(TemaContext);

    if (!context) {
        throw new Error("useTema deve ser usado dentro de TemaProvider");
    }

    return context;
}
