import { fetchActionTypes } from "../Action/index";

const defaultDataState = {
  state_data: null,
  card_data: null

};

const FetchReducer = (state = { ...defaultDataState }, action) => {
  switch (action.type) {
    case fetchActionTypes.FETCH_STATE_DATA:
      return {
        ...state,
        state_data: action.state_data,
        loading: false,
      };
    case fetchActionTypes.FETCH_CARD_DATA:
      return {
        ...state,
        card_data: action.card_data,
        loading: false,
      };
    case fetchActionTypes.FETCH_CARD_DATA:
      return {
        ...state,
        card_data: action.card_data,
        loading: false,
      };
    case fetchActionTypes.RESET_CARD_DATA:
      return {
        ...state,
        card_data: null,
        loading: false,
      };



    default:
      return { ...state };
  }
};
export default FetchReducer;