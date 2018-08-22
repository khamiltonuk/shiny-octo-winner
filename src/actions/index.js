import * as types from "../constants";

export function fetchBeer(payload) {
  return {
    type: types.FETCH_BEER,
    payload
  };
}

export function fetchBeerSuccess(payload) {
  return {
    type: types.FETCH_BEER_SUCCESS,
    payload
  };
}
