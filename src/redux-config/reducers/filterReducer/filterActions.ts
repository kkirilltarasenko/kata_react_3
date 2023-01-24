import { FilterState } from './filterTypes';
import {
  REMOVE_ALL_ACTIVE_FILTERS,
  REMOVE_ALL_FILTER_ACTIVE,
  SET_ACTIVE_FILTER,
  SET_ALL_FILTER_ACTIVE,
  SET_ALL_FILTERS_ACTIVE,
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

export const removeAllActiveFilters = (
  payload: FilterState
): { type: string; payload: FilterState } => ({
  type: REMOVE_ALL_ACTIVE_FILTERS,
  payload,
});
