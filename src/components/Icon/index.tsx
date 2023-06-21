import React from 'react';
import {SvgProps} from 'react-native-svg';

import {ThemeColors, ThemeSpacing} from '../../global/theme/lightTheme';
import {useAppTheme} from '../../hooks/useAppTheme';
import {icons} from './icons';

interface Props extends Omit<SvgProps, 'width' | 'height'> {
  name: keyof typeof icons;
  color?: ThemeColors;
  size?: ThemeSpacing;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size = 's20',
  ...props
}: Props) {
  const {colors, spacing} = useAppTheme();
  const svgColor = colors[color];
  const svgSpacing = spacing[size];

  const SVGIcon = icons[name];

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
