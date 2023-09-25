import React from 'react';

import {ToastService} from './@types/ToastTypes';
import {ToastContext} from './Providers/ToastProvider';

export function useToastContext(): ToastService {
  const toastContext = React.useContext(ToastContext);

  if (!toastContext) {
    throw new Error('Component is outside ToastProvider scope');
  }

  return toastContext;
}
