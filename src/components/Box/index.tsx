import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {Theme} from '@global/theme/lightTheme';
import {
  backgroundColor,
  BackgroundColorProps,
  border,
  BorderProps,
  createBox,
  createRestyleComponent,
  layout,
  LayoutProps,
  spacing,
  SpacingProps,
  spacingShorthand,
  SpacingShorthandProps,
} from '@shopify/restyle';

export const Box = createBox<Theme>();

export type TouchableOpacityBoxProps = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  TouchableOpacityProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, layout, spacingShorthand, border],
  TouchableOpacity,
);
