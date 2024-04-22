import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface DarkModeState {
  dark: boolean;
}

const initialState: DarkModeState = {
  dark: false,
};

const darkModeSlice = createSlice({
  name: "darkMode",
  initialState,
  reducers: {
    onDarkModeChange: (state, action: PayloadAction<boolean>) => {
      state.dark = action.payload;
    },
  },
});

export const { onDarkModeChange } = darkModeSlice.actions;

export default darkModeSlice.reducer;
