import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from '../components/layout';
import Login from '../components/Login';
import register from '../components/register';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    register: undefined;
  };

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen 
          name="Home" 
          component={Layout} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Login" 
          component={Login} 
          options={{ title: 'Login Page' }} 
        />

        <Stack.Screen 
          name="register" 
          component={register} 
          options={{ title: 'register page' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
