import {TouchableOpacityBoxProps} from '../Box';
import {TextProps} from '../Text';

export type ButtonPresets = 'primary' | 'outline' | 'ghost';

interface ButtonUI {
  container: TouchableOpacityBoxProps;
  content: TextProps;
}

export const buttonPresets: Record<
  ButtonPresets,
  {
    default: ButtonUI;
    disabled: ButtonUI;
  }
> = {
  primary: {
    default: {
      container: {
        backgroundColor: 'buttonPrimary',
      },
      content: {
        color: 'primaryContrast',
      },
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
      },
      content: {
        color: 'gray2',
      },
    },
  },
  outline: {
    default: {
      container: {
        borderWidth: 1,
        borderColor: 'primary',
        backgroundColor: 'transparent',
      },
      content: {
        color: 'primary',
      },
    },
    disabled: {
      container: {
        borderWidth: 1,
        borderColor: 'gray4',
        backgroundColor: 'transparent',
      },
      content: {
        color: 'gray2',
      },
    },
  },
  ghost: {
    default: {
      container: {
        backgroundColor: 'white70',
        height: 40,
      },
      content: {
        color: 'grayBlack',
        preset: 'paragraphSmall',
        bold: false,
      },
    },
    disabled: {
      container: {
        backgroundColor: 'gray4',
        height: 40,
      },
      content: {
        color: 'gray2',
      },
    },
  },
};
