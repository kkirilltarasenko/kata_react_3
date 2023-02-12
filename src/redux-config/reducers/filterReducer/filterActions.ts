import { FilterState } from './filterTypes';
import {
  SET_ACTIVE_FILTER,
  SET_ALL_FILTER_ACTIVE,
  REMOVE_ALL_FILTER_ACTIVE,
  SET_ALL_FILTERS_ACTIVE,
  DEACTIVATE_ALL_FILTERS,
} from '../../actionTypes';

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

export const deactivateAllFilters = (): { type: string } => ({
  type: DEACTIVATE_ALL_FILTERS,
});
