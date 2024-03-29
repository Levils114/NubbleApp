/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {useNavigation} from '@react-navigation/native';

import {Box, Icon} from '@components';
import {useAppSafeArea} from '@hooks';

export function HomeHeader() {
  const {top} = useAppSafeArea();
  const {navigate} = useNavigation();

  function handleGoToSearch() {
    navigate('SearchScreen');
  }

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="s24"
      paddingBottom="s32"
      style={{paddingTop: top}}>
      <Icon
        width="s70"
        height="s16"
        name="logoSimples"
        fillColor="backgroundContrast"
      />

      <Box flexDirection="row">
        <Icon name="search" onPress={handleGoToSearch} />
        <Icon name="bell" style={{marginHorizontal: 24}} onPress={() => {}} />
        <Icon name="chat" onPress={() => {}} />
      </Box>
    </Box>
  );
}
