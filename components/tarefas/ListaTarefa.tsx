
import { ModoVisualLista } from "@/data/contexts/ListaContext";
import { useTema } from "@/data/contexts/TemaContext";
import Tarefa from "@/data/model/Tarefa";
import { Ionicons } from "@expo/vector-icons";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

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
    const totalTarefas = proops.tarefas.length;
    const progresso = totalTarefas === 0 ? 0 : tarefasConcluidas / totalTarefas;

    return (
        <View style={styles.container}>
            <View style={[styles.cabecalho, { backgroundColor: tema.superficie, borderColor: tema.borda }]}>
                <View style={styles.tituloGrupo}>
                    <Text style={[styles.textoTitulo, { color: tema.texto }]}>Lista de tarefas</Text>
                    <Text style={[styles.textoResumo, { color: tema.textoSuave }]}>
                        {totalTarefas === 0 ? "Sem tarefas por enquanto" : `${tarefasConcluidas} de ${totalTarefas} concluidas`}
                    </Text>
                </View>
                <View style={[styles.contadorChip, { backgroundColor: tema.destaqueSuave }]}>
                    <Ionicons name="checkmark-done-outline" size={16} color={tema.destaque} />
                    <Text style={[styles.contador, { color: tema.destaque }]}>{tarefasConcluidas}/{totalTarefas}</Text>
                </View>
            </View>

            <View style={[styles.progresso, { backgroundColor: tema.borda }]}>
                <View style={[styles.progressoPreenchido, { backgroundColor: tema.acaoPrincipal, width: `${progresso * 100}%` }]} />
            </View>

            <ScrollView
                style={styles.rolagem}
                contentContainerStyle={[styles.lista, proops.modoVisual === "blocos" && styles.listaBlocos]}
                showsVerticalScrollIndicator={false}
            >
                {totalTarefas === 0 ? (
                    <View style={[styles.vazio, { backgroundColor: tema.superficie, borderColor: tema.borda }]}>
                        <View style={[styles.vazioIcone, { backgroundColor: tema.destaqueSuave }]}>
                            <Ionicons name="clipboard-outline" size={30} color={tema.destaque} />
                        </View>
                        <Text style={[styles.vazioTitulo, { color: tema.texto }]}>Sua lista esta limpa</Text>
                        <Text style={[styles.vazioTexto, { color: tema.textoSuave }]}>
                            Crie uma tarefa acima para comecar a organizar seu dia.
                        </Text>
                    </View>
                ) : null}

                {proops.tarefas.map((tarefa, i) => (
                    <View
                        key={tarefa.id}
                        style={[
                            styles.tarefaItem,
                            proops.modoVisual === "blocos" && styles.tarefaBloco,
                            {
                                backgroundColor: tema.superficie,
                                borderColor: tarefa.concluida ? tema.sucessoSuave : i % 2 === 0 ? tema.destaqueSuave : tema.borda
                            }
                        ]}
                    >
                        <View style={styles.tarefaConteudo}>
                            <Pressable
                                onPress={() => proops.concluirTarefa(tarefa)}
                                style={({ pressed }) => [
                                    styles.status,
                                    {
                                        opacity: pressed ? 0.75 : 1
                                    }
                                ]}
                            >
                                <Ionicons
                                    name={tarefa.concluida ? "checkmark-circle" : "ellipse-outline"}
                                    size={20}
                                    color={tarefa.concluida ? tema.iconeConcluir : tema.destaque}
                                />
                            </Pressable>
                            <Text style={[
                                styles.textoSubTitulo,
                                proops.modoVisual === "blocos" && styles.textoBloco,
                                { color: tarefa.concluida ? tema.tarefaConcluida : tema.texto },
                                { textDecorationLine: tarefa.concluida ? "line-through" : "none" }
                            ]}>
                                {tarefa.descricao}
                            </Text>
                        </View>
                        <View style={[styles.icons, proops.modoVisual === "blocos" && styles.iconsBloco]}>
                            {!tarefa.concluida ? (
                                <Pressable
                                    style={({ pressed }) => [
                                        styles.botaoIcone,
                                        { opacity: pressed ? 0.55 : 0.72 }
                                    ]}
                                    onPress={() => proops.alterarTarefa(tarefa)}
                                >
                                    <Ionicons name="create-outline" size={19} color={tema.textoSuave} />
                                </Pressable>
                            ) : null}
                            <Pressable
                                style={({ pressed }) => [
                                    styles.botaoIcone,
                                    { opacity: pressed ? 0.55 : 0.72 }
                                ]}
                                onPress={() => proops.excluirTarefa?.(tarefa)}
                            >
                                <Ionicons name="trash-outline" size={19} color={tema.textoSuave} />
                            </Pressable>
                        </View>
                    </View>
                ))}
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        gap: 10,
        minHeight: 0,
    },
    cabecalho: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        padding: 14,
        borderRadius: 8,
        borderWidth: 1,
    },
    tituloGrupo: {
        flex: 1,
        gap: 2,
    },
    textoResumo: {
        fontSize: 13,
        fontWeight: "600",
    },
    contadorChip: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
        minHeight: 34,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    progresso: {
        height: 7,
        overflow: "hidden",
        borderRadius: 999,
    },
    progressoPreenchido: {
        height: "100%",
        borderRadius: 999,
    },
    rolagem: {
        flex: 1,
    },
    lista: {
        gap: 12,
        paddingBottom: 36,
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
        minHeight: 66,
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 8,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 12,
        shadowOffset: { width: 0, height: 6 },
        elevation: 1,
    },
    tarefaBloco: {
        width: "48%",
        minHeight: 150,
        flexDirection: "column",
        alignItems: "stretch",
        justifyContent: "space-between",
        paddingVertical: 14,
    },
    tarefaConteudo: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
        minWidth: 0,
    },
    status: {
        width: 36,
        height: 36,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    icons: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: 6,
    },
    iconsBloco: {
        justifyContent: "flex-start",
        paddingTop: 8,
    },
    botaoIcone: {
        alignItems: "center",
        justifyContent: "center",
        width: 32,
        height: 32,
    },
    textoTitulo: {
        fontSize: 17,
        fontWeight: "800",
    },
    contador: {
        color: "#94A3B8",
        fontSize: 14,
        fontWeight: "700",
    },
    textoSubTitulo: {
        flex: 1,
        fontSize: 17,
        fontWeight: "700",
        lineHeight: 23,
    },
    textoBloco: {
        flex: 0,
        lineHeight: 24,
    },
    vazio: {
        alignItems: "center",
        gap: 8,
        paddingHorizontal: 22,
        paddingVertical: 34,
        borderRadius: 8,
        borderWidth: 1,
    },
    vazioIcone: {
        width: 58,
        height: 58,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 4,
    },
    vazioTitulo: {
        fontSize: 18,
        fontWeight: "800",
        textAlign: "center",
    },
    vazioTexto: {
        maxWidth: 280,
        fontSize: 14,
        fontWeight: "600",
        lineHeight: 20,
        textAlign: "center",
    },
});
