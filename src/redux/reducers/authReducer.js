import { GET_AUTH_USER, LOGIN_USER, LOGOUT_USER } from "../constants/actionTypes"

const initialState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false
}

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOGIN_USER:
      localStorage.setItem("token", payload.token)
      return {...state, isAuth: true, ...payload}
    case LOGOUT_USER:
      localStorage.removeItem("token")
      return {...state, isAuth: false, user: null, msg: "User logged out", token: null}
    case GET_AUTH_USER:
      return {...state, isAuth: true, ...payload}
    default:
      return state
  }
}