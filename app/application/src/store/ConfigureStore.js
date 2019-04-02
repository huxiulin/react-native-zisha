/**
 * 定义全局的store
 */

 'use strict';
 import {applyMiddleware,createStore} from "redux";
 import thunkMiddleware from "redux-thunk";
 import {persistStore,persistReducer} from "redux-persist";
 import storage from "redux-persist/lib/storage";
 import rootReducer from '../reducers/index';

 const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

 const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore(initialState) {
  const store = createStoreWithMiddleware(persistedReducer, initialState);
  let persistor = persistStore(store);
  return {store, persistor};
}