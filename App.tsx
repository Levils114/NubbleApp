import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from '@shopify/restyle';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button} from './src/components/Button';
import {Text} from './src/components/Text';
import {lightTheme} from './src/global/theme/lightTheme';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
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
      </SafeAreaView>
    </ThemeProvider>
  );
}

export default App;
