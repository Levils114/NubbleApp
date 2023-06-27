import {Theme} from '@global/theme/lightTheme';
import {useTheme} from '@shopify/restyle';

export function useAppTheme() {
  return useTheme<Theme>();
}
