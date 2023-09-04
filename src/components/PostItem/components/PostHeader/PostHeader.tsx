import React from 'react';

import {Post} from '@modules';

import {Box, Text, UserAvatar} from '@components';

export function PostHeader({author}: Pick<Post, 'author'>) {
  return (
    <Box flexDirection="row" paddingHorizontal="s24" alignItems="center">
      <UserAvatar userAvatar={author.profileURL} />

      <Text ml="s12" semibold>
        {author.userName}
      </Text>
    </Box>
  );
}
