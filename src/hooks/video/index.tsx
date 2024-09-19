import {useState} from 'react';
import {VideoFactoryType} from '../../factories/types';
import {ENV} from '../../config';
import {videoFactory} from '../../factories';
import {api} from '../../services';

export function useVideo() {
  const [videos, setVideos] = useState<VideoFactoryType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchVideosByTag(tag: string) {
    setLoading(true);

    api
      .get(
        `${ENV.URLS.SEARCH_VIDEOS}?part=snippet&maxResults=10&q=${tag}&type=video&key=${ENV.KEYS.YOUTUBE}`,
      )
      .then(({data}) => data.items.map(videoFactory))
      .then(setVideos)
      .catch(err => {
        console.error(err);
        setError(true);
      })
      .finally(() => setLoading(false));
  }

  return {
    videos,
    isFetchingVideos: loading,
    hasErrorFetchingVideos: error,
    fetchVideosByTag,
  };
}
