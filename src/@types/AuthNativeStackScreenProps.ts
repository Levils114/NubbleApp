import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigatorScreensProps} from '../routes/AuthRoutes.routes';

export type AuthScreens = keyof StackNavigatorScreensProps;

export type AuthNativeStackScreenProps<Screen extends AuthScreens> =
  NativeStackScreenProps<StackNavigatorScreensProps, Screen>;
