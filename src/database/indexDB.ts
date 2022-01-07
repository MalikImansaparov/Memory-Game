import { IndexDbType } from './types';

const indexDb: IndexDbType = {
  DB_NAME: 'MalikImansaparov',
  DB_VERSION: 1, // Use a long long for this value (don't use a float)
  DB_STORE_NAME: 'Imansaparov',
  db: null,

  openDb() {
    return new Promise((res) => {
      const request = indexedDB.open(indexDb.DB_NAME, indexDb.DB_VERSION);
      request.onsuccess = function () {
        indexDb.db = this.result;
        res(indexDb.db);
      };

      request.onupgradeneeded = function (event: never) {
        const thisDB = event.target.result;
        if (!thisDB.objectStoreNames.contains(indexDb.DB_STORE_NAME)) {
          const objectStore = thisDB.createObjectStore(indexDb.DB_STORE_NAME, { keyPath: 'ssn' });
        }
        res(indexDb.db);
      };
    });
  },

  clearObjectStore() {
    indexDb.openDb().then(() => new Promise((res, rej) => {
      const transaction = indexDb.db.transaction(indexDb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(indexDb.DB_STORE_NAME);
      const request = objectStore.clear();

      request.onsuccess = function () {
        res(objectStore);
      };
      request.onerror = function () {
        rej(this.error);
      };
    }));
  },
  getLength() {
    return indexDb.openDb().then(() => new Promise((res) => {
      const transaction = indexDb.db.transaction(indexDb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(indexDb.DB_STORE_NAME);
      const count = objectStore.count();
      count.onsuccess = function () {
        res(count.result);
      };
    }));
  },

  getObj(ssn) {
    return indexDb.openDb().then((db: any) => new Promise((res, rej) => {
      const transaction = db.transaction(indexDb.DB_STORE_NAME, 'readonly');
      const objectStore = transaction.objectStore(indexDb.DB_STORE_NAME);
      const request = objectStore.get(ssn);

      request.onerror = function () {
        rej(request.error);
      };
      request.onsuccess = function () {
        res(request.result);
      };
    }));
  },
  // put methods

  putObj(User) {
    indexDb.openDb().then((db: any) => new Promise((res, rej) => {
      const transaction = db.transaction(indexDb.DB_STORE_NAME, 'readwrite');
      const objectStore = transaction.objectStore(indexDb.DB_STORE_NAME);
      const request = objectStore.put(User);

      transaction.oncomplete = function (event: any) {
        console.log(`All done!${event}`);
      };
      transaction.onerror = function (event: any) {
        console.log(`we.v got error: ${event}`);
      };

      request.onsuccess = function (event: any) {
        res(event.target.result);
      };
      request.onerror = function (event: any) {
        console.log(`some error on put:${event}`);
        rej(event.error);
      };
    }));
  },
};

export default indexDb;
