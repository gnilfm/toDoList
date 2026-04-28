import { ListaProvider } from "@/data/contexts/ListaContext";
import { TemaProvider } from "@/data/contexts/TemaContext";
import { ReactNode } from "react";
import { View } from "react-native";

export default function AppProviders({ children }: { children: ReactNode }) {
    return (
        <TemaProvider>
            <ListaProvider>
                <View style={{ flex: 1 }}>
                    {children}
                </View>
            </ListaProvider>
        </TemaProvider>
    );
}
