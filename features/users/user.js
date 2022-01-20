import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState : {
        darkMode : false
    },
    reducers : {
        setDarkMode : (state, {payload}) => {
            state.darkMode = payload;
        }
    }
})

export const {setDarkMode} = userSlice.actions;
export default userSlice.reducer;

export const {getDarkMode} = state => state.user.darkMode;