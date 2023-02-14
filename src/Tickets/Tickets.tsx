import React, { FC, useEffect } from 'react';
/* Redux */
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import {
  addTicketsToShow,
  clearTicketsToShow,
} from '../redux-config/reducers/ticketsToShowReducer/ticketsToShowActions';
import { setButtonVision } from '../redux-config/reducers/showButtonReducer/showButtonAction';
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

  const vision: boolean = useSelector((state: RootState) => state.button.vision);

  const tabs = useSelector((state: RootState) => state.tabs.tabs);
  const filters = useSelector((state: RootState) => state.filters.filters);

  const index = useSelector((state: RootState) => state.index.value);

  useEffect(() => {
    if (tickets.length === 0) {
      const ticketsPreview: Ticket[] = [source[0], source[1], source[2], source[3], source[4]];
      dispatch(clearTicketsToShow(ticketsPreview));
    } else {
      const ticketsPreview: Ticket[] = [tickets[0], tickets[1], tickets[2], tickets[3], tickets[4]];
      dispatch(clearTicketsToShow(ticketsPreview));
    }
  }, [dispatch, tickets, tickets.length, source, tabs, filters]);

  const addFiveMoreTickets = (): void => {
    if (tickets.length === 0) {
      const _tickets: Ticket[] = [
        source[index],
        source[index + 1],
        source[index + 2],
        source[index + 3],
        source[index + 4],
      ];
      dispatch(setIndexValue(5));
      dispatch(addTicketsToShow(_tickets));
    } else {
      dispatch(addTicketsToShow(tickets));
      dispatch(setButtonVision(false));
    }
  };

  return source.length !== 0 ? (
    <div className="tickets">
      {ticketsToShow.map((el: Ticket) => (
        <TicketComponent key={Math.random()} ticket={el} />
      ))}
      <ShowMoreButton body={'Показать еще'} onClick={addFiveMoreTickets} vision={vision} />
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
