export {};

import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import {initializeStorage} from './../../services';
import {inMemoryStorage} from './../../services/Storage/implementation/jest/inMemoryStorage';

//@ts-ignore

jest.mock('@infra', () => {
  const requireActual = jest.requireActual('@infra');

  return {
    ...requireActual,
    QueryKeys: {
      PostList: 'PostList',
      PostCommentList: 'PostCommentList',
      UserGetInfo: 'UserGetInfo',
      IsUserNameAvailable: 'IsUserNameAvailable',
      IsEmailAvailable: 'IsEmailAvailable',
    },
  };
});

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
    useRoute: () => ({}),
  };
});

initializeStorage(inMemoryStorage);
