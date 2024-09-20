import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from '../../../styles';

const StepOne = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container_white}>
      <Text style={styles.instructions_title}>Elige tus Guardianes</Text>
      <View style={styles.guardiansIconContainer} />
      <Text style={styles.instructions_text}>Elige personas quiénes confíes plenamente.</Text>
      <Text style={styles.instructions_subtext}>Tus guardianes te podrán ayudar a recuperar acceso a tu cuenta si olvidas tu contraseña o pierdes tu celular.</Text>
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={() => navigation.navigate('StepTwo')}>
            <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default StepOne;