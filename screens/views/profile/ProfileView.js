import React from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import { useNavigation } from '@react-navigation/native';

import styles from '../../styles';


const ProfileView = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    // Add your logout logic here
    console.log('Logout pressed');
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.container_white}>
          {/* <View style={styles.headerContainer}>
            <Pressable onPress={handleLogout} style={styles.logoutButton}>
              <Icon name="logout" size={24} color="#FF9900" />
            </Pressable>
          </View> */}
          <Text style={styles.name}> Hola, Panda</Text>
          <Image
              source={{ uri: '../assets/images/logo.png' }} // Replace with actual profile picture URL            
              style={styles.profileImage}
          />

          <View style={styles.profileStrengthContainer}>
            <Text style={styles.profileStrength}>Fortaleza de Perfil</Text>
            <View style={styles.progressBarContainer}>
              <View style={styles.progressBarFill} />
            </View>
            {/* <Text style={styles.privacyStatement}>Nota sobre privacidad y seguridad de la información guardada.</Text> */}
          </View>

          <View style={styles.profileStepsContainer}>
            <Pressable 
              style={styles.pressable}
              onPress={() => navigation.navigate('PersonalData')}
            >
              <Text style={styles.pressableText}>Datos personales</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable 
              style={styles.pressable}
              // onPress={() => navigation.navigate('ConfirmId')}
            >
              <Text style={styles.pressableText}>Número de celular</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable 
              style={styles.pressable}
              // onPress={() => navigation.navigate('ConfirmId')}
            >
              <Text style={styles.pressableText}>Correo electrónico</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable 
              style={styles.pressable}
              // onPress={() => navigation.navigate('ConfirmId')}
            >
              <Text style={styles.pressableText}>Documento de identidad</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable 
              style={styles.pressable}
              // onPress={() => navigation.navigate('ConfirmId')}
            >
              <Text style={styles.pressableText}>Afiliación política</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            {/* <Pressable 
              style={styles.pressable}
              // onPress={() => navigation.navigate('CreateSeed')}
            >
              <Text style={styles.pressableText}>Frase de recuperación</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable>
            <Pressable 
              style={styles.pressable}
              // onPress={() => navigation.navigate('SetupGuardians')}  
            >
              <Text style={styles.pressableText}>Guardianes</Text>
              <Icon name="arrow-forward" size={24} color="#FF9900" style={styles.arrowIcon} />
            </Pressable> */}
          </View>
      </View>
    </ScrollView>
  );
};

export default ProfileView;