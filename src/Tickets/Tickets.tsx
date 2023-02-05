import React, { FC, useEffect } from 'react';
/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import { addTicketsToShow } from '../redux-config/reducers/ticketsToShowReducer/ticketsToShowActions';
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

  useEffect(() => {
    const _tickets: Ticket[] = [];
    for (let i: number = prevIndex; i < currentIndex; i++) {
      _tickets.push(tickets[i]);
    }
    dispatch(addTicketsToShow(_tickets));
  }, [dispatch, tickets, prevIndex, currentIndex]);

  const addFiveMoreTickets = (): void => {
    dispatch(incrementPrevIndex(5));
    dispatch(incrementCurrentIndex(5));
  };

  return tickets.length !== 0 ? (
    <div>
      {ticketsToShow.map((el: Ticket, index) =>
        index >= 5 ? (
          <TicketComponent key={Math.random()} ticket={el} />
        ) : (
          <div key={Math.random()} style={{ display: 'none' }}></div>
        )
      )}
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
