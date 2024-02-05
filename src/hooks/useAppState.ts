import React from 'react';
import {AppState} from 'react-native';

export function useAppState() {
  const [appStateVisible, setAppStateVisible] = React.useState(
    AppState.currentState,
  );

  React.useEffect(() => {
    const appStateListener = AppState.addEventListener('change', state =>
      setAppStateVisible(state),
    );

    return () => appStateListener.remove();
  }, []);

  return {
    appStateVisible,
  };
}
