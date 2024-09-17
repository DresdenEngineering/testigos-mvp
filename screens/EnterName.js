import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';
import styles from './styles';


const EnterName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const navigateToHomeScreen = () => {
    navigation.navigate('HomeScreen');
  };


  return (
    <View style={styles.container_yellow}>
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

export default EnterName;