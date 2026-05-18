import { useLista } from "@/data/contexts/ListaContext";
import { useTema } from "@/data/contexts/TemaContext";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function BotaoListaCabecalho() {
    const { modoVisual, alternarModoVisual } = useLista();
    const { tema } = useTema();

    return (
        <Pressable
            onPress={alternarModoVisual}
            style={({ pressed }) => [
                styles.botao,
                { backgroundColor: tema.superficieElevada, borderColor: tema.borda, opacity: pressed ? 0.75 : 1 }
            ]}
        >
            <Ionicons
                name={modoVisual === "lista" ? "grid-outline" : "list"}
                size={22}
                color={tema.destaque}

            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    botao: {
        alignItems: "center",
        justifyContent: "center",
        width: 40,
        height: 40,
        marginLeft: 16,
        marginRight: 8,
        borderRadius: 8,
        borderWidth: 1,
    },
});
