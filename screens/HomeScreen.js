import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Import the icon library

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
    <Text style={styles.dummyText}>Billetera</Text>
  </View>
);

const CameraScreen = () => (
  <View style={styles.container}>
    <Text style={styles.dummyText}>Cámara</Text>
  </View>
);

const HomeScreen = () => {
  return (
    <View style={styles.screenContainer}>

      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabelStyle: { fontSize: 16 },
          tabBarStyle: { 
            backgroundColor: '#FBE27C', 
            height: 80, 
            borderTopLeftRadius: 30, 
            borderTopRightRadius: 30 
          },
          tabBarActiveTintColor: '#272727',
          tabBarInactiveTintColor: 'gray',
          tabBarItemStyle: { paddingVertical: 15 },
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Perfil') {
              iconName = 'person';
            } else if (route.name === 'Llaves') {
              iconName = 'vpn-key';
            } else if (route.name === 'Billetera') {
              iconName = 'account-balance-wallet';
            } else if (route.name === 'Cámara') {
              iconName = 'camera-alt';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Perfil" component={ProfileScreen} />
        <Tab.Screen name="Llaves" component={CredentialsScreen} />
        <Tab.Screen name="Billetera" component={RewardsScreen} />
        <Tab.Screen name="Cámara" component={CameraScreen} />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    backgroundColor: '#FFF', // Set the background color behind the tab bar
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  dummyText: {
    fontSize: 22,
  },
});

export default HomeScreen;