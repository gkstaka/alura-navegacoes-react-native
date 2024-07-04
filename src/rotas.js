import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Servicos from "./telas/Servicos";
import Carrinho from "./telas/Carrinho";

import { cores } from "./estilos";

const Tab = createBottomTabNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{
                    
                    tabBarActiveTintColor: cores.roxo,
                    tabBarInactiveTintColor: cores.claro,
                    tabBarActiveBackgroundColor: cores.roxo,
                    tabBarInactiveBackgroundColor: cores.laranja,
                    tabBarLabelStyle: {
                        width: "100%",
                        flex:20,
                        fontWeight: "bold",
                        fontSize: 16,
                        lineHeight: 21,
                        marginTop: 3,
                        paddingTop: 16,
                        backgroundColor: cores.laranja,

                    },
                    tabBarStyle: { height: 70 },
                    tabBarHideOnKeyboard: true,
                    
                }}>
                <Tab.Screen name="Servicos" component={Servicos} options={ {tabBarIcon: () => null}} />
                <Tab.Screen name="Carrinho" component={Carrinho} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
