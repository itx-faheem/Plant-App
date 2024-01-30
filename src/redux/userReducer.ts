import { createSlice } from "@reduxjs/toolkit";
import { icons } from "../../constants";

const initialState = {
    SignUpInfo: {
        name: "",
        email: "",
        nickName: "",
        password: "",
        conformPassword: "",
        // image: icons.blankPic
    },
    isAuthenticated: false,
}


const SignUpSlice = createSlice({
    name: "SignUp",
    initialState,
    reducers: {
        SignUpInfo: (state, action) => {
            state.SignUpInfo = action.payload
        },
        resetSignUpInfo: (state) => {
            state.SignUpInfo = initialState.SignUpInfo;
        },

        resetAuthenticationStatus: (state) => {
            state.isAuthenticated = false;
        },

    }
})

export const { SignUpInfo, resetSignUpInfo, resetAuthenticationStatus, } = SignUpSlice.actions
export default SignUpSlice.reducer









