export const StorageConfig = {
    booksStorageId: 'simpleLocalLibraryStoage',
};

/**
 * reads data from localStorage
 * @param {*} storageId  
 * @returns returns parsed data stored in localStorage.
 */
export const readFromStorage = (storageId) => {
    const temp = localStorage.getItem(storageId);
    if (temp) {
        return JSON.stringify(temp);
    }
    return [];
}

/**
 * adds data to local storage
 * @param {*} storageId 
 * @param {*} data 
 * @returns void
 */
export const addToStorage = (storageId, data) => localStorage.setItem(storageId, JSON.stringify(data));

/**
 * removes selected data from local storage 
 * @param {*} storageId 
 * @returns void
 */
export const removeItemFromLocalStorage = (storageId) => localStorage.removeItem(storageId);