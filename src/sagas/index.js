import { call, put, throttle } from "redux-saga/effects";

import * as types from "../constants";

const Api = query => {
  const params = query ? `?beer_name=${query}` : "";
  const endpoint = `https://api.punkapi.com/v2/beers${params}`;
  return fetch(endpoint).then(response => response.json());
};

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchBeers(action) {
  try {
    const data = yield call(Api, action.payload);
    yield put({ type: types.FETCH_BEER_SUCCESS, payload: data });
  } catch (e) {
    yield put({ type: types.FETCH_BEER_FAIL, payload: e.message });
  }
}

function* mySaga() {
  yield yield throttle(500, types.FETCH_BEER, fetchBeers);
}

export default mySaga;
