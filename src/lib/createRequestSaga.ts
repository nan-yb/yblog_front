import { createAction } from "redux-actions";
import { call, put } from 'redux-saga/effects';
import { startLoading, endLoading } from '../modules/loading';
import { AxiosResponse } from "axios";

export default function createRequestSaga(type: string, request: any) {
  const CALL_SUCCESS = `${type}_SUCCESS`;
  const CALL_FAILURE = `${type}_FAILURE`;

  const callSuccess = createAction(CALL_SUCCESS, (data: string) => data);
  const callFailure = createAction(CALL_FAILURE, (err: any) => err);

  return function*(action: any) {
    yield put(startLoading(type));
    try {
      const response: AxiosResponse  = yield call(request, action.payload);
      let data : any  = response;
      
      if(response.data){
        data = response.data;
      }
      yield put(callSuccess(data));
    } catch (e) {
      yield put(callFailure(e));
    }
    yield put(endLoading(type));
  };
}
