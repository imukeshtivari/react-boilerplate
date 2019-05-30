import { all } from "redux-saga/effects";

// auth related sagas.
import auth from "./auth";

// root saga.
export default function* root(){
  yield all([
    ...auth
  ])
}