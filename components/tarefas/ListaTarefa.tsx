
import { ModoVisualLista } from "@/data/contexts/ListaContext";
import { useTema } from "@/data/contexts/TemaContext";
import Tarefa from "@/data/model/Tarefa";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

export interface ListaTarefaProps {
    tarefas: Tarefa[];
    excluirTarefa: (tarefa: Tarefa) => void;
    concluirTarefa: (tarefa: Tarefa) => void;
    alterarTarefa: (tarefa: Tarefa) => void;
    modoVisual: ModoVisualLista;
}

export default function ListaTarefa(proops: ListaTarefaProps) {
    const { tema } = useTema();
    const tarefasConcluidas = proops.tarefas.filter((tarefa) => tarefa.concluida).length;

    return (
        <View style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={[styles.textoTitulo, { color: tema.texto }]}>Lista de Tarefas</Text>
                <Text style={[styles.contador, { color: tema.textoSuave }]}>{tarefasConcluidas}/{proops.tarefas.length}</Text>
            </View>
            <View style={[styles.lista, proops.modoVisual === "blocos" && styles.listaBlocos]}>
                {proops.tarefas.map((tarefa, i) => (
                    <View
                        key={tarefa.id}
                        style={[
                            styles.tarefaItem,
                            proops.modoVisual === "blocos" && styles.tarefaBloco,
                            {
                                backgroundColor: tema.superficie,
                                borderColor: tarefa.concluida ? tema.borda : i % 2 === 0 ? tema.destaque : tema.borda
                            }
                        ]}
                    >
                        <Text style={[styles.textoSubTitulo,
                        proops.modoVisual === "blocos" && styles.textoBloco,
                        { color: tarefa.concluida ? tema.tarefaConcluida : tema.texto },
                        { textDecorationLine: tarefa.concluida ? "line-through" : "none" }]}>{tarefa.descricao}
                        </Text>
                        <View style={[styles.icons, proops.modoVisual === "blocos" && styles.iconsBloco]}>
                            {!tarefa.concluida ? (
                                <Pressable style={styles.botaoIcone} onPress={() => proops.alterarTarefa(tarefa)}>
                                    <Ionicons name="create-outline" size={22} color={tema.iconeEditar} />
                                </Pressable>
                            ) : null}
                            <Pressable style={styles.botaoIcone} onPress={() => proops.concluirTarefa(tarefa)}>
                                <Ionicons name={tarefa.concluida ? "refresh-outline" : "checkmark-outline"} size={22} color={tarefa.concluida ? tema.iconeEditar : tema.iconeConcluir} />
                            </Pressable>
                            <Pressable style={styles.botaoIcone} onPress={() => proops.excluirTarefa?.(tarefa)}>
                                <Ionicons name="trash-outline" size={22} color={tema.iconeExcluir} />
                            </Pressable>
                        </View>
                    </View>
                ))}
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        gap: 12,
    },
    cabecalho: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 2,
    },
    lista: {
        gap: 12,
    },
    listaBlocos: {
        flexDirection: "row",
        flexWrap: "wrap",
    },
    tarefaItem: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
        minHeight: 58,
        paddingHorizontal: 14,
        borderRadius: 8,
        borderWidth: 1,
    },
    tarefaBloco: {
        width: "48%",
        minHeight: 132,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-between",
        paddingVertical: 14,
    },
    icons: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 8,
    },
    iconsBloco: {
        justifyContent: "flex-start",
        paddingTop: 8,
    },
    botaoIcone: {
        alignItems: "center",
        justifyContent: "center",
        width: 36,
        height: 36,
    },
    textoTitulo: {
        fontSize: 22,
        fontWeight: "700",
    },
    contador: {
        color: "#94A3B8",
        fontSize: 14,
        fontWeight: "700",
    },
    textoSubTitulo: {
        flex: 1,
        fontSize: 20,
    },
    textoBloco: {
        flex: 0,
        lineHeight: 26,
    },
});
