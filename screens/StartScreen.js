import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Pressable, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

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
    <View style={styles.container_yellow}>
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

export default StartScreen;