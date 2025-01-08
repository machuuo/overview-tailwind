import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "pages",
  initialState: { page: "tailwind" },
  reducers: {
    setPages(state, action: PayloadAction<string>) {
      state.page = action.payload;
    },
  },
});

export const pageActions = pageSlice.actions;
export default pageSlice;
