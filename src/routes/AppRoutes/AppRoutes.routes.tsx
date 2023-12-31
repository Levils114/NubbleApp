import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {SettingsScreen, PostCommentScreen, UsersProfileScreen} from '@screens';

import {AppBottomTabNavigator, AppTabNavigator} from './AppTabNavigator.routes';

export type StackAppRoutes = {
  AppTabNavigator: NavigatorScreenParams<AppBottomTabNavigator>;
  SettingsScreen: undefined;
  PostCommentScreen: {
    postId: number;
  };
  UsersProfileScreen: {
    userId: number;
  };
};

const Stack = createNativeStackNavigator<StackAppRoutes>();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="UsersProfileScreen" component={UsersProfileScreen} />
    </Stack.Navigator>
  );
}
