import React from 'react';

import {UserType} from '@modules';
import {useNavigation} from '@react-navigation/native';
import {GestureResponderEvent} from 'react-native/types';

import {Text, UserAvatar} from '@components';

import {Box, PressableBox, PressableBoxProps} from '../Box';
import {UserAvatarProps} from '../UserAvatar/UserAvatar';

interface ProfileUser extends PressableBoxProps {
  user: Pick<UserType, 'id' | 'profileUrl' | 'username'>;
  userAvatarProps?: UserAvatarProps;
  RightComponent?: React.ReactElement;
}

export function ProfileUser({
  user,
  onPress,
  userAvatarProps,
  RightComponent,
  ...pressabledBoxProps
}: ProfileUser) {
  const {navigate} = useNavigation();

  function handleOnPress(event: GestureResponderEvent) {
    if (onPress) {
      onPress(event);
    }

    navigate('UsersProfileScreen', {userId: user.id});
  }

  return (
    <PressableBox
      onPress={handleOnPress}
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      {...pressabledBoxProps}>
      <Box flexDirection="row" alignItems="center">
        <UserAvatar {...userAvatarProps} userAvatar={user.profileUrl} />

        <Text ml="s12" semibold>
          {user.username}
        </Text>
      </Box>

      {RightComponent}
    </PressableBox>
  );
}
