import {
  LOAD_LAYOUTS,
  LOAD_LAYOUT,
  UPDATE_LAYOUT,
  CREATE_LAYOUT,
} from "../action-types";

interface QueryType {
  offset?: number;
  limit?: number;
  q?: string;
  unloadAll?: boolean;
}

export const loadLayouts = (query: QueryType = {}) => {
  const { offset = 0, limit = 10, q = "", unloadAll = false } = query;
  return {
    type: LOAD_LAYOUTS,
    payload: {
      unloadAll,
      request: {
        url: `layouts?q=${q}&offset=${offset}&limit=${limit}`,
      },
    },
  };
};
export const loadLayout = (id: number) => ({
  type: LOAD_LAYOUT,
  payload: {
    request: {
      url: `layouts/${id}`,
    },
  },
});
//FIXME: layout type = any
export const updateLayout = (id: number, layout: any) => ({
  type: UPDATE_LAYOUT,
  payload: {
    request: {
      url: `layouts/${id}`,
      method: "PATCH",
      data: layout,
    },
  },
});
//FIXME: layout type = any
export const createLayout = (layout: any) => ({
  type: CREATE_LAYOUT,
  payload: {
    request: {
      url: "layouts",
      method: "POST",
      data: layout,
    },
  },
});
