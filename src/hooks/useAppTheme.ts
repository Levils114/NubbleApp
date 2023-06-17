import {useTheme} from '@shopify/restyle';
import {Theme} from '../global/theme/lightTheme';

export function useAppTheme() {
  return useTheme<Theme>();
}
