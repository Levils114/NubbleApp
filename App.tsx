import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider} from '@shopify/restyle';
import {lightTheme} from './src/global/theme/lightTheme';
import {Routes} from './src/routes/Routes.routes';

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
