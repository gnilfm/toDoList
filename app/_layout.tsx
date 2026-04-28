import AppProviders from "@/components/layout/AppProviders";
import AppStack from "@/components/layout/AppStack";

export default function RootLayout() {
    return (
        <AppProviders>
            <AppStack />
        </AppProviders>
    );
}
