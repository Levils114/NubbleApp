import React from 'react';
import {Linking, Platform} from 'react-native';

import {PermissionName, usePermission} from '@services';

import {ActivityIndicator} from '../ActivyIndicator';
import {Box} from '../Box';
import {Button} from '../Button';
import {ScreenWrapper} from '../ScreenWrapper/ScreenWrapper';
import {Text} from '../Text';

interface IPermissionManager {
  permissionName: PermissionName;
  description: string;
  children: React.ReactElement;
}

export function PermissionManager({
  permissionName,
  description,
  children,
}: IPermissionManager) {
  const {status, isLoading} = usePermission(permissionName);

  if (status === 'granted') {
    return children;
  }

  return (
    <ScreenWrapper flex={1} canGoBack>
      <Box justifyContent="center" alignItems="center">
        <Text preset="headingSmall" textAlign="center" color="error">
          {description}
        </Text>
        {isLoading && <ActivityIndicator color="primary" />}
        {status === 'unavailable' && (
          <Text
            preset="paragraphMedium"
            color="error"
            bold
            marginVertical="s16"
            textAlign="center">
            Recurso indiponível
          </Text>
        )}
        {status === 'never_ask_again' && (
          <Box>
            {Platform.OS === 'android' && (
              <Text
                preset="paragraphMedium"
                color="error"
                bold
                marginVertical="s16"
                textAlign="center">
                É necessário abrir e fechar o App novamente após alterar as
                configurações
              </Text>
            )}
            <Button
              text="Abrir Configurações"
              onPress={Linking.openSettings}
              mt="s16"
            />
          </Box>
        )}
      </Box>
    </ScreenWrapper>
  );
}
