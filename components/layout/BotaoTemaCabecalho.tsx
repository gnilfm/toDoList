import { useTema } from "@/data/contexts/TemaContext";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

export default function BotaoTemaCabecalho() {
    const { modoTema, tema, alternarTema } = useTema();

    return (
        <Pressable
            onPress={alternarTema}
            style={({ pressed }) => [
                styles.botao,
                { backgroundColor: tema.superficieElevada, borderColor: tema.borda, opacity: pressed ? 0.75 : 1 }
            ]}
        >
            <Ionicons
                name={modoTema === "escuro" ? "sunny-outline" : "moon-outline"}
                size={21}
                color={tema.iconeNavegacao}
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
        marginRight: 16,
        borderRadius: 8,
        borderWidth: 1,
    },
});
