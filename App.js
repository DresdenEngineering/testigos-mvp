// General
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';

import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

// Redux
import { Provider } from 'react-redux';
// import store from './store';
// import ProfileView from './screens/views/ProfileView';

// Screens
import StartScreen from './screens/StartScreen';
import EnterName from './screens/EnterName';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';
// import ProfileScreen from './screens/ProfileScreen';


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#FBE27C' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });
  
  if (!fontsLoaded) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <>
    {/* // <Provider store={store}> */}
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="StartScreen" 
            component={StartScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="EnterName" 
            component={EnterName} 
            options={{
              headerShown: false,
              // title: 'Atrás',
              headerStyle: {
                backgroundColor: '#FCE279',
              },
              headerTintColor: '#343a40',
            }} 
          />
          <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="SettingsScreen" 
            component={SettingsScreen} 
            options={{ title: 'Settings', headerShown: true }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    {/* // </Provider> */}
    </>
  );
};

export default App;