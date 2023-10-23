import React from 'react';

export interface UseMutationOptions<IResponse> {
  onSuccess?: (data?: IResponse) => void;
  errorMessage?: string;
}

/**
 * @deprecated use useMutation from @tanstack/react-query
 */

export function useMutation<IVariables, IResponse>(
  mutationFn: (variables: IVariables) => Promise<IResponse>,
  options?: UseMutationOptions<IResponse>,
) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<unknown>();

  async function mutate(variables: IVariables): Promise<IResponse | undefined> {
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFn(variables);

      if (options?.onSuccess) {
        options.onSuccess(response);
      }

      return response;
    } catch (err) {
      setError(options?.errorMessage || err);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    isLoading,
    error,
    mutate,
  };
}
