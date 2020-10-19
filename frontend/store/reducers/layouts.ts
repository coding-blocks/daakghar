import {
  LOAD_LAYOUTS,
  LOAD_LAYOUT,
  UPDATE_LAYOUT,
  CREATE_LAYOUT,
} from "../action-types";
import { listToMap } from "../../utils";

interface LayoutActionType {
  type:
    | "layouts/LOAD_LAYOUTS"
    | "layouts/LOAD_LAYOUT"
    | "layouts/UPDATE_LAYOUT"
    | "layouts/CREATE_LAYOUT";
  payload: {
    data: any; //FIXME: any type of data
  };
  meta: any;
}

const initialState = {
  layouts: {},
};

export default (state = initialState, action: LayoutActionType) => {
  switch (action.type) {
    case `${LOAD_LAYOUT}_SUCCESS`:
      return {
        ...state,
        layouts: {
          ...state.layouts,
          ...listToMap([action.payload.data]),
        },
      };
    case `${LOAD_LAYOUTS}_SUCCESS`:
      const newLayouts = listToMap(action.payload.data);
      const layouts = action.meta.previousAction.payload.unloadAll
        ? newLayouts
        : { ...state.layouts, ...newLayouts };
      return {
        ...state,
        layouts,
      };
    case `${UPDATE_LAYOUT}_SUCCESS`:
    case `${CREATE_LAYOUT}_SUCCESS`:
      return {
        ...state,
        layouts: {
          ...state.layouts,
          ...listToMap([action.payload.data.value]),
        },
      };
    default:
      return state;
  }
};
