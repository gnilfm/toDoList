import { createContext, ReactNode, useContext, useState } from "react";

export type ModoTema = "claro" | "escuro";

const temas = {
    claro: {
        fundo: "#F3F6FB",
        fundoDestaque: "#EAF2FF",
        superficie: "#FFFFFF",
        superficieElevada: "#F8FAFC",
        campo: "#F1F5F9",
        texto: "#101828",
        textoSuave: "#64748B",
        placeholder: "#94A3B8",
        borda: "#E2E8F0",
        destaque: "#2563EB",
        destaqueSuave: "#DBEAFE",
        acaoPrincipal: "#0F766E",
        icone: "#526070",
        iconeNavegacao: "#0F172A",
        iconeEditar: "#D97706",
        iconeConcluir: "#16A34A",
        iconeExcluir: "#DC2626",
        tarefaConcluida: "#98A2B3",
        sucessoSuave: "#DCFCE7",
        perigoSuave: "#FEE2E2",
        sombra: "#0F172A",
    },
    escuro: {
        fundo: "#0B1120",
        fundoDestaque: "#111C35",
        superficie: "#111827",
        superficieElevada: "#172033",
        campo: "#0F172A",
        texto: "#F8FAFC",
        textoSuave: "#94A3B8",
        placeholder: "#64748B",
        borda: "#273449",
        destaque: "#60A5FA",
        destaqueSuave: "#17365F",
        acaoPrincipal: "#14B8A6",
        icone: "#C7D0DA",
        iconeNavegacao: "#F3F6FA",
        iconeEditar: "#F2B84B",
        iconeConcluir: "#4ADE80",
        iconeExcluir: "#F87171",
        tarefaConcluida: "#788596",
        sucessoSuave: "#123524",
        perigoSuave: "#3B161C",
        sombra: "#000000",
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
