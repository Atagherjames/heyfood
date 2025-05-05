"use client";

import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "./reducer";
import { SORT, FILTER, SEARCH, TAG } from "./constants";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Dispatch actions for each piece of state
  const setSort = (sortValue) => dispatch({ type: SORT, payload: sortValue });
  const setFilter = (filterValue) =>
    dispatch({ type: FILTER, payload: filterValue });
  const setSearch = (searchValue) =>
    dispatch({ type: SEARCH, payload: searchValue });
  const setTag = (tagValue) => dispatch({ type: TAG, payload: tagValue });

  return (
    <AppContext.Provider
      value={{ state, setSort, setFilter, setSearch, setTag }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
