import {create} from 'zustand';

import {ToastService} from './@types/ToastTypes';

const useToastStore = create<ToastService>(set => ({
  toast: null,
  showToast: toast => set({toast}),
  hideToast: () => set({toast: null}),
}));

export function useToastZustand(): Pick<ToastService, 'toast'> {
  const {toast} = useToastStore();
  return {
    toast,
  };
}

export function useToastServiceZustand(): Pick<
  ToastService,
  'showToast' | 'hideToast'
> {
  const {showToast, hideToast} = useToastStore();

  return {
    showToast,
    hideToast,
  };
}
