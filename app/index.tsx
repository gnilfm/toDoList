import Tarefas from "@/components/tarefas/Tarefas";
import { useTema } from "@/data/contexts/TemaContext";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const { tema } = useTema();

  return (
    <View style={[styles.container, { backgroundColor: tema.fundo }]}>
      <Tarefas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
