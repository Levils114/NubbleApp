import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {UserType, useUsersGetList} from '@modules';
import {useSearchHistoryService} from '@services';
import {AppNativeStackScreenParams} from '@types';

import {Icon, ProfileUser, ScreenWrapper, TextInput} from '@components';
import {useAppTheme, useDebounce} from '@hooks';

import {SearchHistory} from './components/SearchHistory';

export function SearchScreen({}: AppNativeStackScreenParams<'SearchScreen'>) {
  const {colors} = useAppTheme();
  const {addUser} = useSearchHistoryService();

  const [search, setSearch] = React.useState('');
  const debouncedSearch = useDebounce(search);

  const {list} = useUsersGetList(debouncedSearch);

  function renderItem({item}: ListRenderItemInfo<UserType>) {
    return (
      <ProfileUser
        onPress={() => addUser(item)}
        user={item}
        mb="s16"
        userAvatarProps={{width: 48, height: 48}}
      />
    );
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
      {search.length === 0 ? (
        <SearchHistory />
      ) : (
        <FlatList
          data={list}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </ScreenWrapper>
  );
}
