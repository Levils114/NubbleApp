import React from 'react';
import {TextStyle, TextProps as RNTextProps} from 'react-native';

import {Theme} from '@global/theme/lightTheme';
import {createText, TextProps as RestyleTextProps} from '@shopify/restyle';

export interface TextProps extends RestyleTextProps<Theme>, RNTextProps {
  preset?: TypographyVariants;
  bold?: boolean;
  semibold?: boolean;
  italic?: boolean;
}

type TypographyVariants =
  | 'headingLarge'
  | 'headingMedium'
  | 'headingSmall'
  | 'paragraphLarge'
  | 'paragraphMedium'
  | 'paragraphSmall'
  | 'paragraphCaption'
  | 'paragraphCaptionSmall';

export const textFontSizeMap: Record<TypographyVariants, TextStyle> = {
  headingLarge: {fontSize: 32, lineHeight: 38.4},
  headingMedium: {fontSize: 22, lineHeight: 26.4},
  headingSmall: {fontSize: 18, lineHeight: 23.4},

  paragraphLarge: {fontSize: 18, lineHeight: 25.2},
  paragraphMedium: {fontSize: 16, lineHeight: 22.4},
  paragraphSmall: {fontSize: 14, lineHeight: 19.6},

  paragraphCaption: {fontSize: 12, lineHeight: 16.8},
  paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

export const textFontFamilyMap = {
  satoshiBlack: 'Satoshi-Black',
  satoshiBlackItalic: 'Satoshi-BlackItalic',
  satoshiBold: 'Satoshi-Bold',
  satoshiBoldItalic: 'Satoshi-BoldItalic',
  satoshiItalic: 'Satoshi-Italic',
  satoshiLight: 'Satoshi-Light',
  satoshiLightItalic: 'Satoshi-LightItalic',
  satoshiMedium: 'Satoshi-Medium',
  satoshiMediumItalic: 'Satoshi-MediumItalic',
  satoshiRegular: 'Satoshi-Regular',
};

function getFontFamily(
  preset: TypographyVariants,
  bold?: boolean,
  italic?: boolean,
  semibold?: boolean,
) {
  const isBold = bold || preset?.includes('heading');

  switch (true) {
    case isBold && italic:
      return textFontFamilyMap.satoshiBoldItalic;
    case isBold:
      return textFontFamilyMap.satoshiBold;
    case italic:
      return textFontFamilyMap.satoshiItalic;
    case semibold && italic:
      return textFontFamilyMap.satoshiMediumItalic;
    case semibold:
      return textFontFamilyMap.satoshiMedium;
    default:
      return textFontFamilyMap.satoshiRegular;
  }
}

const RestyleText = createText<Theme>();

export function Text({
  children,
  style,
  preset = 'paragraphMedium',
  bold,
  italic,
  semibold,
  ...props
}: TextProps) {
  const styleMapped = textFontSizeMap[preset];
  const fontFamily = getFontFamily(preset, bold, italic, semibold);

  return (
    <RestyleText
      color="backgroundContrast"
      style={[styleMapped, {fontFamily}, style]}
      {...props}>
      {children}
    </RestyleText>
  );
}
