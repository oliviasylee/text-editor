import { openDB } from 'idb';

const initdb = async () =>
  openDB('wnte', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('wnte')) {
        console.log('WNTE database already exists');
        return;
      }
      db.createObjectStore('wnte', { keyPath: 'id', autoIncrement: true });
      console.log('WNTE database created');
    },
  });

// Function that adds or updates data to an IndexedDB database using the put method
export const putDb = async (id, content) => {
    console.log('PUT to the database');
    const wnteDb = await openDB('wnte', 1);
    const tx = wnteDb.transaction('wnte', 'readwrite');
    const store = tx.objectStore('wnte');
    const request = store.put({ id: id, text: content });
    const result = await request;
    console.log('🚀 - data saved to the database', result);
}

// Function that gets data from the IndexedDB database using the get method
export const getDb = async () => {
  console.log('GET from the database');
  const wnteDb = await openDB('wnte', 1);
  const tx = wnteDb.transaction('wnte', 'readonly');
  const store = tx.objectStore('wnte');
  const request = store.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');
    return result?.value;
}

initdb();