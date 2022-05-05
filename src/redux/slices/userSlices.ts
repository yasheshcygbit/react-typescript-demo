import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User, UserState } from "../../interfaces";
import { AppState, AppThunk } from "../store";

const initialState: UserState = {
  userName: 'John Doe',
  isUserListLoading: true,
  userList: [],
  userDetails: null
}

const userSlices = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setUserName: (state: UserState, action: PayloadAction<string>) => {
      state.userName = action.payload;
    },
    setUserListLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.isUserListLoading = action.payload;
    },
    setUserDetailsLoading: (state: UserState, action: PayloadAction<boolean>) => {
      state.isUserListLoading = action.payload;
    },
    setUserDetails: (state: UserState, action: PayloadAction<User>) => {
      state.userDetails = action.payload;
    },
    setUserList: (state: UserState, action: PayloadAction<User[]>) => {
      state.userList = action.payload;
    }
  }
})

export const getUserList = (page: number): AppThunk => async (dispatch, getState) => {
  const currentState = getState();
  console.log('[CURRENT_STATE currentState]', currentState);
  dispatch(setUserListLoading(true));
  try {
    const response = await axios.get(`https://reqres.in/api/users?page=${page}`);
    dispatch(setUserListLoading(false));
    if (response && response.data && response.data.data) {
      dispatch(setUserList(response.data.data));
    }
  } catch (error) {
    dispatch(setUserListLoading(false));
  }
}

export const getUserDetails = (userid: number): AppThunk => async (dispatch, getState) => {
  const currentState = getState();
  console.log('[CURRENT_STATE currentState]', currentState);
  dispatch(setUserDetailsLoading(true));
  try {
    const response = await axios.get(`https://reqres.in/api/users/${userid}`);
    dispatch(setUserDetailsLoading(false));
    if (response && response.data && response.data.data) {
      dispatch(setUserDetails(response.data.data));
    }
  } catch (error) {
    dispatch(setUserDetailsLoading(false));
  }
}

export const userReducer = userSlices.reducer;
export const { setUserName, setUserListLoading, setUserList, setUserDetailsLoading, setUserDetails } = userSlices.actions;