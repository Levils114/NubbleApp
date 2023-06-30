import React from 'react';

import {Post} from '@modules';

import {Box, Icon, IconsNames, Text, TouchableOpacityBox} from '@components';

interface ActionProps {
  iconName: {
    default: IconsNames;
    marked: IconsNames;
  };
  text: number;
  isToSumOnPress?: boolean;
  onPress: () => void;
}

export function PostActions({
  favoriteCount,
  commentCount,
  reactionCount,
}: Pick<Post, 'favoriteCount' | 'commentCount' | 'reactionCount'>) {
  async function handleLikePost() {}

  async function handleBookmarKPost() {}

  return (
    <Box flexDirection="row" paddingHorizontal="s24" gap="s24">
      <Action
        text={reactionCount}
        iconName={{
          default: 'heart',
          marked: 'heartFill',
        }}
        isToSumOnPress
        onPress={handleLikePost}
      />

      <Action
        text={commentCount}
        iconName={{
          default: 'comment',
          marked: 'comment',
        }}
        onPress={() => {}}
      />

      <Action
        text={favoriteCount}
        iconName={{
          default: 'bookmark',
          marked: 'bookmarkFill',
        }}
        isToSumOnPress
        onPress={handleBookmarKPost}
      />
    </Box>
  );
}

function Action({iconName, text, isToSumOnPress, onPress}: ActionProps) {
  const [actionData, setActionData] = React.useState({
    isMarked: false,
    count: text,
  });

  function handleAction() {
    const isActionAlreadyMarked = actionData.isMarked;

    if (isToSumOnPress) {
      setActionData(prevValue => ({
        isMarked: !prevValue.isMarked,
        count: isActionAlreadyMarked
          ? actionData.count - 1
          : actionData.count + 1,
      }));
    }

    onPress();
  }

  return (
    <TouchableOpacityBox
      flexDirection="row"
      alignItems="center"
      onPress={handleAction}>
      <Icon
        name={actionData.isMarked ? iconName.marked : iconName.default}
        fillColor="carrotSecondary"
      />
      <Text ml="s4" bold preset="paragraphSmall">
        {actionData.count}
      </Text>
    </TouchableOpacityBox>
  );
}
