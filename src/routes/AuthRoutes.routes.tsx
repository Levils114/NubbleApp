import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginScreen} from '../screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from '../screens/auth/SignUpScreen/SignUpScreen';

export type StackNavigatorScreensProps = {
  LoginScreen: {name: string};
  SignUpScreen: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorScreensProps>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
    </Stack.Navigator>
  );
}
