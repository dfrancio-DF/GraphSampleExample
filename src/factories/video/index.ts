import {VideoFactoryParamsType, VideoFactoryType} from './types';

export function videoFactory(
  params: VideoFactoryParamsType,
): VideoFactoryType | null {
  if (!params) {
    return null;
  }

  const {id, snippet} = params;

  return {
    id: id.videoId ?? '',
    title: snippet?.title ?? '',
    thumbnail: snippet?.thumbnails?.default?.url ?? '',
    channelTitle: snippet?.channelTitle ?? '',
  };
}
