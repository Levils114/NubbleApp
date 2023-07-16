/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import {Post, postService} from '..';

interface GetPostListParams {
  isMounted?: boolean;
}

export function usePostListCases() {
  const [postList, setPostList] = React.useState<Post[]>([]);
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

      const {data, meta} = await postService.getPostList(1);

      if (params?.isMounted) {
        setPostList(data);

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

      const {data, meta} = await postService.getPostList(page);

      setPostList(prevValue => [...prevValue, ...data]);

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
    postList,
    error,
    isLoading,
    refresh: initialFetch,
    fetchNextPage,
  };
}
