import {CameraRoll} from '@react-native-camera-roll/camera-roll';

import {PhotoListPaginated} from './cameraRollTypes';

async function getPhotos(cursor?: string): Promise<PhotoListPaginated> {
  const photosPage = await CameraRoll.getPhotos({first: 15, after: cursor});

  const photoList = photosPage.edges.map(edge => edge.node.image.uri);

  return {
    photoList,
    cursor: photosPage.page_info.end_cursor,
    hasNextPage: photosPage.page_info.has_next_page,
  };
}

export const cameraRollService = {getPhotos};
