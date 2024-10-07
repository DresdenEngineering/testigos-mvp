import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileView from './profile/ProfileView'; 
import PersonalData from './profile/PersonalData';
import ConfirmId from './profile/ConfirmId';
import CreateSeed from './profile/CreateSeed';
import SetupGuardians from './profile/SetupGuardians';

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="ProfileView" 
        component={ProfileView} 
        options={{ headerShown: false, title: 'Perfil' }}
      />
      <Stack.Screen 
        name="PhoneNumberView" 
        component={ProfileView} 
        options={{ headerShown: false, title: 'Perfil' }}
      />
      <Stack.Screen 
        name="EmailView" 
        component={ProfileView} 
        options={{ headerShown: false, title: 'Perfil' }}
      />
      <Stack.Screen 
        name="PersonalData" 
        component={PersonalData} 
        options={{ headerShown: true, title: 'Datos Personales' }}
      />
      <Stack.Screen 
        name="ConfirmId" 
        component={ConfirmId} 
        options={{ headerShown: true, title: 'Confirmar Identidad' }}
      />
      <Stack.Screen 
        name="CreateSeed" 
        component={CreateSeed} 
        options={{ headerShown: true, title: 'Frase de Recuperación' }}
      />
      <Stack.Screen 
        name="SetupGuardians" 
        component={SetupGuardians} 
        options={{ headerShown: true, title: 'Guardianes' }}
      />
    </Stack.Navigator>
  );
};

export default ProfileStack;