import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppBottomTabNavigator, StackAppRoutes} from '@routes';

export type AppTabNavigatorScreenParams<
  Screen extends keyof AppBottomTabNavigator,
> = CompositeScreenProps<
  BottomTabScreenProps<AppBottomTabNavigator, Screen>,
  NativeStackScreenProps<StackAppRoutes>
>;
