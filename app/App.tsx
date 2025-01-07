import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Layout from '../components/layout';
import Login from '../components/User/Login';
import register from '../components/User/register';
import findPassword from '../components/User/FindPassword';

type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    register: undefined;
    findPassword: undefined;
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

        <Stack.Screen
          name="findPassword"
          component={findPassword}
          options={{ title: 'findPassword page'}}
          />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
