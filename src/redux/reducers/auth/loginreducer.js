import * as actiontype from '../../actionstypes'

const initialState = {
    isautha: false,
    isloading: false,
    error: false
}


const loginreducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontype.postdata_req:
            return {
                ...state,
                isloading: true,
                error: null,
                isautha: false
            };
        case actiontype.postdata_success:
            return {
                ...state,
                isloading: false,
                isautha: true
            };
        case actiontype.postdata_fail:
            return {
                ...state,
                error: action.error,
                isloading: false,
                isautha: false
            };
        default:
            return state
    }
}

export default loginreducer