import React, { FC, useEffect } from 'react';
import './Filters.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import {
  setActiveFilter,
  setAllFilterActive,
  removeAllFilterActive,
  setAllFiltersActive,
  deactivateAllFilters,
} from '../redux-config/reducers/filterReducer/filterActions';
import { FilterState } from '../redux-config/reducers/filterReducer/filterTypes';
import { Checkbox } from 'antd';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import Filter from './Filter/Filter';
import {
  setTicketsByFilter,
  clearTicketsByFilter,
  setTicketsByTab,
  clearTickets,
} from '../redux-config/reducers/fullFilledTicketsReducer/fullFilledTicketsAction';
import { deactivateAllTabs } from '../redux-config/reducers/tabsReducer/tabsActions';

const Filters: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters.filters);
  const source: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.source);
  const tickets: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.tickets);

  const allFilterElem = filters[0];
  const filtersWithoutAll = [filters[1], filters[2], filters[3], filters[4]];

  const activeCheckboxes: Array<FilterState | null> = filters
    .map((el: FilterState) => {
      if (el.body !== 'Все') {
        if (el.checked) {
          return el;
        }
      }
      return null;
    })
    .filter((el: FilterState | null) => el !== null);

  useEffect(() => {
    if (activeCheckboxes.length === 4) {
      dispatch(setAllFilterActive(allFilterElem));
    }
    if (activeCheckboxes.length === 3) {
      dispatch(removeAllFilterActive(allFilterElem));
    }
  }, [dispatch, allFilterElem, activeCheckboxes.length]);

  const allFilter = (): void => {
    dispatch(setTicketsByTab(source));
    if (!allFilterElem.checked) {
      dispatch(setAllFiltersActive(allFilterElem));
    } else {
      dispatch(deactivateAllFilters());
      dispatch(clearTickets());
    }
    dispatch(deactivateAllTabs());
  };

  const filterFunction = (filter: FilterState): void => {
    dispatch(setActiveFilter(filter));
    let nonCheckedTickets: Ticket[] = [];
    const _tickets = source.filter((el: Ticket) => {
      return (
        el.segments[0].stops.length === filter.value && el.segments[1].stops.length === filter.value
      );
    });
    if (!filter.checked) {
      nonCheckedTickets = tickets.filter((el: Ticket) => {
        return !_tickets.includes(el);
      });
      dispatch(clearTicketsByFilter(nonCheckedTickets));
    } else {
      dispatch(setTicketsByFilter(_tickets));
    }
    dispatch(deactivateAllTabs());
  };

  return (
    <div className="filters">
      <h1 className="filters__title">Количество пересадок</h1>
      <div className="filters__elements">
        <div className="filters__element">
          <li
            className="filters__element__box"
            onChange={() => {
              allFilter();
            }}
          >
            <Checkbox checked={allFilterElem.checked}>
              <h2 className="filters__element__title">{allFilterElem.body}</h2>
            </Checkbox>
          </li>
        </div>
        <>
          {filtersWithoutAll.map((filter: FilterState) => {
            return <Filter key={Math.random()} filter={filter} filterFunction={filterFunction} />;
          })}
        </>
      </div>
    </div>
  );
};

export default Filters;
