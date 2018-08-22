import * as types from "../constants";

const initialState = {
  beers: [],
  loading: false,
  error: false,
  message: ""
};

export default function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case types.FETCH_BEER:
      return {
        ...state,
        loading: true
      };
    case types.FETCH_BEER_SUCCESS:
      return {
        ...state,
        beers: payload,
        loading: false
      };
    case types.FETCH_BEER_FAIL:
      return {
        ...state,
        error: true,
        message: payload.message
      };
    default:
      return state;
  }
}
