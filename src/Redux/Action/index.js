export const fetchActionTypes = {
  FETCH_STATE_DATA: "FETCH_STATE_DATA",
  FETCH_CARD_DATA: "FETCH_CARD_DATA",
  RESET_CARD_DATA: "RESET_CARD_DATA"


};
export const fetchStateData = (state_data, loading) => {
  return {
    type: fetchActionTypes.FETCH_STATE_DATA,
    state_data,
    loading,
  };
};
export const fetchCardData = (card_data, loading) => {
  return {
    type: fetchActionTypes.FETCH_CARD_DATA,
    card_data,
    loading,
  };
};
export const resetCardData = (card_data, loading) => {
  return {
    type: fetchActionTypes.RESET_CARD_DATA,
    card_data,
    loading,
  };
};