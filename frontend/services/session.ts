import { setUser } from "../store/actions/session";
import UserType from '../store/user-type'

type DispatchType = (dispatchAction:{
    type: string;
    payload: UserType;
  }) => void;

export const useRefreshUser = (dispatch: DispatchType) => () => {
  const token = localStorage.getItem("certificate-jwt");
  const user:UserType = token ? JSON.parse(atob(token.split(".")[1])) : {};
  dispatch(setUser(user));
};
