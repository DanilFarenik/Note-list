import { configureStore } from "@reduxjs/toolkit";

import noteReducer from "./noteSlice";
import modalReducer from "./modalSlice";

const store = configureStore({
  reducer: {
    notes: noteReducer,
    modal: modalReducer
  }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;