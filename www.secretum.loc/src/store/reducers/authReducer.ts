import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from 'src/store';

interface InitState {
  value: number;
}

const initialState: InitState = {
  value: 0,
};

export const authReducer = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<number>): void => {
      state.value = action.payload;
    },
    logout: (): void => {

    },
  },
});

export const { login, logout } = authReducer.actions;
export const selectCount = (state: RootState) => state.auth.value;
export default authReducer.reducer;
