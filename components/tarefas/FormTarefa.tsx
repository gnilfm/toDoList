import { useTema } from "@/data/contexts/TemaContext";
import Tarefa from "@/data/model/Tarefa";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export interface FormTarefaProps {
    tarefa: Partial<Tarefa>;
    adicionarTarefa: (tarefa: Partial<Tarefa>) => void;
}

export default function FormTarefa(proops: FormTarefaProps) {
    const { tema } = useTema();
    const [descricao, setDescricao] = useState<string>(proops.tarefa.descricao ?? "");

    useEffect(() => {
        setDescricao(proops.tarefa.descricao ?? "");
    }, [proops.tarefa]);

    return (
        <View style={[styles.container, { backgroundColor: tema.superficie }]}>
            <TextInput
                placeholder="Digite a descricao da tarefa"
                placeholderTextColor={tema.textoSuave}
                value={descricao}
                onChangeText={setDescricao}
                style={[styles.textInput, { backgroundColor: tema.campo, color: tema.texto }]}
            />
            <Pressable
                onPress={() => {
                    proops.adicionarTarefa({
                        ...proops.tarefa,
                        descricao
                    });
                    setDescricao("");
                }}
                style={[styles.pressable, { backgroundColor: tema.acaoPrincipal }]}
            >
                <Ionicons name={proops.tarefa.id ? "save" : "add"} size={24} color="#F8FAFC" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
        width: "100%",
        padding: 12,
        borderRadius: 8,
    },
    pressable: {
        alignItems: "center",
        justifyContent: "center",
        width: 46,
        height: 46,
        borderRadius: 8,
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: "#F8FAFC",
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
    },
});
