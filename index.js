function hasWindowStorage() {
  return !!window.sessionStorage
}

function removeStorageItem(key, flag) {
  if (window.location.hash.includes(flag)) {
    return
  }

  window.sessionStorage.removeItem(key)
}

function setStorageItem(key, value) {
  if (!hasWindowStorage()) {
    return
  }

  window.sessionStorage.setItem(key, JSON.stringify(value))
}

function storageQueryString(key, value, flag) {

  setStorageItem(key, value)

  window.hashchange = function () {
    removeStorageItem(key, flag)
  }

  return value
}

export default storageQueryString