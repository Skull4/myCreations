import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function app(){
  const [ peso, setPeso ] = useState('');
  const [ altura, setAltura ] = useState('');

  function imcCalculator(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);
    
    if (imc < 18.5){
      alert('Você está abaixo do peso! ' + imc.toFixed(2))
    }else if (imc >= 18.5 && imc < 24.9){
      alert('Você está no peso ideal! ' + imc.toFixed(2))
    }else if (imc >= 25 && imc < 29.9){
      alert('Você está acima do peso! ' + imc.toFixed(2))
    }else if (imc > 30 && imc < 40){
      alert('Você está obeso! ' + imc.toFixed(2))
    }else if (imc > 40){
      alert('Você está com Obesidade Grave! ' + imc.toFixed(2))
    }
  }
  
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      
      <TextInput
      style={styles.input}
      value={peso}
      onChangeText={ (peso) => setPeso(peso) }
      placeholder='Peso (Kg)'
      keyboardType='numeric'
      />

      <TextInput
      style={styles.input}
      value={altura}
      onChangeText={ (altura) => setAltura(altura) }
      placeholder='Altura (Cm)'
      keyboardType='numeric'
      />
      
      <TouchableOpacity 
      onPress={imcCalculator}
      style={styles.button}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
        
  },
  title:{
    textAlign: 'center',
    marginTop: 40,
    fontSize: 30
  },
  input:{
    color: '#FFF',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    backgroundColor: '#121212',
    fontSize: 25
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10
  },
  buttonText:{
    color: '#FFF',
    fontSize: 25,

  }
});

