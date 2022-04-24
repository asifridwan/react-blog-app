import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
    name: 'comments',
    initialState: { value: [] },
    reducers: {
        settingComments: (state, action) => {
            state.value = action.payload
        },
        resetComments: (state, action) => {
            state.value = []
        }
    }
});

export const { settingComments, resetComments } = commentSlice.actions; 

export default commentSlice.reducer;