import React from 'react';

import {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  SettingsScreen,
  PostCommentScreen,
  UsersProfileScreen,
  SearchScreen,
  PublishPostScreen,
  CameraScreen,
} from '@screens';

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
  SearchScreen: undefined;
  PublishPostScreen: {
    imageUri: string;
  };
  CameraScreen: undefined;
};

interface IAppRoutes {
  initialRouteName?: keyof StackAppRoutes;
}

const Stack = createNativeStackNavigator<StackAppRoutes>();

export function AppRoutes({initialRouteName}: IAppRoutes) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="AppTabNavigator" component={AppTabNavigator} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PostCommentScreen" component={PostCommentScreen} />
      <Stack.Screen name="UsersProfileScreen" component={UsersProfileScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="PublishPostScreen" component={PublishPostScreen} />
      <Stack.Screen name="CameraScreen" component={CameraScreen} />
    </Stack.Navigator>
  );
}
