import React from 'react';
import {Pressable} from 'react-native';

import {Theme} from '@global/theme/lightTheme';
import {UserType} from '@modules';
import {useNavigation} from '@react-navigation/native';
import {BoxProps} from '@shopify/restyle';

import {Box, Text, UserAvatar} from '@components';

interface ProfileUser extends BoxProps<Theme> {
  user: Pick<UserType, 'id' | 'profileUrl' | 'username'>;
}

export function ProfileUser({user, ...boxProps}: ProfileUser) {
  const {navigate} = useNavigation();

  function navigateToUsersProfileScreen() {
    navigate('UsersProfileScreen', {userId: user.id});
  }

  return (
    <Pressable onPress={navigateToUsersProfileScreen}>
      <Box flexDirection="row" alignItems="center" {...boxProps}>
        <UserAvatar userAvatar={user.profileUrl} />

        <Text ml="s12" semibold>
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}
