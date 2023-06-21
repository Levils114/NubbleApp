import React from 'react';
import {SvgProps} from 'react-native-svg';
import {Pressable} from 'react-native';

import {ThemeColors, ThemeSpacing} from '../../global/theme/lightTheme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {icons} from './icons';

interface Props extends Omit<SvgProps, 'width' | 'height'> {
  name: keyof typeof icons;
  color?: ThemeColors;
  size?: ThemeSpacing;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 's20',
  onPress,
  ...props
}: Props) {
  const {colors, spacing} = useAppTheme();
  const svgColor = colors[color];
  const svgSpacing = spacing[size];

  const SVGIcon = icons[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={12}>
        <SVGIcon
          color={svgColor}
          width={svgSpacing}
          height={svgSpacing}
          stroke={svgColor}
          {...props}
        />
      </Pressable>
    );
  }

  return (
    <SVGIcon
      color={svgColor}
      width={svgSpacing}
      height={svgSpacing}
      stroke={svgColor}
      {...props}
    />
  );
}
