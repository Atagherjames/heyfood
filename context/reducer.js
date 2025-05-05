import { SORT, FILTER, SEARCH, TAG } from "./constants";

export const initialState = {
  sort: "",
  filter: "",
  search: "",
  tag: "",
  store: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case SORT:
      return { ...state, sort: action.payload };
    case FILTER:
      return { ...state, filter: action.payload };
    case SEARCH:
      return { ...state, search: action.payload };
    case TAG:
      return { ...state, tag: action.payload };
    default:
      return state;
  }
};
