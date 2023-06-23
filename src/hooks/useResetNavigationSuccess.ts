import {useNavigation} from '@react-navigation/native';
import {SuccessScreenParams} from '../screens/auth/SuccessScreen/SuccessScreen';

export function useResetNavigationSuccess() {
  const navigation = useNavigation();

  function reset(params: SuccessScreenParams) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: 'LoginScreen',
        },
        {
          name: 'SuccessScreen',
          params,
        },
      ],
    });
  }

  return {reset};
}
