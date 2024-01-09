import React from 'react';

import {lightTheme} from '@global/theme/lightTheme';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {render, RenderOptions} from '@testing-library/react-native';

function AllProvidersWrapper({children}: {children: React.ReactNode}) {
  return (
    <NavigationContainer>
      <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
    </NavigationContainer>
  );
}

function customRender<T>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: AllProvidersWrapper, ...options});
}

export * from '@testing-library/react-native';
export {customRender as render};
