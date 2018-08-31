function storageHelper(type, data) {
  if (!type) {
    localStorage.setItem("weighEntry", "[]");
    localStorage.setItem("addLorry", "[]");
  }
  if (data) {
    if (type === "lorryData") {
      localStorage.setItem(type, JSON.stringify(data));
    } else {
      const localData = JSON.parse(localStorage.getItem(type));
      localData.push(data);
      localStorage.setItem(type, JSON.stringify(localData));
    }
  } else {
    return JSON.parse(localStorage.getItem(type));
  }
}

export default storageHelper;
