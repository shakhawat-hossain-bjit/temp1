import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

import authSlice from "./slices/authSlice";

const persistConfig = {
  key: "root",
  storage: localStorage,
  whitelist: ["auth"],
};
const rootReducer = combineReducers({
  auth: authSlice,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
