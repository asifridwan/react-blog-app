import { createSlice } from '@reduxjs/toolkit';

const postSlice = createSlice({
    name: 'posts',
    initialState: { value: [] },
    reducers: {
        settingPosts: (state, action) => {
            state.value = action.payload
        }
    }
});

export const { settingPosts } = postSlice.actions; 

export default postSlice.reducer;