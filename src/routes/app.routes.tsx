import React from 'react';
import { Dashboard } from '../screens/Dashboard';
import { useTheme } from 'styled-components';

import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
  const theme = useTheme();

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: theme.colors.brand,
      tabBarInactiveTintColor: theme.colors.checked,
      tabBarShowLabel: false,
      
    }}>
      <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: (({ size, color }) =>
            <Entypo
              name='home'
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='Dashboard'
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <AntDesign
              name='pluscircle'
              size={size}
              color={color}
            />
          )
        }}
      />

      <Screen
        name='Profile'
        component={Profile}
        options={{
          tabBarIcon: (({ size, color }) =>
            <FontAwesome
              name='user'
              size={size}
              color={color}
            />
          )
        }}
      />
    </Navigator>
  );
}

export function Home() {
  return (
    <View></View>
  );
}

export function Profile() {
  return (
    <View></View>
  );
}