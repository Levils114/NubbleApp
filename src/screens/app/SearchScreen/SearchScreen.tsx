import React from 'react';

import {AppNativeStackScreenParams} from '@types';

import {Icon, ScreenWrapper, Text, TextInput} from '@components';
import {useAppTheme} from '@hooks';

export function SearchScreen({}: AppNativeStackScreenParams<'SearchScreen'>) {
  const {colors} = useAppTheme();

  const [search, setSearch] = React.useState('');

  return (
    <ScreenWrapper
      canGoBack
      HeaderComponent={
        <TextInput
          value={search}
          onChangeText={setSearch}
          LeftComponent={
            <Icon name="search" stroke={colors.gray3} fill={colors.gray3} />
          }
        />
      }>
      <Text>Search Screen</Text>
    </ScreenWrapper>
  );
}
