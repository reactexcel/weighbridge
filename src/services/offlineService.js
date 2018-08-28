function storageHelper(type, data) {
  if (data) {
    localStorage.setItem(type, data);
  } else {
    return localStorage.getItem(type);
  }
}

export default storageHelper;
