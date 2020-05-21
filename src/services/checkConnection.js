import storageHelper from "./offlineService";
import { store } from "../index";
import { setBatchData } from "../redux/actions";

export function asyncRepeat() {
  const localWeighData = storageHelper("weighEntry");
  const localAddLorryData = storageHelper("addLorry");
  const localAddDriverOrAssistantData = storageHelper("addDriverOrAssistant");
  const localAddSupplierData = storageHelper("addSupplier");
  if (
    localWeighData.length !== 0 ||
    localAddLorryData.length !== 0 ||
    localAddDriverOrAssistantData.length !== 0 ||
    localAddSupplierData.length !== 0
  ) {
    storageHelper();
    store.dispatch(
      setBatchData({
        weighData: localWeighData,
        lorryData: localAddLorryData,
        driverOrAssistantData: localAddDriverOrAssistantData,
        supplierData: localAddSupplierData
      })
    );
  }
}
