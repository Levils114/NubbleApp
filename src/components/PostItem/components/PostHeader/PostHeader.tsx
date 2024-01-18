import React from 'react';

import {Post} from '@modules';

import {ProfileUser} from '@components';

export function PostHeader({author}: Pick<Post, 'author'>) {
  return <ProfileUser user={author} paddingHorizontal="s24" />;
}
