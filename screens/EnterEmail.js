import React, { useLayoutEffect, useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Button from '../components/Button';

const EnterEmail = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Cuál es tu correo electrónico?</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu correo electrónico"
        value={email}
        onChangeText={setEmail}
      />
      <Button theme="primary" label="Continuar" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      width: 320,
      alignSelf: 'center',
    },
    text: {
      textAlign: 'left',
      width: 320,
      fontSize: 20,
      fontWeight: 'bold',
    },
    input: {
      fontSize: 16,
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginTop: 20,
      paddingHorizontal: 10,
      width: 320,
      marginBottom: 20,
    },
  });

export default EnterEmail;