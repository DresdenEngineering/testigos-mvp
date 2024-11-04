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

  const navigateToGoogle = () => {
    // Add your Google login logic here
    console.log('Enter with Google pressed');
  };

  const navigateToWallet = () => {
    // Add your Wallet login logic here
    console.log('Enter with Wallet pressed');
  };

  const navigateToPhoneNumber = () => {
    navigation.navigate('EnterPhoneNumber');
  };

  return (
    <View style={styles.container_yellow}>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.logoImage} />        
      </View>
      <View style={styles.footerContainer}>
        <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={navigateToEnterName}>
          <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Cotinue with Wallet</Text>
        </Pressable>
        <Pressable style={[styles.fullWidthButton, styles.secondaryButton]} onPress={navigateToWallet}>
          <Text style={[styles.fullWidthButtonText, styles.secondaryButtonText]}>Continue with Google</Text>
        </Pressable>
        {/* <Pressable style={[styles.fullWidthButton, styles.tertiaryButton]} onPress={navigateToPhoneNumber}>
          <Text style={[styles.fullWidthButtonText, styles.tertiaryButtonText]}>Continue with Phone Number</Text>
        </Pressable> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default StartScreen;