import {ToastService} from './@types/ToastTypes';
import {useToastServiceZustand, useToastZustand} from './useToastZustand';

export function useToast(): Pick<ToastService, 'toast'> {
  return useToastZustand();
}

export function useToastService(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  return useToastServiceZustand();
}
