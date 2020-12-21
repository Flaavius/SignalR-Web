
export const enum StorageKey {
  Token = 'token',
  UserInfo = "user_info"
};

interface IUserInfo {
  name: string;
  age: number;
  role: number;
};

type StorageResponse<T> =
  T extends StorageKey.Token ? string :
  T extends StorageKey.UserInfo ? IUserInfo :
  undefined;

export const localStorageService = (ls: Storage) => {
  const data: any = {};
  return {
    get: <T extends StorageKey>(key: T): StorageResponse<T> => {
      if(data[key]) return data[key];

      const item = ls.getItem(key);

      if(!item) return undefined as StorageResponse<T>;

      try {
        const cachedVal = JSON.parse(item);
        data[key] = cachedVal;
      } catch (error) {
        data[key] = item;
        return item as StorageResponse<T>;
      }

      return undefined as StorageResponse<T>;
    },
    set: <T extends StorageKey>(key: T, value: StorageResponse<T>) => {
      const cachedVal = typeof value === "string" ? value : JSON.stringify(value);
      ls.setItem(key, cachedVal);
      data[key] = cachedVal;
    }
  };
};

export default localStorageService(localStorage);