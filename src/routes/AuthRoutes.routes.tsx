import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {IconProps} from '@components';
import {
  LoginScreen,
  SignUpScreen,
  SuccessScreen,
  ForgotPasswordScreen,
} from '@screens';

export interface SuccessScreenParams {
  icon: Pick<IconProps, 'name' | 'color'>;
  title: string;
  subtitle: string;
}

export type AuthStackNavigatorScreensProps = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: SuccessScreenParams;
  ForgotPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthStackNavigatorScreensProps>();

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
