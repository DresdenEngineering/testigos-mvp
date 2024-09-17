import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';


// Views
import ProfileView from './views/ProfileView';
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
    {/* <Text style={styles.dummyText}>Roles</Text> */}
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
          tabBarInactiveTintColor: 'rgba(89, 89, 89, .8)',
          tabBarItemStyle: { paddingVertical: 15 },
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'Perfil') {
              iconName = 'person';
            } else if (route.name === 'Roles') {
              iconName = 'group';
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
        <Tab.Screen name="Roles" component={RolesScreen} />
        <Tab.Screen name="Billetera" component={RewardsScreen} />
        <Tab.Screen name="Cámara" component={CameraScreen} />
      </Tab.Navigator>
    </View>
  );
};

export default HomeScreen;