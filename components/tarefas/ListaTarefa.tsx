
import Tarefa from "@/data/model/Tarefa";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export interface ListaTarefaProps {
    tarefas: Tarefa[];
    excluirTarefa: (tarefa: Tarefa) => void;
    concluirTarefa: (tarefa: Tarefa) => void;
}

export default function ListaTarefa(proops: ListaTarefaProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.textoTitulo}>Lista de Tarefas</Text>
            {proops.tarefas.map((tarefa, i) => (
                <View key={tarefa.id} style={[styles.tarefaItem, { borderRadius: 10, borderWidth: 1, borderColor: i % 2 === 0 ? "#7d7e7dff" : "#c7c3c3ff" }]}>
                    <Text style={[styles.textoSubTitulo,
                    { color: tarefa.concluida ? "#979c98ff" : "#b3c1ceff" },
                    { textDecorationLine: tarefa.concluida ? "line-through" : "none" }]}>{tarefa.descricao} </Text>
                    <View style={styles.icons}>
                        {tarefa.concluida ?
                            <Ionicons name="reload" size={24} color="#fc9e52ff" onPress={() => proops.concluirTarefa(tarefa)} />
                            : <Ionicons name="checkmark" size={24} color="#62a370ff" onPress={() => proops.concluirTarefa(tarefa)} />}
                        <Ionicons name="trash" size={24} color="#f57272ff" style={{ opacity: 0.6 }} onPress={() => proops.excluirTarefa?.(tarefa)} />
                    </View>
                </View>
            ))}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        gap: 10,
    },
    tarefaItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        paddingHorizontal: 10,
    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 20,
        padding: 10,
    },
    textoTitulo: {
        fontSize: 22,
        textAlign: "center",
        marginBottom: 10,
        color: "#F9FAFB",
    },
    textoSubTitulo: {
        textAlign: "center",
        fontSize: 20,
        color: "#F9FAFB",
    },
});