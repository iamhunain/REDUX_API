import { type } from "@testing-library/user-event/dist/type"
import * as actionstype from './actionstypes'
import axios from "axios"



const app_url = 'https://api.eobusinessclub.com/api/categories'

export const fetchapi = () => {
    return async (dispatch) => {
        dispatch({ type: actionstype.getdata_req });
        try {
            const response = await axios.get(app_url);
            console.log(response?.data, 'mm')
            dispatch({ type: actionstype.getdata_success, payload: response?.data });
        } catch (error) {
            dispatch({ type: actionstype.getdata_fail, error });
        }
    }
}



export const loginuser = ({ user, pass }) => {
    return async (dispatch) => {
        console.log('run login')
        dispatch({ type: actionstype.postdata_req });
        try {
            const response = await axios.post(`https://api.eobusinessclub.com/api/login`, { email: user, password: pass});
            console.log(response, 'lo')
            dispatch({ type: actionstype.postdata_success, payload: response?.data });
        } catch (error) {
            dispatch({ type: actionstype.postdata_fail, error });
            console.log(error , 'lo')
        }
    }
}