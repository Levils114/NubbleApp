import React from 'react';
import {Image, ImageProps} from 'react-native';

interface UserAvatarProps extends Omit<ImageProps, 'source'> {
  userAvatar: string;
}

export function UserAvatar({userAvatar, ...props}: UserAvatarProps) {
  return (
    <Image
      width={32}
      height={32}
      borderRadius={14}
      source={{uri: userAvatar}}
      {...props}
    />
  );
}
