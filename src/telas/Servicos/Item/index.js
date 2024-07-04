import React, { useState } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import estilos from "./estilos";
import CampoInteiro from "../../../componentes/CampoInteiro";
import Botao from "../../../componentes/Botao";

export default function Item({ nome, preco, descricao }) {
    const [quantidade, setQuantidade] = useState(1);
    const [total, setTotal] = useState(preco);
    const [expandir, setExpandir] = useState(false);

    const atualizaQuantidadeTotal = (novaQuantidade) => {
        setQuantidade(novaQuantidade);
        calculaTotal(novaQuantidade);
    };
    const calculaTotal = (quantidade) => {
        setTotal(preco * quantidade);
    };
    const inverteExpandir = () => {
        setExpandir(!expandir);
        atualizaQuantidadeTotal(1);
    };

    return (
        <>
            <TouchableOpacity
                style={estilos.informacao}
                onPress={inverteExpandir}>
                <Text style={estilos.nome}>{nome}</Text>
                <Text style={estilos.descricao}>{descricao}</Text>
                <Text style={estilos.preco}>
                    {Intl.NumberFormat("pt-BR", {
                        style: "currency",
                        currency: "BRL",
                    }).format(preco)}
                </Text>
            </TouchableOpacity>
            {expandir && (
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
                    <Botao valor="Adicionar ao Carrinho" acao={() => {}} />
                </View>
            )}
            <View style={estilos.divisor} />
        </>
    );
}
