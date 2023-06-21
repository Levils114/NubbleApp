import React from 'react';
import {ViewProps} from 'react-native';

import {useAppSafeArea} from '../../hooks/useAppSafeArea';

import {BoxProps} from '@shopify/restyle';

import {Theme} from '../../global/theme/lightTheme';
import {Box} from '../Box';
import {Icon} from '../Icon';
import {Text} from '../Text';

interface ScreenWrapper extends BoxProps<Theme>, ViewProps {
  canGoBack?: boolean;
}

export function ScreenWrapper({children, canGoBack, ...props}: ScreenWrapper) {
  const {top} = useAppSafeArea();

  return (
    <Box paddingHorizontal="s24" style={{paddingTop: top}} {...props}>
      {canGoBack && (
        <Box mb="s24" flexDirection="row" alignItems="center">
          <Icon name="arrowLeft" color="primary" />
          <Text ml="s8" semibold>
            Voltar
          </Text>
        </Box>
      )}
      {children}
    </Box>
  );
}
