import { useTema } from "@/data/contexts/TemaContext";
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from "react-native";

export default function BotaoTemaCabecalho() {
    const { modoTema, tema, alternarTema } = useTema();

    return (
        <Pressable onPress={alternarTema} style={{ marginRight: 18 }}>
            <Ionicons
                name={modoTema === "escuro" ? "sunny-outline" : "moon-outline"}
                size={28}
                color={tema.iconeNavegacao}
            />
        </Pressable>
    );
}
