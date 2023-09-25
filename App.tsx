import React from 'react';

import {lightTheme} from '@global/theme/lightTheme';
import {ToastProvider} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Routes} from '@routes';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <ToastProvider>
          <Routes />
          <Toast />
        </ToastProvider>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
