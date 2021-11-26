import React from 'react'
import {View, Text} from 'react-native'
import ResultadoIMC from './ResultadoIMC'

const CalculadoradeIMC = (props) => {

    const imc = props.peso / (props.altura * props.altura)
 
    if (props.altura != null && props.peso != null)
        return (
            <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={{ fontSize: 30, fontWeight: "500" }}>
                    Seu IMC é: {imc}
                </Text>
                <ResultadoIMC imc={imc}></ResultadoIMC>
            </View>
        )
    return null
}


export default CalculadoradeIMC