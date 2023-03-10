import React, { FC, useEffect } from 'react';
/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import {
  addTicketsToShow,
  clearTicketsToShow,
} from '../redux-config/reducers/ticketsToShowReducer/ticketsToShowActions';
import { setIndexValue } from '../redux-config/reducers/indexReducer/indexActions';
/* Components */
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';
import TicketComponent from './TicketComponent/TicketComponent';
/* Antd */
import { Space, Spin } from 'antd';
/* Styles */
import './Tickets.scss';

const Tickets: FC = (): JSX.Element => {
  const dispatch = useDispatch();

  const source: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.source);
  const tickets: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.tickets);
  const ticketsToShow: Ticket[] = useSelector(
    (state: RootState) => state.ticketsToShow.ticketsToShow
  );

  const tabs = useSelector((state: RootState) => state.tabs.tabs);
  const filters = useSelector((state: RootState) => state.filters.filters);

  const index = useSelector((state: RootState) => state.index.value);

  useEffect(() => {
    if (source.length !== 0) {
      dispatch(
        clearTicketsToShow(
          ticketsToShow.length === 0
            ? [source[0], source[1], source[2], source[3], source[4]]
            : ticketsToShow
        )
      );
    }
  }, [dispatch, source, ticketsToShow, tabs, filters]);

  const addFiveMoreTickets = (): void => {
    const _tickets: Ticket[] = [
      source[index],
      source[index + 1],
      source[index + 2],
      source[index + 3],
      source[index + 4],
    ];
    dispatch(setIndexValue(5));
    dispatch(addTicketsToShow(_tickets));
  };

  return source.length !== 0 ? (
    <div className="tickets">
      {(tickets.length === 0 ? ticketsToShow : tickets).map((el: Ticket) => (
        <TicketComponent key={Math.random()} ticket={el} />
      ))}
      <ShowMoreButton body={'???????????????? ??????'} onClick={addFiveMoreTickets} />
    </div>
  ) : (
    <div className="tickets__loading">
      <Space size="middle">
        <Spin size="large" tip="Receiving tickets" />
      </Space>
    </div>
  );
};

export default Tickets;
