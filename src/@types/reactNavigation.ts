import {StackNavigatorScreensProps} from '@routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackNavigatorScreensProps {}
  }
}
