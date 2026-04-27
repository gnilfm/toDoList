import { Ionicons } from "@expo/vector-icons";
import { Link, Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="index" options={{
      title: "",
      headerStyle: { backgroundColor: "#144781ff" },
      headerTitleStyle: { fontWeight: "bold" },
      headerShown: true,
      headerLeft: () => (
        <Link href="/">

          <Ionicons
            name="list"
            size={40}
            color="white"
            style={{ marginLeft: 20 }}
          />
        </Link>
      ),
    }} />
  </Stack>

}
