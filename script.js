const STORAGE_KEY = '__BOOKSHELF';

function isStorageExist() {
  if (typeof (Storage) === undefined) {
    alert('Your browser doesn\'t support local storage');
    return false;
  }
  return true;
}

function saveData() {
  if (isStorageExist()) {
    const parsed = JSON.stringify(books);
    localStorage.setItem(STORAGE_KEY, parsed);
    // document.dispatchEvent(new Event(SAVED_EVENT));
  }
}
