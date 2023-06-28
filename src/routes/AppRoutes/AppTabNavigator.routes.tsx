import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeScreen,
  NewPostScreen,
  ProfileScreen,
  FavoritesScreen,
} from '@screens';

export type AppBottomTabNavigator = {
  HomeScreen: undefined;
  NewPostScreen: undefined;
  FavoritesScreen: undefined;
  ProfileScreen: undefined;
};

const Tab = createBottomTabNavigator<AppBottomTabNavigator>();

export function AppTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="NewPostScreen" component={NewPostScreen} />
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} />
      <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
