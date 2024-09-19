import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from './profile/ProfileView'; 
import PersonalData from './profile/PersonalData';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileView" 
        component={ProfileView} 
        options={{ headerShown: true, title: 'Profile' }}
      />
      <Stack.Screen 
        name="PersonalData" 
        component={PersonalData} 
        options={{ headerShown: true, title: 'Personal Data' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;