import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileView from './views/ProfileView';

const Tab = createBottomTabNavigator();

const ProfileScreen = () => (
  <View style={styles.container}>
    {/* <Text style={styles.dummyText}>Perfil</Text> */}
    <ProfileView />
  </View>
);

const CredentialsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.dummyText}>Llaves</Text>
  </View>
);

const RewardsScreen = () => (
  <View style={styles.container}>
    <Text style={styles.dummyText}>Billtera</Text>
  </View>
);

const CameraScreen = () => (
  <View style={styles.container}>
    <Text style={styles.dummyText}>Cámara</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { fontSize: 16 }, // Increase the font size of the tab labels
        tabBarStyle: { backgroundColor: '#000' }, // Dark background for tab bar
        tabBarActiveTintColor: '#fff', // White color for active tab icon and label
        tabBarInactiveTintColor: '#888', // Grey color for inactive tab icon and label
        headerShown: false,
      }}
    >
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Llaves" component={CredentialsScreen} />
      <Tab.Screen name="Billetera" component={RewardsScreen} />
      <Tab.Screen name="Cámara" component={CameraScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',

  },
  menuItem: {
    fontSize: 22,
  },
  dummyText: {
    fontSize: 22,
  },
});

export default HomeScreen;