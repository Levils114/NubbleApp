/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, ViewProps, ScrollView, ScrollViewProps} from 'react-native';

interface ContainerProps extends ViewProps, ScrollViewProps {
  backgroundColor: string;
}

function ViewContainer({children, backgroundColor, ...props}: ContainerProps) {
  return (
    <View style={{backgroundColor, flex: 1}} {...props}>
      {children}
    </View>
  );
}

function ScrollViewContainer({
  children,
  backgroundColor,
  ...props
}: ContainerProps) {
  return (
    <ScrollView
      keyboardShouldPersistTaps="handled"
      style={{backgroundColor, flex: 1}}
      {...props}>
      {children}
    </ScrollView>
  );
}

export function getContainer(isScrollable: boolean) {
  return isScrollable ? ScrollViewContainer : ViewContainer;
}
