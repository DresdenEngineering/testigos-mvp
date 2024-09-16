import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

import Button from '../components/Button';
import createDID from '../components/CreateDID';

const LogoImage = require("../assets/images/logo.png");

const handlePress = (callback) => {
  callback();
};

const StartScreen = ({ navigation }) => {
  const navigateToEnterName = () => {
    navigation.navigate('EnterName');
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.logoImage} />        
      </View>
      <View style={styles.footerContainer}>
        <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={navigateToEnterName}>
          <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Empezar</Text>
        </Pressable>
        <Pressable style={[styles.fullWidthButton, styles.secondaryButton]} onPress={navigateToEnterName}>
          <Text style={[styles.fullWidthButtonText, styles.secondaryButtonText]}>Iniciar Sesión</Text>
        </Pressable>
      </View>
      <StatusBar style="auto" />
    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCE279',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '50%', // TODO: Ensure the container takes the full width of the parent
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
  logoImage: {
    width: 200, // Set the width of the image
    height: 200, // Set the height of the image
    resizeMode: 'contain',
  },

  fullWidthButton: {
    width: 270,
    borderRadius: 20,
  },

  fullWidthButtonText: {
    width: 270,
    fontSize: 17,
    letterSpacing: 1.5,
    borderRadius: 20,
    textAlign: 'center',
    paddingVertical: 16,
    fontFamily: 'Roboto_700Bold',
    textTransform: 'uppercase',
  },
  primaryButton: {
    backgroundColor: '#424242',
  },
  primaryButtonText: {
    color: '#F9F9F9',
    fontFamily: 'Roboto_700Bold',
  },
  secondaryButton: {
    marginTop: 30,
    borderColor: '#424242',
    borderWidth: 2,
  },
  secondaryButtonText: {
    color: '#424242',
  }
});

export default StartScreen;