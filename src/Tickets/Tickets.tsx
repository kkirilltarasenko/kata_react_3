import React, { FC, useEffect } from 'react';
/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import {
  addTicketsToShow,
  clearTicketsToShow,
} from '../redux-config/reducers/ticketsToShowReducer/ticketsToShowActions';
import { incrementPrevIndex } from '../redux-config/reducers/prevIndexReducer/prevIndexAction';
import { incrementCurrentIndex } from '../redux-config/reducers/currentIndexReducer/currentIndexAction';
/* Components */
import ShowMoreButton from './ShowMoreButton/ShowMoreButton';
import TicketComponent from './TicketComponent/TicketComponent';
/* Antd */
import { Space, Spin } from 'antd';
/* Styles */
import './Tickets.scss';

const Tickets: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const tickets: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.tickets);
  const ticketsToShow: Ticket[] = useSelector(
    (state: RootState) => state.ticketsToShow.ticketsToShow
  );
  const prevIndex = useSelector((state: RootState) => state.prevIndex.value);
  const currentIndex = useSelector((state: RootState) => state.currentIndex.value);
  const tabs = useSelector((state: RootState) => state.tabs.tabs);

  useEffect(() => {
    if (tabs[0].active) {
      tickets.sort((a, b) => {
        return a.price - b.price;
      });
    }

    if (tabs[1].active) {
      tickets.sort((a, b) => {
        const ticket = a.segments[0].duration + a.segments[1].duration;
        const _ticket = b.segments[0].duration + b.segments[1].duration;
        return ticket - _ticket;
      });
    }

    if (tabs[2].active) {
      tickets.sort((a, b) => {
        const ticket = a.price + a.segments[0].duration + a.segments[1].duration;
        const _ticket = b.price + b.segments[0].duration + b.segments[1].duration;
        return ticket - _ticket;
      });
    }

    dispatch(clearTicketsToShow([tickets[0]]));
    dispatch(incrementPrevIndex(1));
    dispatch(incrementCurrentIndex(1));
  }, [dispatch, tickets, tabs]);

  const addFiveMoreTickets = (): void => {
    const _tickets: Ticket[] = [];
    for (let i: number = prevIndex; i < currentIndex; i++) {
      _tickets.push(tickets[i]);
    }

    dispatch(addTicketsToShow(_tickets));
    dispatch(incrementPrevIndex(5));
    dispatch(incrementCurrentIndex(5));
  };

  return tickets.length !== 0 ? (
    <div>
      {ticketsToShow.map((el: Ticket) => (
        <TicketComponent key={Math.random()} ticket={el} />
      ))}
      <ShowMoreButton onClick={addFiveMoreTickets} body={'Показать еще 5 билетов !'} />
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
