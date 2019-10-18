import { combineReducers } from 'redux';
import data from "../providers/data";
import { SET_FILTER, GET_FILTERED_DATA, GET_DATA } from '../actions/types';

const initialState = {
    listData: data,
    filteredData: data,
    filter: '',
};

const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER: {
            return {
                ...state,
                filter: action.payload,
            };
        }
        case GET_FILTERED_DATA: {
            return {
                ...state,
                filteredData: state.listData.filter(item => item.first_name.toLocaleLowerCase().indexOf(state.filter.toLocaleLowerCase())  >= 0),
            };
        }
        case GET_DATA: {
            return {
                ...state,
                listData: data,
            };
        }
        default:
            return state;
    }
};

export default combineReducers({
    dataReducer,
});
