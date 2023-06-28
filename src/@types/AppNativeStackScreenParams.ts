import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {StackAppRoutes} from '@routes';

export type AppNativeStackScreenParams<Screen extends keyof StackAppRoutes> =
  NativeStackScreenProps<StackAppRoutes, Screen>;
