import { createContext, ReactNode, useContext, useState } from "react";

export type ModoVisualLista = "lista" | "blocos";

interface ListaContextProps {
    modoVisual: ModoVisualLista;
    alternarModoVisual: () => void;
}

const ListaContext = createContext<ListaContextProps | null>(null);

export function ListaProvider({ children }: { children: ReactNode }) {
    const [modoVisual, setModoVisual] = useState<ModoVisualLista>("lista");

    function alternarModoVisual() {
        setModoVisual((valorAtual) => valorAtual === "lista" ? "blocos" : "lista");
    }

    return (
        <ListaContext.Provider value={{ modoVisual, alternarModoVisual }}>
            {children}
        </ListaContext.Provider>
    );
}

export function useLista() {
    const context = useContext(ListaContext);

    if (!context) {
        throw new Error("useLista deve ser usado dentro de ListaProvider");
    }

    return context;
}
