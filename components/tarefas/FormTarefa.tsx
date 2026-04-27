import Tarefa from "@/data/model/Tarefa";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

export interface FormTarefaProps {
    tarefa: Partial<Tarefa>;
    adicionarTarefa: (tarefa: Partial<Tarefa>) => void;
}

export default function FormTarefa(proops: FormTarefaProps) {
    const [descricao, setDescricao] = useState<string>(proops.tarefa.descricao ?? "");

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Digite a descrição da tarefa"
                placeholderTextColor="#ffffffff"
                value={descricao}
                onChangeText={setDescricao}
                style={[styles.textInput, { opacity: 0.5 }]}
            />
            <Pressable
                onPress={() => {
                    proops.adicionarTarefa({
                        ...proops.tarefa,
                        descricao
                    });
                    setDescricao("");
                }}
                style={styles.pressable}
            >
                <Ionicons name="add" size={24} color="#ffffffff" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10,
        gap: 20,
        width: 400,
    },
    texto: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#F9FAFB",
    },
    pressable: {
        padding: 10,
        borderWidth: 3,
        borderColor: "#2bad2bff",
        borderRadius: 10,
        gap: 10,
        backgroundColor: "#23dd23ff",
    },
    textInput: {
        flex: 1,
        fontSize: 18,
        color: "#ffffffff",
        borderBottomWidth: 1,
        borderColor: "#ffffffff",
    },
});