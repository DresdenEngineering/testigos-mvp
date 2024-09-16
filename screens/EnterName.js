import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const EnterName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const navigateToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>¿Cómo te llamas?</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={navigateToHomeScreen}>
            <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Continuar</Text>
        </Pressable>
      </View>
      {/* <Button theme="primary" label="Continuar" onPress={navigateToHomeScreen}/> */}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCE279',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    text: {
      textAlign: 'left',
      width: 270,
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
      fontSize: 18,
      height: 50,
      borderColor: 'gray',
      marginTop: 20,
      paddingHorizontal: 10,
      width: 270,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 10,
    },
    
    buttonContainer: {
      flex: 1 / 3,
      alignItems: 'center',
    },
    fullWidthButtonText: {
      width: 270,
      fontSize: 17,
      letterSpacing: 1.5,
      textAlign: 'center',
      paddingVertical: 16,
      fontFamily: 'Roboto_700Bold',
      textTransform: 'uppercase',
    },
    primaryButton: {
      backgroundColor: '#424242',
      borderRadius: 20, 
    },
    primaryButtonText: {
      color: '#F9F9F9',
      fontFamily: 'Roboto_700Bold',
    },
    
  });

export default EnterName;