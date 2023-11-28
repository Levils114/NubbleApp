import React from 'react';

import {lightTheme} from '@global/theme/lightTheme';
import {
  ToastProvider,
  AuthCredentialsProvider,
  initializeStorage,
  mmkvStorage,
} from '@services';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Toast} from '@components';
import {Routes} from '@routes';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

initializeStorage(mmkvStorage);

const queryClient = new QueryClient();

function App(): JSX.Element {
  return (
    <AuthCredentialsProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <ThemeProvider theme={lightTheme}>
            <ToastProvider>
              <Routes />
              <Toast />
            </ToastProvider>
          </ThemeProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AuthCredentialsProvider>
  );
}

export default App;
