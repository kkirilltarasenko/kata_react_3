import {
  SET_ACTIVE_FILTER,
  SET_ALL_FILTER_ACTIVE,
  SET_ALL_FILTERS_ACTIVE,
  REMOVE_ALL_FILTER_ACTIVE,
  REMOVE_ALL_ACTIVE_FILTERS,
} from '../../actionTypes';
import { FiltersState, FilterState } from './filterTypes';
import { defaultState } from './filterState';

export const filterReducer = (
  state = defaultState,
  action: { type: string; payload: FilterState }
): FiltersState => {
  switch (action.type) {
    case SET_ACTIVE_FILTER:
      return {
        ...state,
        filters: state.filters.map((filter: FilterState) => {
          if (filter.id === action.payload.id) {
            filter.checked = !filter.checked;
          }
          return filter;
        }),
      };
    case SET_ALL_FILTER_ACTIVE:
      return {
        ...state,
        filters: state.filters.map((filter: FilterState) => {
          if (filter.body === 'Все') {
            filter.checked = true;
          }
          return filter;
        }),
      };
    case REMOVE_ALL_FILTER_ACTIVE:
      return {
        ...state,
        filters: state.filters.map((filter: FilterState) => {
          if (filter.body === 'Все') {
            filter.checked = false;
          }
          return filter;
        }),
      };
    case SET_ALL_FILTERS_ACTIVE:
      return {
        ...state,
        filters: state.filters.map((filter: FilterState) => {
          filter.checked = true;
          return filter;
        }),
      };
    case REMOVE_ALL_ACTIVE_FILTERS:
      return {
        ...state,
        filters: state.filters.map((filter: FilterState) => {
          filter.checked = false;
          return filter;
        }),
      };
    default:
      return state;
  }
};
