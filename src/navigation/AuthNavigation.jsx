import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import Country from '../screens/Country';
import ConfirmedCases from '../screens/ConfirmedCases';

const Tab = createBottomTabNavigator();

const AuthNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Paises') {
            iconName = focused ? 'earth' : 'earth-outline';
          }
          if (route.name === 'Casos Confirmados') {
            iconName = focused ? 'bug' : 'bug-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#006DCB',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name='Paises' component={Country} />
      <Tab.Screen name='Casos Confirmados' component={ConfirmedCases} />
    </Tab.Navigator>
  );
}

export default AuthNavigation;