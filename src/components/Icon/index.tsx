import React from 'react';
import {Pressable} from 'react-native';

import {ThemeColors, ThemeSpacing} from '@global/theme/lightTheme';
import {SvgProps} from 'react-native-svg';

import {useAppTheme} from '@hooks';

import {icons} from './icons';

type IconsNames = keyof typeof icons;

export interface IconProps extends Omit<SvgProps, 'width' | 'height'> {
  name: IconsNames;
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
}: IconProps) {
  const {colors, spacing} = useAppTheme();
  const svgColor = colors[color];
  const svgSize = spacing[size];

  const SVGIcon = icons[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={12}>
        <SVGIcon
          color={svgColor}
          width={svgSize}
          height={svgSize}
          stroke={svgColor}
          {...props}
        />
      </Pressable>
    );
  }

  return (
    <SVGIcon
      color={svgColor}
      width={svgSize}
      height={svgSize}
      stroke={svgColor}
      {...props}
    />
  );
}
