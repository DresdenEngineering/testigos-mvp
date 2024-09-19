import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const PersonalData = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Personal Data</Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Phone" keyboardType="phone-pad" />
      <Button title="Submit" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: '#CCC',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});

export default PersonalData;