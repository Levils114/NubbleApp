import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {ThemeProvider} from '@shopify/restyle';
import {lightTheme} from './src/global/theme/lightTheme';
//import {LoginScreen} from './src/screens/auth/LoginScreen/LoginScreen';
import {SignUpScreen} from './src/screens/auth/SignUpScreen/SignUpScreen';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={lightTheme}>
        <SignUpScreen />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
