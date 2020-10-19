import { SET_USER, LOGOUT } from "../action-types";
import UserType from "../user-type";

interface SessionActionType {
  type: "session/SET_USER" | "session/LOGOUT"; //SET_USER | LOGOUT
  payload: UserType
}

const initialState = {
  isAuthenticated: false,
  user: {},
};

export default (state = initialState, action: SessionActionType) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: 'id' in action.payload && !!action.payload.id,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("certificate-jwt");
      return {
        ...state,
        isAuthenticated: false,
        user: {},
      };
    default:
      return state;
  }
};
