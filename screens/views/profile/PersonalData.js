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
            <Text style={styles.sectionTitle}>Name</Text>
            <TextInput style={styles.input_profile} placeholder="First Name" />
            <TextInput style={styles.input_profile} placeholder="Second Name (optional)" />
            <TextInput style={styles.input_profile} placeholder="First Lastname" />
            <TextInput style={styles.input_profile} placeholder="Second Lastname (optional)" />
          </View>

          {/* Section 5: Dirección */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Address</Text>
            <TextInput style={styles.input_profile} placeholder="Country" />
            <TextInput style={styles.input_profile} placeholder="City" />
            <TextInput style={styles.input_profile} placeholder="Address" />
          </View>
          
          <View style={styles.buttonContainer}>
            <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={() => navigation.goBack()}>
                <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Save</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};


export default PersonalData;