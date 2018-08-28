import storageHelper from "./offlineService";

export function asyncRepeat() {
  setInterval(() => {
    if (navigator.onLine) {
      if (storageHelper("weighEntry")) {
        //If we come back online and there is data in localstore, it will be handled from here
      } else {
      }
    }
  }, 4000);
}
