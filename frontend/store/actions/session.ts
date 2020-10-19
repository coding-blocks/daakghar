import { SET_USER, LOGOUT } from "../action-types";
import UserType from '../user-type'

export const setUser = (user: UserType) => ({
  type: SET_USER,
  payload: user,
});
export const logout = () => ({
  type: LOGOUT,
});
