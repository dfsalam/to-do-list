// eslint-disable-next-line func-names
const localStorageMock = (function () {
  let store = {};

  return {
    getItem(key) {
      return store[key];
    },

    setItem(key, value) {
      store[key] = value;
    },

    clear() {
      store = {};
    },

    removeItem(key) {
      delete store[key];
    },

    getAll() {
      return store;
    },
  };
}());

Object.defineProperty(window, 'localStorage', { value: localStorageMock });

module.exports = localStorageMock;