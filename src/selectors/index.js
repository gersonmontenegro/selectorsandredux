import { createSelector } from 'reselect';

const filter = state => state.dataReducer.filter;
const listData = state => state.dataReducer.listData;

export const filteredSelectorData = createSelector(
    filter,
    listData,
    (filter, listData) => listData.filter(item => item.first_name.toLowerCase().indexOf(filter) >= 0)
);
