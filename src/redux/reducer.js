import * as actiontype from './actionstypes'


const initialState = {
    data: [],
    loading: false,
    error: null
}


const datareducer = (state = initialState, action) => {
    switch (action.type) {
        case actiontype.getdata_req:
            return {
                ...state,
                loading: true,
                error: null
            };
        case actiontype.getdata_success:
            return {
                ...state,
                data: action.payload,
                loading: false,
            };
        case actiontype.getdata_fail:
            return {
                ...state,
                error: action.error,
                loading: false,
            };
        default:
            return state
    }
}


export default datareducer