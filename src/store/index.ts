import { configureStore } from "@reduxjs/toolkit";
import pageSlice from "./page-slice";

const store = configureStore({
  reducer: { pages: pageSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
