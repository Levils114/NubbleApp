import {QueryKeys} from '@infra';
import {useQuery} from '@tanstack/react-query';

import {useDebounce} from '@hooks';

import {authServices} from './../services/authServices';

export enum ValuesToValidate {
  EMAIL = 'email',
  USERNAME = 'username',
}

interface Params {
  value: string;
  enabled: boolean;
  valueToValidate: ValuesToValidate;
}

const functionsToRequest: Record<ValuesToValidate, any> = {
  [ValuesToValidate.EMAIL]: authServices.isEmailAvailable,
  [ValuesToValidate.USERNAME]: authServices.isUserNameAvailable,
};

const keys: Record<ValuesToValidate, QueryKeys> = {
  [ValuesToValidate.EMAIL]: QueryKeys.IsEmailAvailable,
  [ValuesToValidate.USERNAME]: QueryKeys.IsUserNameAvailable,
};

export function useAuthIsValueAvailable({
  value,
  enabled,
  valueToValidate,
}: Params) {
  const valueDebounced = useDebounce(value, 1500);

  const {data, isFetching} = useQuery({
    queryKey: [keys[valueToValidate], valueDebounced],
    queryFn: () => functionsToRequest[valueToValidate](valueDebounced),
    retry: false,
    staleTime: 20000,
    enabled: enabled && valueDebounced.length > 0,
  });

  const isDebouncing = valueDebounced !== value;

  return {
    isUnavailable: data === false,
    isLoading: isFetching || isDebouncing,
  };
}
