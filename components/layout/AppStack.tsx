import useHomeScreenOptions from "@/data/hooks/useHomeScreenOptions";
import { Stack } from "expo-router";

export default function AppStack() {
    const homeScreenOptions = useHomeScreenOptions();

    return (
        <Stack>
            <Stack.Screen name="index" options={homeScreenOptions} />
        </Stack>
    );
}
