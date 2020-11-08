export const fetchActionTypes = {
  FETCH_STATE_DATA: "FETCH_STATE_DATA",

};
export const fetchStateData = (state_data, loading) => {
  return {
    type: fetchActionTypes.FETCH_STATE_DATA,
    state_data,
    loading,
  };
};