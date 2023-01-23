import {
  SET_ACTIVE_FILTER,
  SET_ALL_FILTER_ACTIVE,
  SET_ALL_FILTERS_ACTIVE,
  REMOVE_ALL_FILTER_ACTIVE,
  REMOVE_ALL_ACTIVE_FILTERS,
} from '../actions';

export interface FiltersState {
  filters: FilterState[];
}

export interface FilterState {
  id: number;
  body: string;
  checked: boolean;
}

const defaultState: FiltersState = {
  filters: [
    {
      id: 1,
      body: 'Все',
      checked: false,
    },
    {
      id: 2,
      body: 'Без пересадок',
      checked: false,
    },
    {
      id: 3,
      body: '1 пересадка',
      checked: false,
    },
    {
      id: 4,
      body: '2 пересадки',
      checked: false,
    },
    {
      id: 5,
      body: '3 пересадки',
      checked: false,
    },
  ],
};

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

export const setActiveFilter = (payload: FilterState): { type: string; payload: FilterState } => ({
  type: SET_ACTIVE_FILTER,
  payload,
});

export const setAllFilterActive = (
  payload: FilterState
): { type: string; payload: FilterState } => ({
  type: SET_ALL_FILTER_ACTIVE,
  payload,
});

export const removeAllFilterActive = (
  payload: FilterState
): { type: string; payload: FilterState } => ({
  type: REMOVE_ALL_FILTER_ACTIVE,
  payload,
});

export const setAllFiltersActive = (
  payload: FilterState
): { type: string; payload: FilterState } => ({
  type: SET_ALL_FILTERS_ACTIVE,
  payload,
});

export const removeAllActiveFilters = (
  payload: FilterState
): { type: string; payload: FilterState } => ({
  type: REMOVE_ALL_ACTIVE_FILTERS,
  payload,
});
