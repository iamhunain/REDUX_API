import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
    isauth: false
}

export const slices = createSlice({
    name: 'slices',
    initialState,
    reducers: {
        loginuser: (state = initialState, action) => {
            switch (action.payload) {
                case 'login':
                    return {
                        ...state,
                        isauth: true
                    }
                case 'logout':
                    return {
                        ...state,
                        isauth: false
                    }
                default:
                    return state;
            }
        }
    }
})



export const { loginuser } = slices.actions
export default slices.reducer