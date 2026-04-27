import { StyleSheet, View, Text, Pressable } from "react-native";
import ListaTarefa from "./ListaTarefa";
import FormTarefa from "./FormTarefa";
import useTarefas from "@/data/hooks/useTarefas";

export default function Tarefas() {
    const {
        tarefa,
        tarefas,
        adicionarTarefa,
        excluirTarefa,
        concluirTarefa,
    } = useTarefas();

    return (
        <View style={styles.container}>
            <FormTarefa tarefa={tarefa} adicionarTarefa={adicionarTarefa} />
            <ListaTarefa
                tarefas={tarefas}
                excluirTarefa={excluirTarefa}
                concluirTarefa={concluirTarefa}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        gap: 30,
        padding: 10,
        backgroundColor: "#02265fff",
    },
    texto: {
        fontSize: 20,
        color: "#F9FAFB",
    },
});