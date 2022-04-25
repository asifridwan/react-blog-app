import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    posts: [],
    loading: false
};

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    return axios.get('http://localhost:4000/posts').then(res => res.data);
});

const posts_slice = createSlice({
    name: 'posts',
    initialState,
    extraReducers: {
        [fetchPosts.pending]: state => {
            state.loading = true;
        },
        [fetchPosts.fulfilled]: (state, action) => {
            state.loading = false;
            state.posts = action.payload;
        },
        [fetchPosts.rejected]: state => {
            state.loading = false;
        }
    }
});

export default posts_slice.reducer;