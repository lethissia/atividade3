import React from 'react';
import {View} from 'react-native';
import AppIMC from './src/tela/AppIMC';

export default function App() {

    return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      <View>
       <AppIMC></AppIMC>
      </View>
    </View>
  );
}

