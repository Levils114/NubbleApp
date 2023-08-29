/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {Page} from 'src/@types/Pages';

interface GetPostListParams {
  isMounted?: boolean;
}

export function usePaginatedList<Data>(
  getList: (page: number) => Promise<Page<Data>>,
) {
  const [list, setList] = React.useState<Data[]>([]);
  const [page, setPage] = React.useState(1);
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    let isMounted = true;

    initialFetch({isMounted});

    return () => {
      isMounted = false;
    };
  }, []);

  async function initialFetch(params?: GetPostListParams): Promise<void> {
    try {
      if (error) {
        setError(false);
      }

      const {data, meta} = await getList(1);

      if (params?.isMounted) {
        setList(data);

        if (meta.hasNextPage) {
          setPage(2);
        } else {
          setHasNextPage(false);
        }
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  async function fetchNextPage() {
    if (isLoading || !hasNextPage) {
      return;
    }

    try {
      setIsLoading(true);

      const {data, meta} = await getList(page);

      setList(prevValue => [...prevValue, ...data]);

      if (meta.hasNextPage) {
        setPage(prevValue => prevValue + 1);
      } else {
        setHasNextPage(false);
      }
    } catch (err) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    list,
    error,
    isLoading,
    refresh: initialFetch,
    fetchNextPage,
  };
}
