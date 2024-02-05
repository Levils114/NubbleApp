import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

import {useIsFocused} from '@react-navigation/native';
import {AppNativeStackScreenParams} from '@types';
import {
  Camera,
  Templates,
  useCameraDevice,
  useCameraFormat,
} from 'react-native-vision-camera';

import {Box, Icon, PermissionManager} from '@components';
import {useAppSafeArea, useAppState} from '@hooks';

const CAMERA_VIEW = Dimensions.get('screen').width;
const CONTROL_HEIGHT = (Dimensions.get('screen').height - CAMERA_VIEW) / 2;
const CONTROL_DIFF = 30;

export function CameraScreen({
  navigation,
}: AppNativeStackScreenParams<'CameraScreen'>) {
  const cameraRef = React.useRef<Camera>(null);

  const device = useCameraDevice('back', {
    physicalDevices: [
      'ultra-wide-angle-camera',
      'telephoto-camera',
      'wide-angle-camera',
    ],
  });
  const cameraFormat = useCameraFormat(device, Templates.Instagram);
  const isFocused = useIsFocused();
  const {appStateVisible} = useAppState();
  const {top} = useAppSafeArea();

  const [isCameraReady, setIsCameraReady] = React.useState(false);
  const [isFlashOn, setIsFlashOn] = React.useState(false);

  async function takePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePhoto({
        flash: isFlashOn ? 'on' : 'off',
        qualityPrioritization: 'quality',
      });

      navigation.navigate('PublishPostScreen', {
        imageUri: `file://${photo.path}`,
      });
    }
  }

  async function toggleFlashOn() {
    setIsFlashOn(prevValue => !prevValue);
  }

  return (
    <PermissionManager
      permissionName="camera"
      description="Permita o Nubble acessar sua camera">
      <Box flex={1}>
        {device && (
          <Camera
            ref={cameraRef}
            format={cameraFormat}
            isActive={appStateVisible === 'active' && isFocused}
            device={device}
            style={StyleSheet.absoluteFill}
            onInitialized={() => setIsCameraReady(true)}
            photo
            enableHighQualityPhotos
          />
        )}

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
            {isCameraReady && (
              <Icon
                name="cameraClick"
                width="s80"
                height="s80"
                onPress={takePhoto}
              />
            )}
          </Box>
        </Box>
      </Box>
    </PermissionManager>
  );
}
