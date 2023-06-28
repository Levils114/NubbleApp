import {AuthStackNavigatorScreensProps, StackAppRoutes} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList
      extends AuthStackNavigatorScreensProps,
        StackAppRoutes {}
  }
}
