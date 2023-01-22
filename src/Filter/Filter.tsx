import React, { FC } from 'react';
import './Filter.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import {
  FilterState,
  setActiveFilter,
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
