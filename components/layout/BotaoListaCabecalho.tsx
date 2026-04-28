import { useLista } from "@/data/contexts/ListaContext";
import { useTema } from "@/data/contexts/TemaContext";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function BotaoListaCabecalho() {
    const { modoVisual, alternarModoVisual } = useLista();
    const { tema } = useTema();

    return (
        <Pressable onPress={alternarModoVisual} style={{ marginLeft: 18 }}>
            <Ionicons
                name={modoVisual === "lista" ? "grid-outline" : "list"}
                size={34}
                color={tema.iconeNavegacao}
            />
        </Pressable>
    );
}
