import ActionTypes from "../constants/ActionTypes";

export const gotSearchResults = (data, term) => ({
  type: ActionTypes.GOT_SEARCH,
  payload: data,
  term
});

export const gotAuthenticated = (data) => ({
  type: ActionTypes.GOT_USER,
  payload: data
});

export const gotRegistered = () => ({
  type: ActionTypes.GOT_REGISTER,
});

export const removeAuth = () => ({
  type: ActionTypes.REMOVE_USER
});

export const gotRecommend = (data) => ({
  type: ActionTypes.GOT_RECOMMEND,
  payload: data
});