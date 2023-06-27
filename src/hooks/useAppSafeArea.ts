import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppTheme} from './useAppTheme';

export function useAppSafeArea() {
  const {top, bottom} = useSafeAreaInsets();
  const {spacing} = useAppTheme();

  return {
    top: top + spacing.s24,
    bottom: Math.max(bottom, spacing.s24),
  };
}
