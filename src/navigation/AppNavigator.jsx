import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigation from './AuthNavigation';
import LoginScreen from '../screens/Login';

const Stack = createStackNavigator();

const AppNavigator = () => {

  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name='Login' component={LoginScreen} options={{headerShown: false}}/>
      <Stack.Screen
        name='Lemon'
        component={AuthNavigation}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppNavigator;