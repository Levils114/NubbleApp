import React from 'react';
import {Image} from 'react-native';

import {Post} from '@modules';

export function PostImage({imageURL}: Pick<Post, 'imageURL'>) {
  return <Image height={250} source={{uri: imageURL}} />;
}
