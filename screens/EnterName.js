import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const EnterName = () => {
  const navigation = useNavigation();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const navigateToEnterEmail = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={name}
        onChangeText={setName}
      />

      <Text style={styles.text}>Correo electrónico</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button theme="primary" label="Continuar" onPress={navigateToEnterEmail}/>
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
      width: 320,
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
      fontSize: 18,
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      paddingHorizontal: 10,
      width: 320,
      marginBottom: 20,
      backgroundColor: 'white',
      borderRadius: 4,
    },
  });

export default EnterName;