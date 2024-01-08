import React from 'react';
import {
  ActivityIndicator as RNActivityIndicator,
  ActivityIndicatorProps,
} from 'react-native';

import {ThemeColors} from '@global/theme/lightTheme';

import {useAppTheme} from '@hooks';

interface Props extends Omit<ActivityIndicatorProps, 'color'> {
  color?: ThemeColors;
}

export function ActivityIndicator({color = 'primary', ...props}: Props) {
  const {colors} = useAppTheme();

  return (
    <RNActivityIndicator
      testID="activity-indicator"
      {...props}
      color={colors[color]}
    />
  );
}
