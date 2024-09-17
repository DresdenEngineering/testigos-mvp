import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from '../styles';

const roles = [
  {
    id: '1',
    title: 'Ciudadano',
    description: 'Lalala',
    icon: 'admin-panel-settings',
  },
  {
    id: '2',
    title: 'Candidato',
    description: 'Lalala',
    icon: 'edit',
  },
  {
    id: '3',
    title: 'Testigo',
    description: 'Lalala',
    icon: 'visibility',
  },
  {
    id: '4',
    title: 'Representante',
    description: 'Lalala',
    icon: 'visibility',
  },
  {
    id: '5',
    title: 'Escrutinador',
    description: 'Lalala',
    icon: 'visibility',
  },
  {
    id: '6',
    title: 'Escrutinador',
    description: 'Lalala',
    icon: 'visibility',
  },
  {
    id: '7',
    title: 'Escrutinador',
    description: 'Lalala',
    icon: 'visibility',
  },
  {
    id: '8',
    title: 'Escrutinador',
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

        {/* <View style={styles.buttonContainer}>
            <Pressable style={styles.pressable}>
                <Text style={styles.pressableText}>Compartir</Text>
            </Pressable>
            
            <Pressable style={styles.pressable}>
                <Text style={styles.pressableText}>Ver</Text>
            </Pressable>
        </View> */}
    </View>

    {/* <View style={styles.buttonContainer}>
            <Pressable style={[styles.fullWidthButton, styles.primaryButton]}>
                <Text style={[styles.fullWidthButtonText, styles.primaryButtonText]}>Compartir</Text>
            </Pressable>
    </View> */}
  </View>
);

const RolesView = () => {
  return (
    <FlatList
    data={roles}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <RoleCard
        title={item.title}
        description={item.description}
        icon={item.icon}
        />
    )}
    contentContainerStyle={styles.container_white}
    />
  );
};


export default RolesView;