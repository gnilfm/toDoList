import { ListaProvider, useLista } from "@/data/contexts/ListaContext";
import { TemaProvider, useTema } from "@/data/contexts/TemaContext";
import { Ionicons } from "@expo/vector-icons";
import { Stack } from "expo-router";
import { Pressable, View } from "react-native";

function BotaoLista() {
    const { modoVisual, alternarModoVisual } = useLista();
    const { tema } = useTema();

    return (
        <Pressable onPress={alternarModoVisual} style={{ marginLeft: 18 }}>
            <Ionicons
                name={modoVisual === "lista" ? "grid-outline" : "list"}
                size={34}
                color={tema.iconeNavegacao}
            />
        </Pressable>
    );
}

function BotaoTema() {
    const { modoTema, tema, alternarTema } = useTema();

    return (
        <Pressable onPress={alternarTema} style={{ marginRight: 18 }}>
            <Ionicons
                name={modoTema === "escuro" ? "sunny-outline" : "moon-outline"}
                size={28}
                color={tema.iconeNavegacao}
            />
        </Pressable>
    );
}

function AppStack() {
    const { tema } = useTema();

    return (
        <Stack>
            <Stack.Screen name="index" options={{
                title: "Minhas tarefas",
                headerStyle: { backgroundColor: tema.fundo },
                headerTintColor: tema.texto,
                headerTitleStyle: { fontWeight: "700" },
                headerShadowVisible: false,
                headerShown: true,
                headerLeft: () => <BotaoLista />,
                headerRight: () => <BotaoTema />,
            }} />
        </Stack>
    );
}

export default function RootLayout() {
    return (
        <TemaProvider>
            <ListaProvider>
                <View style={{ flex: 1 }}>
                    <AppStack />
                </View>
            </ListaProvider>
        </TemaProvider>
    );
}
