import React from 'react';
import {Pressable} from 'react-native';

import {Post} from '@modules';
import {useNavigation} from '@react-navigation/native';

import {Box, Text, UserAvatar} from '@components';

export function PostHeader({author}: Pick<Post, 'author'>) {
  const {navigate} = useNavigation();

  function navigateToUsersProfileScreen() {
    navigate('UsersProfileScreen', {userId: author.id});
  }

  return (
    <Pressable onPress={navigateToUsersProfileScreen}>
      <Box flexDirection="row" paddingHorizontal="s24" alignItems="center">
        <UserAvatar userAvatar={author.profileURL} />

        <Text ml="s12" semibold>
          {author.userName}
        </Text>
      </Box>
    </Pressable>
  );
}
