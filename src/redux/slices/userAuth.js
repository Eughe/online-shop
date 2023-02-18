import {createSlice} from '@reduxjs/toolkit';


const startState = {
    isAuth: true,
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: startState,
    reducers: {
        login: (state) => {
            state.isAuth = true;
        },
        logout: (state) => {
            state.isAuth = false;
        }
    }
});


export const userAuthReducer = userAuthSlice.reducer;

export const {login, logout} = userAuthSlice.actions;