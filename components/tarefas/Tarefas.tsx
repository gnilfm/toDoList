import { useLista } from "@/data/contexts/ListaContext";
import { useTema } from "@/data/contexts/TemaContext";
import useTarefas from "@/data/hooks/useTarefas";
import { StyleSheet, View } from "react-native";
import FormTarefa from "./FormTarefa";
import ListaTarefa from "./ListaTarefa";

export default function Tarefas() {
    const { modoVisual } = useLista();
    const { tema } = useTema();
    const {
        tarefa,
        tarefas,
        adicionarTarefa,
        excluirTarefa,
        concluirTarefa,
        alterarTarefa
    } = useTarefas();

    return (
        <View style={[styles.container, { backgroundColor: tema.fundo }]}>
            <View style={styles.conteudo}>
                <FormTarefa tarefa={tarefa} adicionarTarefa={adicionarTarefa} />
                <ListaTarefa
                    tarefas={tarefas}
                    excluirTarefa={excluirTarefa}
                    concluirTarefa={concluirTarefa}
                    alterarTarefa={alterarTarefa}
                    modoVisual={modoVisual}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "stretch",
        width: "100%",
        maxWidth: 760,
        gap: 18,
        paddingHorizontal: 18,
        paddingTop: 12,
        paddingBottom: 18,
    },
    conteudo: {
        flex: 1,
        gap: 16,
        minHeight: 0,
    },
});
