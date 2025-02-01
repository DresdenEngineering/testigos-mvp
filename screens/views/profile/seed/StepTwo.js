import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Pressable } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useNavigation } from '@react-navigation/native';
import styles from '../../../styles';


const StepTwo = () => {
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
      <Text style={styles.title}>Step Two: Confirm Seed Phrase</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Contacts"
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.contactItem}>
            <Text>{item.name}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Pressable style={[styles.fullWidthButton, styles.primaryButton]} onPress={() => navigation.navigate('StepThree')}>
          <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Next</Text>
        </Pressable>
      </View>
    </View>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   searchBar: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     borderRadius: 5,
//     paddingHorizontal: 10,
//     marginBottom: 20,
//   },
//   contactItem: {
//     padding: 10,
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   buttonContainer: {
//     flex: 1,
//     justifyContent: 'flex-end',
//     width: '100%',
//   },
//   fullWidthButton: {
//     padding: 15,
//     backgroundColor: '#007bff',
//     borderRadius: 5,
//     alignItems: 'center',
//   },
//   primaryButton: {
//     backgroundColor: '#007bff',
//   },
//   fullWidthButtonText: {
//     color: '#fff',
//     fontSize: 16,
//   },
//   primaryButtonText: {
//     color: '#fff',
//   },
// });

export default StepTwo;