import axios from "axios";
import _ from "lodash";

import { store } from "../store";

export default function () {
  const state = store.getState();
  const token = _.get(state, "auth.data.token", "");

  return axios.create({
    baseURL: process.env.REACT_APP_API_ENDPOINT,
    headers: { "authorization": `bearer ${token}` }
  });
}