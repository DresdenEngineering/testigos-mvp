import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import Button from '../components/Button';
import createDID from '../components/CreateDID';

const LogoImage = require("../assets/images/logo.png");

const handlePress = (callback) => {
  callback();
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={LogoImage} style={styles.logoImage} />        
      </View>
      <View style={styles.footerContainer}>
      <Button theme="primary" label="Empezar" onPress={createDID} />
      <Button theme="secondary" label="Iniciar Sesión" />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    // backgroundColor: 'lightgrey',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // width: '50%', // Ensure the container takes the full width of the parent
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

export default HomeScreen;