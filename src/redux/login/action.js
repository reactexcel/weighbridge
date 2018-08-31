export default function* loginRequest(action){
    let params = {
        TableName: "UserProfile"
      };
      /* try {
        const response = yield call(getData, params);
        if (response) {
          yield call(storageHelper,"lorryData",response.Items);
          yield put(actions.getLorrySuccess(response.Items));
        }
      } catch (error) {
        yield put(actions.getLorryError(error));
      } */
}