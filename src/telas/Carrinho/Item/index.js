import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import estilos from "./estilos";
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";

export default function Item({ nome, preco, descricao, quantidade: quantidadeInicial }) {
    const [quantidade, setQuantidade] = useState(quantidadeInicial);
    const [total, setTotal] = useState(preco*quantidadeInicial);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    };
    const calculaTotal = (quantidade) => {
        setTotal(preco * quantidade);
    };

    return (
        <>
            <View style={estilos.informacao}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>
                    {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(preco)}
                </Text>
            </View>

            <View style={estilos.carrinho}>
                <View>
                    <View style={estilos.valor}>
                        <Text>Quantidade: </Text>
                        <CampoInteiro
                            valor={quantidade}
                            acao={atualizaQuantidadeTotal}
                            estilos={estilos.quantidade}
                        />
                    </View>
                    <View style={estilos.valor}>
                        <Text style={estilos.quantidade}>Total: </Text>
                        <Text style={estilos.preco}>
                            {Intl.NumberFormat("pt-BR", {
                                style: "currency",
                                currency: "BRL",
                            }).format(total)}
                        </Text>
                    </View>
                </View>
                <Botao valor="Remover ao Carrinho" acao={() => {}} />
            </View>

            <View style={estilos.divisor} />
        </>
    );
}
