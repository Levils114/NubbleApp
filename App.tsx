import React from 'react';

import {lightTheme} from '@global/theme/lightTheme';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Routes} from '@routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <Routes />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
