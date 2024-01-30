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

  const {data, hasNextPage, fetchNextPage} =
    useInfiniteQuery<PhotoListPaginated>({
      queryKey: [QueryKeys.CameraRollList],
      queryFn: ({pageParam}) => cameraRollService.getPhotos(pageParam),
      getNextPageParam: ({cursor}) => cursor,
      enabled: hasPermission,
    });

  useEffect(() => {
    if (data) {
      const newList = data.pages.reduce<string[]>((prev, curr) => {
        return [...prev, ...curr.photoList];
      }, []);
      setPhotosList(newList);

      if (data.pages.length === 1 && onInitialLoad) {
        onInitialLoad(newList[0]);
      }
    }
  }, [data, onInitialLoad]);

  return {
    photosList,
    hasNextPage,
    fetchNextPage: () => fetchNextPage(),
  };
}
