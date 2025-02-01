import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import GuardiansOne from './guardians/GuardiansOne';
import GuardiansTwo from './guardians/GuardiansTwo';
import GuardiansThree from './guardians/GuardiansThree';


const Stack = createStackNavigator();

const SetupGuardians = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="GuardiansOne">
        <Stack.Screen 
          name="GuardiansOne" 
          component={GuardiansOne} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="GuardiansTwo" 
          component={GuardiansTwo} 
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="GuardiansThree" 
          component={GuardiansThree} 
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default SetupGuardians;