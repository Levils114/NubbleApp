import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {UserType, useUsersGetList} from '@modules';
import {AppNativeStackScreenParams} from '@types';

import {Icon, ProfileUser, ScreenWrapper, TextInput} from '@components';
import {useAppTheme, useDebounce} from '@hooks';

export function SearchScreen({}: AppNativeStackScreenParams<'SearchScreen'>) {
  const {colors} = useAppTheme();

  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search);

  const {list} = useUsersGetList(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<UserType>) {
    return <ProfileUser user={item} />;
  }

  return (
    <ScreenWrapper
      canGoBack
      HeaderComponent={
        <TextInput
          placeholder="Digite sua busca"
          value={search}
          onChangeText={setSearch}
          LeftComponent={
            <Icon name="search" stroke={colors.gray3} fill={colors.gray3} />
          }
        />
      }>
      <FlatList
        data={list}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </ScreenWrapper>
  );
}
