import React from 'react';

import {lightTheme} from '@global/theme/lightTheme';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeProvider} from '@shopify/restyle';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {
  render,
  renderHook,
  RenderHookOptions,
  RenderHookResult,
  RenderOptions,
} from '@testing-library/react-native';

const queryClient = new QueryClient({
  logger: {
    log: console.log,
    warn: console.warn,
    error: process.env.NODE_ENV === 'test' ? () => {} : console.error,
  },
  defaultOptions: {
    queries: {
      retry: false,
      cacheTime: Infinity,
    },
    mutations: {
      retry: false,
      cacheTime: Infinity,
    },
  },
});

function AllProvidersWrapper({children}: {children: React.ReactNode}) {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <ThemeProvider theme={lightTheme}>{children}</ThemeProvider>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

function customRender<T>(
  component: React.ReactElement<T>,
  options?: Omit<RenderOptions, 'wrapper'>,
) {
  return render(component, {wrapper: AllProvidersWrapper, ...options});
}

function customRendeHook<Result, Props>(
  renderCallback: (props: Props) => Result,
  options?: RenderHookOptions<Props>,
): RenderHookResult<Result, Props> {
  return renderHook(renderCallback, {wrapper: AllProvidersWrapper, ...options});
}

export * from '@testing-library/react-native';
export {customRender as render, customRendeHook as renderHook};
