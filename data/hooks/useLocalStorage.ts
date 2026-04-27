import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useLocalStorage() {
    const alterarItem = async (chave: string, valor: any) => {
        try {
            await AsyncStorage.setItem(chave, JSON.stringify(valor));
        } catch (error) {
            console.log(error);
        }
    }

    const obterItem = async (chave: string) => {
        try {
            const valor = await AsyncStorage.getItem(chave);
            return valor ? JSON.parse(valor) : null;
        } catch (error) {
            console.log(error);
        }
    }

    const removerItem = async (chave: string) => {
        try {
            await AsyncStorage.removeItem(chave);
        } catch (error) {
            console.log(error);
        }
    }

    return {
        alterarItem,
        obterItem,
        removerItem
    }
}