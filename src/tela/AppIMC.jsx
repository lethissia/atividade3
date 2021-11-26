import React, {Component} from "react";
import {View, Text, TextInput, Button} from 'react-native'
import CalculadoradeIMC from "../components/CalculoIMC";

export default class AppIMC extends Component{

    constructor(props){
        super(props)
        this.state = {altura:null, peso:null, apertou: false}
    }

    apertarBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
    }

    calcularIMC(){
        if(this.state.apertou == true)
        {
            return(
                <CalculadoradeIMC altura={this.state.altura} peso={this.state.peso}> </CalculadoradeIMC>
            )
        }   
    }

    render(){
        return(
            <View>
                <Text style={{fontSize: 30, fontWeight: "600", marginBottom:10 }}>Calcule seu IMC! (:</Text>
                <TextInput
                style={{height:40, backgroundColor: "#D3D3D3", marginTop:15 , marginBottom: 10, padding: 25}}
                placeholder="Altura"
                onChangeText={(altura)=> this.setState({altura})}
                >
                </TextInput>

                <TextInput
                style={{height:40, backgroundColor: "#D3D3D3", marginTop:15 , marginBottom: 10, padding: 25}}
                placeholder="Peso"
                onChangeText={(peso)=> this.setState({peso})}>
                </TextInput>
                
                <View  style={{marginBottom: 25, marginTop: 15}}>
                <Button
                    title='Calcular'
                    onPress={this.apertarBotao} 
                />
                </View>
            {this.calcularIMC()}

            </View>
        )
    }


}