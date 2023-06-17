import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';
import {useTheme} from '@shopify/restyle';

import {Theme, ThemeColors} from '../../global/theme/lightTheme';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color: ThemeColors;
}

export function ActivityIndicator({color, ...props}: Props) {
  const {colors} = useTheme<Theme>();

  return <RNActivityIndicator {...props} color={colors[color]} />;
}
