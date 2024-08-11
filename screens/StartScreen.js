import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
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
      <Button theme="primary" label="Empezar" onPress={navigateToEnterName} />
      {/* <Button theme="primary" label="Empezar" onPress={createDID} /> */}
      <Button theme="secondary" label="Iniciar Sesión" />
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
    // maxWidth: 100, // Constrain the maximum width of the image
    // maxHeight: 150, // Constrain the maximum height of the image
    // borderWidth: 2, // Add border width
    // borderColor: 'black', // Add border color
  },
});

export default StartScreen;