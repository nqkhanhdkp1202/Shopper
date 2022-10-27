import { setToken, setUser } from '../core/utils'
import authServices from '../services/auth.services'
import userServices from '../services/user.services'
import { AUTH_LOGIN, AUTH_LOGOUT } from './type'

let user = localStorage.getItem('user')
if (user) {
    user = JSON.parse(user)
}
const initialState = {
    user
}

export const loginAction = (data) => {
    return async (dispatch) => {
        try {
            const token = await authServices.login(data )
            const user = await userServices.getInfo()
            setToken(token.data)
            setUser(user.data)
            dispatch({ type: AUTH_LOGIN, payload: user.data })
            }
        catch (err) {
            console.log(err);
        }
    }
}

export const logoutAction = () => ({ type: AUTH_LOGOUT })

export default function authReducer(state = initialState, action) {
    switch (action) {
        case AUTH_LOGOUT:
            return {
                user: null
            }
        case AUTH_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state

    }
}