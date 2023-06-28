import React from 'react';

import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

import {AppTabBar} from '@components';
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
  const renderTabBar = ({
    state,
    descriptors,
    navigation,
    insets,
  }: BottomTabBarProps) => (
    <AppTabBar
      state={state}
      descriptors={descriptors}
      navigation={navigation}
      insets={insets}
    />
  );

  return (
    <Tab.Navigator
      tabBar={renderTabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        name="HomeScreen"
        options={{title: 'Início'}}
        component={HomeScreen}
      />
      <Tab.Screen
        name="NewPostScreen"
        options={{title: 'Novo post'}}
        component={NewPostScreen}
      />
      <Tab.Screen
        name="FavoritesScreen"
        options={{title: 'Favoritos'}}
        component={FavoritesScreen}
      />
      <Tab.Screen
        name="ProfileScreen"
        options={{title: 'Meu perfil'}}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}
