import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackNavigatorScreensProps} from '../routes/AuthRoutes.routes';

export type AuthNativeStackScreenProps<
  Screen extends keyof StackNavigatorScreensProps,
> = NativeStackScreenProps<StackNavigatorScreensProps, Screen>;
