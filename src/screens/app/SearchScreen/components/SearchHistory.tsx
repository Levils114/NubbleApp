import React from 'react';
import {FlatList, ListRenderItemInfo} from 'react-native';

import {UserType} from '@modules';
import {useSearchHistory, useSearchHistoryService} from '@services';

import {Box, Icon, ProfileUser, Text} from '@components';

export function SearchHistory() {
  const userList = useSearchHistory();
  const {deleteUser} = useSearchHistoryService();

  function renderItem({item}: ListRenderItemInfo<UserType>) {
    return (
      <ProfileUser
        user={item}
        mb="s16"
        userAvatarProps={{width: 48, height: 48}}
        RightComponent={
          <Icon
            name="trash"
            onPress={() => deleteUser(item.id)}
            testID="trash-button"
          />
        }
      />
    );
  }

  return (
    <Box>
      <FlatList
        ListHeaderComponent={
          <Text preset="headingMedium" mb="s16">
            Buscas recentes
          </Text>
        }
        data={userList}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
      />
    </Box>
  );
}
