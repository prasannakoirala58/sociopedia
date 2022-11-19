import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: 'light',
  user: null,
  token: null,
  posts: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },

    setLogin: (state, { payload }) => {
      // console.log(' From slice file = The payload is:', payload);
      // console.log(' From slice file = The current state is:', current(state));
      state.user = payload.user;
      state.token = payload.token;
      // return { ...state, user: payload.user, token: payload.token };
    },

    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },

    setFriends: (state, action) => {
      if (state.user) {
        state.user.friends = action.payload.friends;
      } else {
        console.error('User friends non-existent!');
      }
    },

    setPosts: (state, action) => {
      state.posts = action.payload.posts;
    },

    setPost: (state, action) => {
      const updatedPosts = state.posts.map((post) => {
        if (post._id === action.payload.post._id) return action.payload.post;
        return post;
      });
      state.posts = updatedPosts;
      console.log('From Slice file:', updatedPosts);
    },
  },
});

export const { setMode, setLogin, setLogout, setFriends, setPosts, setPost } =
  authSlice.actions;

export const selectAuth = (state) => state.user;
// export const selectPost = (state) => state.posts;

export default authSlice.reducer;
