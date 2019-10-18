import { SET_FILTER, GET_DATA, GET_FILTERED_DATA } from "./types";

export const setFilter = filter => ({
    type: SET_FILTER,
    payload: filter,
});

export const getFilteredData = () => ({
    type: GET_FILTERED_DATA,
});

export const getData = () => ({
    type: GET_DATA,
});
