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

      <View style={styles.screen_container}>
        <Text style={styles.text}>Choose a nick name</Text>
        <TextInput
          style={styles.input}
          placeholder="Write a nick name"
          value={name}
          onChangeText={setName}
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={navigateToHomeScreen}>
            <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Continue</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default EnterName;