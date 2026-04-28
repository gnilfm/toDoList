import BotaoListaCabecalho from "@/components/layout/BotaoListaCabecalho";
import BotaoTemaCabecalho from "@/components/layout/BotaoTemaCabecalho";
import { useTema } from "@/data/contexts/TemaContext";

export default function useHomeScreenOptions() {
    const { tema } = useTema();

    return {
        title: "Minhas tarefas",
        headerStyle: { backgroundColor: tema.fundo },
        headerTintColor: tema.texto,
        headerTitleStyle: { fontWeight: "700" as const },
        headerShadowVisible: false,
        headerShown: true,
        headerLeft: () => <BotaoListaCabecalho />,
        headerRight: () => <BotaoTemaCabecalho />,
    };
}
