import React from "react";
import { SafeAreaView, View, Text, StatusBar, StyleSheet } from "react-native";
import Servicos from "./src/telas/Servicos";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import Carrinho from "./src/telas/Carrinho";
import Rotas from "./src/rotas";
import TelaPadrao from "./src/componentes/TelaPadrao";
import Reactotron from "reactotron-react-native";

Reactotron.configure().useReactNative().connect();
console.tron = Reactotron;

export default function App() {
    console.tron.log("teste");
    return (<TelaPadrao>
        <Rotas />

    </TelaPadrao>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
