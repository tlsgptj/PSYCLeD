import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FindPassword from "./src/components/User/FindPassword";
import NotFound from "./src/components/+not-found";
import Register from "./src/components/User/register";
import Login from "./src/components/User/Login";
import Main from "./src/components/main";
import Landing from "./src/components/Landing";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Home" component={FindPassword} />
        <Stack.Screen name="NotFound" component={NotFound} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Landing" component={Landing} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
