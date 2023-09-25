import {ToastService} from './@types/ToastTypes';
import {useToastContext} from './useToastContext';

export function useToast(): ToastService {
  return useToastContext();
}
