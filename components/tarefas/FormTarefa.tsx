import { useTema } from "@/data/contexts/TemaContext";
import Tarefa from "@/data/model/Tarefa";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

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

    const editando = Boolean(proops.tarefa.id);

    return (
        <View style={[styles.container, { backgroundColor: tema.superficie, borderColor: tema.borda }]}>
            <View style={styles.cabecalho}>
                <Text style={[styles.titulo, { color: tema.texto }]}>
                    {editando ? "Atualizar tarefa" : "Adicione a nova tarefa"}
                </Text>
            </View>

            <View style={styles.linha}>
                <View style={[styles.campoWrapper, { backgroundColor: tema.campo, borderColor: tema.borda }]}>
                    <Ionicons name="sparkles-outline" size={20} color={tema.destaque} />
                    <TextInput
                        placeholder="Digite a descricao da tarefa"
                        placeholderTextColor={tema.placeholder}
                        value={descricao}
                        onChangeText={setDescricao}
                        style={[styles.textInput, { color: tema.texto }]}
                    />
                </View>
                <Pressable
                    onPress={() => {
                        proops.adicionarTarefa({
                            ...proops.tarefa,
                            descricao
                        });
                        setDescricao("");
                    }}
                    style={({ pressed }) => [
                        styles.pressable,
                        {
                            backgroundColor: tema.destaqueSuave,
                            borderColor: tema.borda,
                            opacity: pressed ? 0.72 : 1
                        }
                    ]}
                >
                    <Ionicons name={editando ? "save-outline" : "add"} size={23} color={tema.destaque} />
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        gap: 12,
        padding: 14,
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.08,
        shadowRadius: 14,
        shadowOffset: { width: 0, height: 8 },
        elevation: 2,
    },
    cabecalho: {},
    titulo: {
        fontSize: 17,
        fontWeight: "800",
    },
    linha: {
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    campoWrapper: {
        flex: 1,
        minHeight: 50,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        paddingLeft: 12,
        borderRadius: 8,
        borderWidth: 1,
    },
    pressable: {
        alignItems: "center",
        justifyContent: "center",
        width: 50,
        height: 50,
        borderRadius: 8,
        borderWidth: 1,
    },
    textInput: {
        flex: 1,
        fontSize: 14,
        fontWeight: "600",
        paddingRight: 12,
        paddingVertical: 10,
    },
});
