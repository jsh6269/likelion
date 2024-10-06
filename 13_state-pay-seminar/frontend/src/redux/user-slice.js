import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLogin: false,
    nickname: null,
    profilepic_id: null,
    remaining_points: null,
    isLocked: true,
  },
  reducers: {
    setLoginState: (state, action) => {
      state.isLogin = action.payload;
    },
    setUserProfile: (state, action) => {
      const { nickname, profilepic_id, remaining_points } = action.payload;
      state.nickname = nickname;
      state.profilepic_id = profilepic_id;
      state.remaining_points = remaining_points;
    },
    setLockState: (state, action) => {
      state.isLocked = action.payload;
    }
  },
});

export const { setLoginState, setUserProfile, setLockState } = userSlice.actions;
export default userSlice.reducer;
