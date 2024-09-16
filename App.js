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
import ProfileView from './screens/views/ProfileView';

// Screens
import StartScreen from './screens/StartScreen';
import EnterName from './screens/EnterName';
import HomeScreen from './screens/HomeScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import ProfileScreen from './screens/ProfileScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: '#000' }, // Dark background for tab bar
        tabBarActiveTintColor: '#fff', // White color for active tab icon and label
        tabBarInactiveTintColor: '#888', // Grey color for inactive tab icon and label
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
      {/* <Tab.Screen name="Profile" component={ProfileScreen} /> */}
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
            name="Start" 
            component={StartScreen} 
            options={{ headerShown: false }}
          />
          <Stack.Screen 
            name="EnterName" 
            component={EnterName} 
            options={{
              headerShown: true,
              title: 'Atrás',
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
        </Stack.Navigator>
      </NavigationContainer>
    {/* // </Provider> */}
    </>
  );
};

export default App;