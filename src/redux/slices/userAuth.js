import {createSlice, createSelector} from '@reduxjs/toolkit';


const startState = {
    name: '',
    isAuth: false,
};

export const userAuthSlice = createSlice({
    name: 'userAuth',
    initialState: startState,
    reducers: {
        login: (state) => {
            state.name = 'John';
            state.isAuth = true;
        },
        logout: (state) => {
            state.name = 'Please log in';
            state.isAuth = false;
        }
    }
});


export const userAuthReducer = userAuthSlice.reducer;

export const {login, logout} = userAuthSlice.actions;

export const selectUserAuth = ({userAuth}) => userAuth;

export const selectIsAuth = createSelector(
    selectUserAuth,
    ({isAuth}) => isAuth
);

export const selectName = createSelector(
    selectUserAuth,
    ({name}) => name
);