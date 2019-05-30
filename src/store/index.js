import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga"
import thunk from "redux-thunk";

// reducers & sagas.
import rootReducer from "../reducers";
import rootSaga from "../sagas";

const persistConfig = {
  key: "store",
  storage,
  whitelist: ["auth"]
};

// initiating the saga middleware.
const sagaMiddleware = createSagaMiddleware();

let middleware;

// loading required middlewares depending upon the environment.
if (process.env.NODE_ENV === "production") {
  middleware = applyMiddleware(
    sagaMiddleware, // applying saga middleware.
    thunk, // applying thunk middleware for distatching action based upon conditions.
  );
} else {
  middleware = composeWithDevTools(
    applyMiddleware(
      sagaMiddleware,
      thunk,
    )
  );
}

// persist reducer.
const pReducer = persistReducer(persistConfig, rootReducer);

// creating the main store.
export const store = createStore(pReducer, middleware);
export const persistor = persistStore(store);

// running the sagas in background.
sagaMiddleware.run(rootSaga);