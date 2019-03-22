import _ from "lodash";
import ActionTypes from "../constants/ActionTypes";
import initialState from '../stores/initialState';

export default (state = initialState.recommendation , action) => {
  switch (action.type) {
    case ActionTypes.GOT_RECOMMEND:
      const payload = action.payload['data'];
      return payload;
    default:
      return state;
  }
};