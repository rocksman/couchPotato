import _ from "lodash";
import ActionTypes from "../constants/ActionTypes";
import initialState from '../stores/initialState';

export default (state = initialState.user , action) => {
  switch (action.type) {
    case ActionTypes.GOT_USER:
        const payload = {};
        payload.token= action.payload.token;
        payload.authenticated= true;
        return payload;
    case ActionTypes.GOT_REGISTER:
        const p ={};
        p.registered = true;
        return p;
    case ActionTypes.REMOVE_USER:
        const pay = {};
        pay.authenticated= false;
        pay.registered = false;
        return pay;
    default:
        return state;
  }
};