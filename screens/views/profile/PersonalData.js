import React from 'react';
import { View, Text, TextInput, Button, ScrollView, Pressable } from 'react-native';
import styles from '../../styles';


const PersonalData = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container_white}>
        <View style={styles.screenContainer}>
          {/* <Text style={styles.title}>Datos Personales</Text> */}

          {/* Section 1: Nombre corto */}
          {/* <View style={styles.section}>
            <Text style={styles.sectionTitle}>¿Cómo quieres te llamen?</Text>
            <TextInput style={styles.input} placeholder="Nombre corto" />
          </View> */}

          {/* Section 2: Nombres y Apellidos */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Nombres y Apellidos</Text>
            <TextInput style={styles.input_profile} placeholder="Primer Nombre" />
            <TextInput style={styles.input_profile} placeholder="Segundo Nombre (opcional)" />
            <TextInput style={styles.input_profile} placeholder="Primer Apellido" />
            <TextInput style={styles.input_profile} placeholder="Segundo Apellido" />
          </View>

          {/* Section 3: Documento */}
          {/* <View style={styles.section}>
            <Text style={styles.sectionTitle}>Documento</Text>
            <TextInput style={styles.input_profile} placeholder="Tipo de documento" />
            <TextInput style={styles.input_profile} placeholder="Número de documento" />
            <TextInput style={styles.input_profile} placeholder="Fecha de expedición" />
            <TextInput style={styles.input_profile} placeholder="Fecha de expiración" />
          </View> */}

          {/* Section 4: Contacto */}
          {/* <View style={styles.section}>
            <Text style={styles.sectionTitle}>Contacto</Text>
            <TextInput style={styles.input_profile} placeholder="Email" keyboardType="email-address" />
            <TextInput style={styles.input_profile} placeholder="Teléfono" keyboardType="phone-pad" />
          </View> */}

          {/* Section 5: Dirección */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Dirección</Text>
            <TextInput style={styles.input_profile} placeholder="País" />
            <TextInput style={styles.input_profile} placeholder="Ciudad" />
            <TextInput style={styles.input_profile} placeholder="Dirección" />
          </View>
          
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={() => navigation.goBack()}>
                <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Guardar</Text>
            </Pressable>
          </View>
        </View>
        {/* <Button style={styles.fullWidthButton} title="Enviar" onPress={() => navigation.goBack()} /> */}
      </View>
    </ScrollView>
  );
};


export default PersonalData;