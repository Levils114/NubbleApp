import React from 'react';

import {lightTheme} from '@global/theme/lightTheme';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Routes} from '@routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <Routes />

        <Toast />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
