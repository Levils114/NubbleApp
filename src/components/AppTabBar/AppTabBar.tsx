import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, TouchableOpacityBox, Text, Icon, IconsNames} from '@components';
import {useAppSafeArea} from '@hooks';
import {AppBottomTabNavigator} from '@routes';

const hashIconsMap = (
  isFocused?: boolean,
): Record<keyof AppBottomTabNavigator, IconsNames> => ({
  HomeScreen: isFocused ? 'homeFill' : 'home',
  NewPostScreen: 'newPost',
  FavoritesScreen: isFocused ? 'bookmarkFill' : 'bookmark',
  ProfileScreen: isFocused ? 'profileFill' : 'profile',
});

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  const {bottom} = useAppSafeArea();

  return (
    <Box
      shadowColor="backgroundContrast"
      shadowOffset={{width: 0, height: -3}}
      shadowOpacity={0.05}
      shadowRadius={12}
      elevation={10}
      backgroundColor="background"
      flexDirection="row"
      justifyContent="flex-start"
      paddingHorizontal="s24"
      paddingTop="s12"
      style={{paddingBottom: bottom}}>
      {state.routes.map((route, index) => {
        const routeName = route.name as keyof AppBottomTabNavigator;
        const {options} = descriptors[route.key];
        const label = options.title;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({
              name: routeName,
              params: route.params,
              merge: true,
            });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacityBox
            key={route.name}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            alignItems="center"
            flex={1}>
            <Icon
              fillColor={isFocused ? 'primary' : 'backgroundContrast'}
              name={hashIconsMap(isFocused)[routeName]}
            />
            <Text
              mt="s4"
              preset="paragraphCaption"
              semibold
              color={isFocused ? 'primary' : 'backgroundContrast'}>
              {label}
            </Text>
          </TouchableOpacityBox>
        );
      })}
    </Box>
  );
}
