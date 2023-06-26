import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  SuccessScreenParams,
  ForgotPasswordScreen,
} from '@screens';

export type StackNavigatorScreensProps = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: SuccessScreenParams;
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<StackNavigatorScreensProps>();

export function AuthRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        fullScreenGestureEnabled: true,
      }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="SuccessScreen" component={SuccessScreen} />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
    </Stack.Navigator>
  );
}
