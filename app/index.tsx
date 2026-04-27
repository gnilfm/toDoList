import Tarefas from "@/components/tarefas/Tarefas";
import { StyleSheet, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Tarefas />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f50b0bff",
    height: 800,
  },
  texto: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
  },

});