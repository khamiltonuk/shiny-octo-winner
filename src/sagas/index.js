import { call, put, takeLatest } from "redux-saga/effects";

import * as types from "../constants";

const endpoint = "https://api.punkapi.com/v2/beers";
const Api = () => fetch(endpoint).then(response => response.json());

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchBeers(action) {
  try {
    const data = yield call(Api, action.payload);
    yield put({ type: types.FETCH_BEER_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.FETCH_BEER_FAIL, payload: e.message });
  }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
function* mySaga() {
  yield takeLatest(types.FETCH_BEER, fetchBeers);
}

export default mySaga;
