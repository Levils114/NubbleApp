import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AuthStackNavigatorScreensProps} from '@routes';

export type AuthScreens = keyof AuthStackNavigatorScreensProps;

export type AuthNativeStackScreenProps<Screen extends AuthScreens> =
  NativeStackScreenProps<AuthStackNavigatorScreensProps, Screen>;
