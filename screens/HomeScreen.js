import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser'
import { faWallet } from '@fortawesome/free-solid-svg-icons/faWallet'
import { faIdCard } from '@fortawesome/free-solid-svg-icons/faIdCard'


import styles from './styles';


// Views
import ProfileStack from './views/ProfileStack';

import ProfileView from './views/profile/ProfileView';
import RolesView from './views/RolesView';


const Tab = createBottomTabNavigator();

const ProfileScreen = () => (
  <View style={styles.container}>
    <ProfileView />
  </View>
);

const RolesScreen = () => (
  <View style={styles.container}>
    <RolesView />
  </View>
);

const RewardsScreen = () => (
  <View style={styles.container}>
    <RolesView />
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
          tabBarInactiveTintColor: 'rgba(89, 89, 89, .8)',
          tabBarItemStyle: { paddingVertical: 15 },
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Perfil') {
              iconName = faUser;
            } else if (route.name === 'Tareas') {
              iconName = faIdCard;
            } else if (route.name === 'Pagos') {
              iconName = faWallet;
            } 
            return <FontAwesomeIcon icon={iconName} />;
          },
        })}
      >
        <Tab.Screen name="Perfil" component={ProfileStack} />
        <Tab.Screen name="Roles" component={RolesScreen} />
        <Tab.Screen name="Pagos" component={RewardsScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;