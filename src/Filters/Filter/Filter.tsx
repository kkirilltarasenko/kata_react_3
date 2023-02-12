import React, { FC } from 'react';
import { FilterState } from '../../redux-config/reducers/filterReducer/filterTypes';
import { Checkbox } from 'antd';
import '../Filters.scss';

interface FilterProps {
  filter: FilterState;
  filterFunction: (filter: FilterState) => void;
}

const Filter: FC<FilterProps> = ({ filter, filterFunction }): JSX.Element => {
  return (
    <div className="filters__element">
      <li
        className="filters__element__box"
        onChange={() => {
          filterFunction(filter);
        }}
      >
        <Checkbox checked={filter.checked}>
          <h2 className="filters__element__title">{filter.body}</h2>
        </Checkbox>
      </li>
    </div>
  );
};

export default Filter;
