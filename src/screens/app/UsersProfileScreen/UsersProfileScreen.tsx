import React from 'react';

import {useUserGetInfo} from '@modules';
import {AppNativeStackScreenParams} from '@types';

import {
  ActivityIndicator,
  Box,
  ScreenWrapper,
  Text,
  UserAvatar,
} from '@components';

export function UsersProfileScreen({
  route,
}: AppNativeStackScreenParams<'UsersProfileScreen'>) {
  const params = route.params;
  const {user, isLoading, error} = useUserGetInfo(params?.userId || 1);

  if (error) {
    return null;
  }

  return (
    <ScreenWrapper canGoBack>
      {isLoading && <ActivityIndicator />}
      {!isLoading && (
        <Box alignItems="center">
          <UserAvatar
            userAvatar={user?.profileUrl}
            width={64}
            height={64}
            borderRadius={24}
          />

          <Text mt="s16" mb="s4" preset="headingMedium">
            {user?.fullName}
          </Text>
          <Text color="gray1" preset="paragraphLarge">
            @{user?.username}
          </Text>
        </Box>
      )}
    </ScreenWrapper>
  );
}
