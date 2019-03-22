import * as syncActions from "./syncActions";
import { makeRequest, makeAsyncRequest } from "../constants/Request";
import AppConstants from "../constants/AppConstants";

export const getSearchResult = term => dispatch =>
    makeRequest("post", `${AppConstants.nodeURL}/api/search`, { term: term })
        .then(resp => {
            dispatch(syncActions.gotSearchResults(resp.data, term))
        })
        .catch(err => {
            console.log(err);
        });

export const tryLogin = data => dispatch =>
    makeRequest("post", `${AppConstants.nodeURL}/api/user/login`, { email: data.email, password: data.password })
        .then(resp => {
            dispatch(syncActions.gotAuthenticated(resp.data))
        })
        .catch(err => {
            console.log(err);
        });

export const tryRegister = data => dispatch =>
    makeRequest("post", `${AppConstants.nodeURL}/api/user/register`, { name: data.name, email: data.email, password: data.password, password2: data.password2 })
        .then(resp => {
            console.log(resp.data);
            dispatch(syncActions.gotRegistered())
        })
        .catch(err => {
            console.log(err);
        });

export const getRecommend = data => dispatch =>
    makeRequest("post", `${AppConstants.flaskURL}`, {genre: data})
        .then(resp => {
            console.log(resp.data);
            dispatch(syncActions.gotRecommend(resp.data))
        })
        .catch(err => {
            console.log(err);
        });