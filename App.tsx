import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from './src/components/Button';
import {Text} from './src/components/Text';
import {lightTheme} from './src/global/theme/lightTheme';
import {Icon} from './src/components/Icon';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    marginHorizontal: 24,
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <SafeAreaView style={backgroundStyle}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <Text preset="headingMedium">TEST</Text>
        <Button text="Login" />
        <Button text="Login" preset="outline" marginTop="s20" />
        <Button loading text="Login" marginTop="s20" />
        <Button loading text="Login" preset="outline" marginTop="s20" />
        <Button text="Login" marginTop="s20" disabled />
        <Icon name="eyeOn" />
        <Icon name="eyeOff" />
        <Icon name="comment" />
        <Icon name="heart" />
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
