import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StepOne = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Escribe las siguientes palabras en un lugar seguro. Asegúrate de escribirlas en el orden exacto en el que se muestran.</Text>
      <Text>Si pierdes acceso a tu cuenta, necesitarás estas palabras para recuperar el acceso.</Text>
      <Text>Si pierdes estas palabras, puedes perder acceso a tu cuenta a tu cuenta, necesitarás estas palabras para recuperar el acceso.</Text>
      <Button
        title="Next"
        onPress={() => navigation.navigate('StepTwo')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default StepOne;