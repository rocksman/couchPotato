import axios from "axios";
const AsyncRequest = axios.create(); // with loaders on client side
const Request = axios.create(); // no intereptors/loaders


export const makeAsyncRequest = (method, url, data, headers={'Content-Type': undefined}) => {
  const options = {
    method,
    url,
    data,
    headers
  };
  return AsyncRequest(options);
};
export const makeRequest = (method, url, data, headers={'Content-Type': 'application/json'}) => {
  const options = {
    method,
    url,
    data,
    headers
  };
  return Request(options);
};