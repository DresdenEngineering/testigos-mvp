import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Pressable, ScrollView, Modal } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library
import { useNavigation } from '@react-navigation/native';
import QRCode from 'react-native-qrcode-svg';

import styles from '../../styles';


const ProfileView = () => {
  const navigation = useNavigation();
  const [qrVisible, setQrVisible] = useState(false);

  const handleLogout = () => {
    console.log('Logout pressed');
  };

  const toggleQrModal = () => {
    setQrVisible(!qrVisible);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>

      <View style={styles.container_white}>
          <View style={localStyles.headerContainer}>
            <Text style={styles.name}>Hola, Panda</Text>
            <Pressable 
              style={localStyles.qrButton}
              onPress={toggleQrModal}
            >
              <Icon name="qr-code" size={24} color="#FF9900" />
            </Pressable>
          </View>
            
          {/* <View style={styles.headerContainer}>
            <Pressable onPress={handleLogout} style={styles.logoutButton}>
              <Icon name="logout" size={24} color="#FF9900" />
            </Pressable>
          </View> */}
          {/* <Image
              source={{ uri: '../assets/images/logo.png' }} // Replace with actual profile picture URL            
              style={styles.profileImage}
          /> */}

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
            <Pressable 
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
            </Pressable>
          </View>
      </View>

      <Modal
        visible={qrVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={toggleQrModal}
      >
        <View style={localStyles.modalContainer}>
          <View style={localStyles.modalContent}>
            <QRCode
              value="https://example.com"
              size={200}
            />
            <Pressable style={localStyles.closeButton} onPress={toggleQrModal}>
              <Text style={localStyles.closeButtonText}>Cerrar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};


const localStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  qrButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF9900',
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
  },
});


export default ProfileView;