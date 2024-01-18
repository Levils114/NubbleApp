import {useEffect, useState} from 'react';

import {QueryKey, useInfiniteQuery} from '@tanstack/react-query';
import {Page} from 'src/@types';

export interface UsePaginatedListResult<TData> {
  list: TData[];
  isError: boolean | null;
  isLoading: boolean;
  hasNextPage: boolean;
  refresh: () => void;
  fetchNextPage: () => void;
}

interface PaginatedListOptions {
  enabled?: boolean;
  staleTime?: number;
}

export function usePaginatedList<Data>(
  queryKey: QueryKey,
  getList: (page: number) => Promise<Page<Data>>,
  paginatedOptions?: PaginatedListOptions,
): UsePaginatedListResult<Data> {
  const [list, setList] = useState<Data[]>([]);

  const query = useInfiniteQuery({
    queryKey,
    queryFn: ({pageParam = 1}) => getList(pageParam),
    getNextPageParam: ({meta}: Page<Data>) =>
      meta?.hasNextPage ? meta?.currentPage + 1 : undefined,
    ...paginatedOptions,
  });

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<Data[]>((prev, curr) => {
        return [...prev, ...curr.data];
      }, []);
      setList(newList);
    }
  }, [query.data]);

  return {
    list,
    isError: query.isError,
    isLoading: query.isLoading,
    refresh: query.refetch,
    fetchNextPage: query.fetchNextPage,
    hasNextPage: !!query.hasNextPage,
  };
}
