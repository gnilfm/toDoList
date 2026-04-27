import Id from "@/data/model/Id";
import Tarefa from "@/data/model/Tarefa";

export default [
    {
        id: Id.gerar(),
        titulo: "Tarefa 1",
        descricao: "Estudar React",
        concluida: false,
    },
    {
        id: Id.gerar(),
        titulo: "Tarefa 2",
        descricao: "Estudar TypeScript",
        concluida: false,
    },
    {
        id: Id.gerar(),
        titulo: "Tarefa 3",
        descricao: "Estudar React Native",
        concluida: true,
    },
    {
        id: Id.gerar(),
        titulo: "Tarefa 4",
        descricao: "Estudar Java",
        concluida: true,
    },
    {
        id: Id.gerar(),
        titulo: "Tarefa 5",
        descricao: "Ler livros",
        concluida: false,
    },
] as Tarefa[];