import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';

const roles = [
  {
    id: '1',
    title: 'Citizen',
    description: 'Lalala',
    icon: 'admin-panel-settings',
  },
  {
    id: '2',
    title: 'Candidate',
    description: 'Lalala',
    icon: 'edit',
  },
  {
    id: '3',
    title: 'Observer',
    description: 'Lalala',
    icon: 'visibility',
  },
  {
    id: '4',
    title: 'Party member',
    description: 'Lalala',
    icon: 'visibility',
  },  
];

const RoleCard = ({ title, description, icon }) => (
  <View style={styles.card}>
    <Icon name={icon} size={40} color="#000" />
    <View style={styles.cardContent}>
      <Text style={styles.cardTitle}>{title}</Text>
      {/* <Text style={styles.cardDescription}>{description}</Text> */}
    </View>

    <View>
      <Pressable style={styles.seeRolesButton}>
        <Icon name="arrow-forward" size={24} color="#000" />
      </Pressable>
    </View>
  </View>
);

const RolesView = () => {
  return (
    <View style={styles.flatlist_container}>
      <Text style={styles.title}>Roles</Text>
      <FlatList
      data={roles}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
          <RoleCard
          title={item.title}
          description={item.description}
          // icon={item.icon}
          />
      )}
      // contentContainerStyle={styles.container_white}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={[styles.fullWidthButton, styles.secondaryButton]}>
            <Text style={[styles.fullWidthButtonText, styles.secondaryButtonText]}>Add Role</Text>
        </Pressable>
      </View>
    </View>

  );
};


export default RolesView;