import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../styles';


const GuardiansTwo = () => {
  const [contacts, setContacts] = useState([]);
  const [search, setSearch] = useState('');
  const [filteredContacts, setFilteredContacts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.Name],
        });
        setContacts(data);
        setFilteredContacts(data);
      }
    })();
  }, []);

  useEffect(() => {
    setFilteredContacts(
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, contacts]);

  return (
    <View style={styles.container_white}>
      {/* <Text style={styles.title}>Elige guardianes en tus contactos</Text> */}
      <TextInput
        style={styles.searchBar}
        placeholder="Buscar contactos"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        style={styles.contactsListContainer} // Add style to FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={() => navigation.navigate('GuardiansThree')}>
          <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Continuar</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuardiansTwo;