import { take, takeLatest, fork, call } from "redux-saga/effects";

// redux actions and action creatores.
import actionTypes from "../actions";

function* workerRegister(){
  // code for handling registration.
}

function* workerLogin(){
  // code for handling login.
}

// watch for registration action.
function* watchRegister(){
  yield takeLatest(actionTypes.REQUEST_REGISTER, workerRegister);
}

// watch for login action.
function* watchLogin(){
  const action = yield take(actionTypes.REQUEST_LOGIN);
  yield call(workerLogin, action);
}

// running auth related saga.
export default [
  fork(watchLogin),
  fork(watchRegister),
]

// Note: just demo code, not in used anywhere.