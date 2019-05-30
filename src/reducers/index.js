import { combineReducers } from "redux";
import { requireAll } from "../helpers/utils";

const objModules = {};

// require all files in the current directory, except index.js
requireAll(require.context(".", true, /^((?!index).)*\.js$/)).forEach(module =>
  Object.assign(objModules, module.default)
);

export default combineReducers(objModules);
