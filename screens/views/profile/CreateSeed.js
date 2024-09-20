import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import StepOne from './seed/StepOne';
import StepTwo from './seed/StepTwo';
import StepThree from './seed/StepThree';


const Stack = createStackNavigator();

const CreateSeed = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="StepOne">
        <Stack.Screen 
          name="StepOne" 
          component={StepOne} 
          options={{ headerShown: false, title: 'Step One' }}
        />
        <Stack.Screen 
          name="StepTwo" 
          component={StepTwo} 
          options={{ headerShown: false, title: 'Step Two' }}
        />
        <Stack.Screen 
          name="StepThree" 
          component={StepThree} 
          options={{ headerShown: false, title: 'Step Three' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default CreateSeed;