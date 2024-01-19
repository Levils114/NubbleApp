import {
  Pressable,
  PressableProps,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';

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

type RestyleTypes = SpacingProps<Theme> &
  BackgroundColorProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme>;

export type TouchableOpacityBoxProps = RestyleTypes & TouchableOpacityProps;
export type PressableBoxProps = RestyleTypes & PressableProps;

export const TouchableOpacityBox = createRestyleComponent<
  TouchableOpacityBoxProps,
  Theme
>(
  [backgroundColor, spacing, layout, spacingShorthand, border],
  TouchableOpacity,
);

export const PressableBox = createRestyleComponent<PressableBoxProps, Theme>(
  [backgroundColor, spacing, layout, spacingShorthand, border],
  Pressable,
);
