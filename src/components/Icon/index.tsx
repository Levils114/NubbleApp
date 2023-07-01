import React from 'react';
import {Pressable} from 'react-native';

import {ThemeColors, ThemeSpacing} from '@global/theme/lightTheme';
import {SvgProps} from 'react-native-svg';

import {useAppTheme} from '@hooks';

import {icons} from './icons';

export type IconsNames = keyof typeof icons;

export interface IconProps extends SvgProps {
  name: IconsNames;
  color?: ThemeColors;
  strokeColor?: ThemeColors;
  fillColor?: ThemeColors;
  width?: ThemeSpacing;
  height?: ThemeSpacing;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  strokeColor,
  fillColor,
  width = 's20',
  height = 's20',
  onPress,
  ...props
}: IconProps) {
  const {colors, spacing} = useAppTheme();
  const svgColor = colors[color];
  const svgStrokeColor = strokeColor && colors[strokeColor];
  const svgFillColor = fillColor && colors[fillColor];
  const svgWidth = spacing[width];
  const svgHeight = spacing[height];

  const SVGIcon = icons[name];

  if (onPress) {
    return (
      <Pressable onPress={onPress} hitSlop={12}>
        <SVGIcon
          color={svgColor}
          width={svgWidth}
          height={svgHeight}
          stroke={svgStrokeColor}
          fill={svgFillColor}
          {...props}
        />
      </Pressable>
    );
  }

  return (
    <SVGIcon
      color={svgColor}
      width={svgWidth}
      height={svgHeight}
      stroke={svgStrokeColor}
      fill={svgFillColor}
      {...props}
    />
  );
}
