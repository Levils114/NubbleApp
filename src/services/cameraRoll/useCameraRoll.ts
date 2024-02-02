import {useEffect, useState} from 'react';

import {QueryKeys} from '@infra';
import {useInfiniteQuery} from '@tanstack/react-query';

import {cameraRollService} from './cameraRollService';
import {PhotoListPaginated} from './cameraRollTypes';

export function useCameraRoll(
  hasPermission: boolean,
  onInitialLoad?: (image: string) => void,
) {
  const [photosList, setPhotosList] = useState<string[]>([]);

  const query = useInfiniteQuery<PhotoListPaginated>({
    queryKey: [QueryKeys.CameraRollList],
    queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
    getNextPageParam: ({cursor}) => cursor,
    enabled: hasPermission,
  });

  function fetchNextPage() {
    if (hasPermission) {
      query.fetchNextPage();
    }
  }

  useEffect(() => {
    if (query.data) {
      const newList = query.data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setPhotosList(newList);

      if (query.data.pages.length === 1 && onInitialLoad) {
        onInitialLoad(newList[0]);
      }
    }
  }, [query.data, onInitialLoad]);

  return {
    photosList,
    hasNextPage: query.hasNextPage,
    fetchNextPage: () => fetchNextPage(),
  };
}
