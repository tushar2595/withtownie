import { fetchActionTypes } from "../Action/index";

const defaultDataState = {
  state_data: null,

};

const FetchReducer = (state = { ...defaultDataState }, action) => {
  switch (action.type) {
    case fetchActionTypes.FETCH_STATE_DATA:
      return {
        ...state,
        state_data: action.state_data,
        loading: false,
      };

    default:
      return { ...state };
  }
};
export default FetchReducer;