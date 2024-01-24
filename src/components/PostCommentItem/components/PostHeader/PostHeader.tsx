import React from 'react';
import {Image} from 'react-native';

import {Post} from '@modules';

import {Box, Text} from '@components';

export function PostHeader({author}: Pick<Post, 'author'>) {
  return (
    <Box flexDirection="row" paddingHorizontal="s24" alignItems="center">
      <Image
        width={32}
        height={32}
        borderRadius={14}
        source={{uri: author.profileUrl}}
      />
      <Text ml="s12" semibold>
        {author.username}
      </Text>
    </Box>
  );
}
