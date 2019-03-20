import _ from "lodash";
import ActionTypes from "../constants/ActionTypes";
import initialState from '../stores/initialState';

export default (state = initialState.search , action) => {
  switch (action.type) {
    case ActionTypes.GOT_SEARCH:
      const payload = action.payload;
      return _.assign({}, {}, { [action.term]: payload });
    default:
      return state;
  }
};