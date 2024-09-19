import AsyncStorage from '@react-native-async-storage/async-storage';

class _AsyncStorageService {
  async getData(key: string) {
    try {
      const value = await AsyncStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async storeData(key: string, value: any) {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  }

  async removeData(key: string) {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error(error);
    }
  }
}

export const AsyncStorageService = new _AsyncStorageService();
