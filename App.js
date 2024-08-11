import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import StartScreen from './screens/StartScreen';
import EnterName from './screens/EnterName';
import EnterEmail from './screens/EnterEmail';
// import EnterPhone from './screens/EnterPhone';
// import EnterPassword from './screens/EnterPassword';
// import EnterCode from './screens/EnterCode';
// import EnterPin from './screens/EnterPin';
// import EnterBiometrics from './screens/EnterBiometrics';
// import HomeScreen from './screens/HomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={StartScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="EnterName" 
            component={EnterName} 
            options={{ title: 'Nombre' }} 
          />

          <Stack.Screen 
            name="EnterEmail" 
            component={EnterEmail} 
            options={{ title: 'Correo electrónico' }} 
          />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
