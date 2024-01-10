import {lightTheme} from '@global/theme/lightTheme';
import {renderHook} from '@test';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {useAppSafeArea} from '../useAppSafeArea';

jest.mock('react-native-safe-area-context');

const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  it('should return minimum requirement when the value was less than minimum requirimented', () => {
    //Given
    const top = 5;
    mockedUseSafeAreaInsets.mockImplementationOnce(() => ({top, bottom: 5}));
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(lightTheme.spacing.s24 + top);
    expect(result.current.bottom).toEqual(lightTheme.spacing.s24);
  });

  it('should return safe are space when the value was greater than minimum requirimented', () => {
    //Given
    const top = 40;
    const bottom = 40;
    mockedUseSafeAreaInsets.mockImplementationOnce(() => ({top, bottom}));
    const {result} = renderHook(() => useAppSafeArea());

    expect(result.current.top).toEqual(lightTheme.spacing.s24 + top);
    expect(result.current.bottom).toEqual(bottom);
  });
});
