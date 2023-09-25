export interface IToast {
  message: string;
  type: 'success' | 'error';
  position?: 'top' | 'bottom';
  duration?: number;
  action?: {
    title: string;
    onPress(): void;
  };
}

export interface ToastService {
  toast: IToast | null;
  showToast(toast: IToast): void;
  hideToast(): void;
}
