import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {AppNativeStackScreenParams} from '@types';

import {Box, Icon, PermissionManager} from '@components';
import {useAppSafeArea} from '@hooks';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({
  navigation,
}: AppNativeStackScreenParams<'CameraScreen'>) {
  const {top} = useAppSafeArea();

  const [isFlashOn, setIsFlashOn] = React.useState(false);

  async function toggleFlashOn() {
    setIsFlashOn(prevValue => !prevValue);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar sua camera">
      <Box flex={1}>
        <Box backgroundColor="grayWhite" style={StyleSheet.absoluteFill} />
        <Box flex={1} justifyContent="space-between">
          <Box
            backgroundColor="grayBlack60"
            height={CONTROL_HEIGHT - CONTROL_DIFF}
            paddingHorizontal="s24"
            flexDirection="row"
            justifyContent="space-between"
            style={{paddingTop: top}}>
            <Icon name="arrowLeft" fill="white" onPress={navigation.goBack} />
            <Icon
              name={isFlashOn ? 'flashOn' : 'flashOff'}
              fill="white"
              onPress={toggleFlashOn}
            />
            <Box width={20} />
          </Box>

          <Box
            backgroundColor="grayBlack60"
            height={CONTROL_HEIGHT + CONTROL_DIFF}
            alignItems="center"
            justifyContent="center">
            <Icon name="cameraClick" width="s80" height="s80" />
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}
