import React, { FC, useEffect } from 'react';
import './Filter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import {
  FilterState,
  setActiveFilter,
  setAllFilterActive,
  removeAllFilterActive,
  setAllFiltersActive,
  removeAllActiveFilters,
} from '../redux-config/reducers/filterReducer';
import { Checkbox } from 'antd';

const Filter: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters.filters);

  const setFilter = (filter: FilterState): void => {
    if (filter.body === 'Все') {
      if (!filter.checked) {
        dispatch(setAllFiltersActive(filter));
      } else {
        dispatch(removeAllActiveFilters(filter));
      }
    } else {
      dispatch(setActiveFilter(filter));
    }
  };

  const activeCheckboxes: Array<FilterState | null> = filters
    .map((el: FilterState) => {
      if (el.checked) {
        return el;
      }
      return null;
    })
    .filter((el: FilterState | null) => el !== null);

  const allFilter = filters[0];

  useEffect(() => {
    if (activeCheckboxes.length === 4) {
      dispatch(setAllFilterActive(allFilter));
    }
    if (activeCheckboxes.length < 5) {
      dispatch(removeAllFilterActive(allFilter));
    }
  }, [allFilter, activeCheckboxes.length, dispatch]);

  return (
    <div className="filters">
      <h1 className="filters__title">Количество пересадок</h1>
      {filters.map((filter: FilterState) => (
        <div key={filter.id} className="filters__element">
          <li
            className="filters__element__box"
            onChange={() => {
              setFilter(filter);
            }}
          >
            <Checkbox checked={filter.checked}>
              <h2 className="filters__element__title">{filter.body}</h2>
            </Checkbox>
          </li>
        </div>
      ))}
    </div>
  );
};

export default Filter;
