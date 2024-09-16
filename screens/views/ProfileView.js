import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import SvgQRCode from 'react-native-qrcode-svg';


const ProfileView = () => {
    // const userId = 'user-unique-identifier';


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.container}>
          <Text style={styles.name}> Hola, Pedro</Text>
          {/* <View style={styles.qrCodeContainer}>
              <SvgQRCode value={userId} size={150} />
          </View> */}
          <Image
              // source={{ uri: 'https://example.com/profile-picture.jpg' }} // Replace with actual profile picture URL
              source={{ uri: '../assets/images/logo.png' }} // Replace with actual profile picture URL            
              style={styles.profileImage}
          />

          <View style={styles.profileStrengthContainer}>
            <Text style={styles.profileStrength}>Fortaleza de Perfil</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFill} />
            </View>
          </View>

          <View style={styles.profileStepsContainer}>
            <Pressable style={styles.pressable}>
              <Text style={styles.pressableText}>Datos personales</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable style={styles.pressable}>
              <Text style={styles.pressableText}>Verificar identidad</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable style={styles.pressable}>
              <Text style={styles.pressableText}>Frase de recuperación</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable style={styles.pressable}>
              <Text style={styles.pressableText}>Guardianes</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
          </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'top',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF'
  },
  profileImage: {
    width: 200,
    height: 200,
    backgroundColor: '#c1c1c1',
    borderRadius: 200,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 50,
  },
  bio: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  profileStrengthContainer: {
    marginTop: 20
  },
  profileStrength: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 15,
    fontWeight: '500',
  },
  progressBarContainer: {
    width: 310,
    height: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressBarFill: {
    width: '10%', // Fill 10% of the bar
    height: '100%',
    backgroundColor: '#76c7c0',
  },

  profileStepsContainer: {
    marginTop: 20,
    width: 310,
    alignItems: 'center',
  },
  pressable: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  pressableText: {
    fontSize: 16,
  },
  arrowIcon: {
    marginLeft: 10,
  },
});

export default ProfileView;