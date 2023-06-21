import {Platform} from 'react-native';

export function useIsAndroid() {
  return Platform.OS === 'android';
}
