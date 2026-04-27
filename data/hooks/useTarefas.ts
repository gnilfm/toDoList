import Id from "@/data/model/Id";
import Tarefa from "@/data/model/Tarefa";
import { useEffect, useState } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useTarefas() {
    const [tarefa, setTarefa] = useState<Partial<Tarefa>>({});
    const [tarefas, setTarefas] = useState<Tarefa[]>([]);
    const { obterItem, alterarItem } = useLocalStorage();

    useEffect(() => {
        carregarTarefas();
    }, []);

    async function carregarTarefas() {
        const tarefasSalvas = await obterItem("tarefas");
        if (Array.isArray(tarefasSalvas)) setTarefas(tarefasSalvas);
    }

    function adicionarTarefa(tarefa: Partial<Tarefa>) {
        if (tarefa.descricao) {
            const novaTarefa: Tarefa = {
                id: Id.gerar(),
                descricao: tarefa.descricao,
                concluida: false,
            };
            alterarTarefas([...tarefas, novaTarefa]);
            setTarefa({});
        }
    }

    function excluirTarefa(tarefa: Tarefa) {
        alterarTarefas(tarefas.filter((t) => t.id !== tarefa.id));
    }

    function concluirTarefa(tarefa: Tarefa) {
        alterarTarefas(tarefas.map((t) => t.id === tarefa.id ? { ...t, concluida: !t.concluida } : t));
    }

    function alterarTarefas(tarefas: Tarefa[]) {
        setTarefas(tarefas);
        alterarItem("tarefas", tarefas);
    }


    return {
        tarefa,
        tarefas,
        adicionarTarefa,
        excluirTarefa,
        concluirTarefa,
        setTarefa
    }
}