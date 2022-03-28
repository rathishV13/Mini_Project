import { useDispatch } from "react-redux"
import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publicReq } from "../reqMethods"

export const login = async (dispatch,user)=>{
    dispatch(loginStart())

    try {
        const res = await publicReq.post("/auth/login",user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}