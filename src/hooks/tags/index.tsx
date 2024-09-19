import {useEffect, useState} from 'react';
import {ENV} from '../../config';
import {AsyncStorageService} from '../../services';

export function useTags() {
  const [tags, setTags] = useState<string[]>([]);

  async function getTagsFromStorage() {
    const tagsList = await AsyncStorageService.getData(
      ENV.KEYS.TAG_STORAGE_TOKEN,
    );

    if (tagsList) {
      setTags(tagsList);
    }
  }

  async function addTagToStorage(tag: string) {
    const newTags = [tag].concat(tags.filter(t => t !== tag));

    await AsyncStorageService.storeData(ENV.KEYS.TAG_STORAGE_TOKEN, newTags);

    setTags(newTags);
  }

  async function clearTags() {
    await AsyncStorageService.removeData(ENV.KEYS.TAG_STORAGE_TOKEN);

    setTags([]);
  }

  useEffect(() => {
    getTagsFromStorage();
  }, []);

  return {addTagToStorage, clearTags, tags};
}
