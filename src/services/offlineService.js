function storageHelper(type, data) {
  if (!type) {
    localStorage.setItem("weighEntry", "[]");
    localStorage.setItem("addLorry", "[]");
    localStorage.setItem("addDriverOrAssistant", "[]");
    localStorage.setItem("addSupplier", "[]");
  }
  if (data) {
    if (type === "lorryData" || type === "supplierData") {
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
