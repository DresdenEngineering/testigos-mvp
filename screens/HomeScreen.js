import React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button as RNButton } from "react-native";
import Button from '../components/Button'; 
import ImageViewer from '../components/ImageViewer';

const PlaceholderImage = require("../assets/images/background-image.png");

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer placeholderImageSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button theme="primary" label="Empezar" onPress={() => navigation.navigate('Details')}/>
        <Button label="Iniciar Sesión" />
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
  imageContainer: {
    flex: 1,
    paddingTop: 58,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});

export default HomeScreen;