import {StackNavigatorScreensProps} from '../routes/AuthRoutes.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends StackNavigatorScreensProps {}
  }
}
