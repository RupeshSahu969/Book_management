import * as types from "./actionTypes";
import axios from "axios";

// export const getLoginRequest=()=>{
//     return {
//         type:types.USER_LOGIN_REQUEST
//     }
// }
// export const getLoginSuccess=(payload)=>{
//     return {
//         type:types.USER_LOGIN_SUCCESS,
//         payload
//     }
// }
// export const getLoginFailure=()=>{
//     return {
//         type:types.USER_LOGIN_FAILURE
//     }
// }

export const Logins=(payload)=>(dispatch)=>{
    // dispatch(getLoginRequest())
    dispatch({type:types.USER_LOGIN_REQUEST});
    // return axios
    return axios.post("https://reqres.in/api/login",payload)
    .then((res)=>{
        // dispatch(getLoginSuccess(res.data));
        // return dispatch
        return dispatch({type:types.USER_LOGIN_SUCCESS,payload:res.data.token});

    })
    .catch((err)=>{
        //dispatch(getLoginFailure());
        dispatch({type:types.USER_LOGIN_FAILURE,payload:err});
    })
}