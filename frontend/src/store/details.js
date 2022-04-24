import { createSlice } from '@reduxjs/toolkit';

const detailSlice = createSlice({
    name: 'details',
    initialState: { value: {} },
    reducers: {
        settingDetails: (state, action) => {
            state.value = action.payload
        },
        resetDetails: (state, action) => {
            state.value = {}
        }
    }
});

export const { settingDetails, resetDetails } = detailSlice.actions; 

export default detailSlice.reducer;