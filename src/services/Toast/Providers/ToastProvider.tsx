import React, {PropsWithChildren} from 'react';

import {IToast, ToastService} from '../@types/ToastTypes';

export const ToastContext = React.createContext({} as ToastService);

export function ToastProvider({children}: PropsWithChildren) {
  const [toast, setToast] = React.useState<ToastService['toast']>(null);

  function showToast(_toast: IToast) {
    setToast(_toast);
  }

  function hideToast() {
    setToast(null);
  }

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        hideToast,
      }}>
      {children}
    </ToastContext.Provider>
  );
}
