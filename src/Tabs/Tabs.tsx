import React, { FC } from 'react';
import './Tabs.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { setActiveTab } from '../redux-config/reducers/tabsReducer/tabsActions';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import { setTicketsByTab } from '../redux-config/reducers/fullFilledTicketsReducer/fullFilledTicketsAction';

const Tabs: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootState) => state.tabs.tabs);
  const source: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.source);
  const tickets: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.tickets);
  const [cheep, fast, optimal] = tabs;

  const cheepTab = (): void => {
    const _tickets = (tickets.length === 0 ? source : tickets).sort((a, b) => {
      return a.price - b.price;
    });
    dispatch(setTicketsByTab(_tickets));
    dispatch(setActiveTab(cheep));
  };

  const fastTab = (): void => {
    const _tickets = (tickets.length === 0 ? source : tickets).sort((a, b) => {
      const ticket = a.segments[0].duration + a.segments[1].duration;
      const _ticket = b.segments[0].duration + b.segments[1].duration;
      return ticket - _ticket;
    });
    dispatch(setTicketsByTab(_tickets));
    dispatch(setActiveTab(fast));
  };

  const optimalTab = (): void => {
    const _tickets = (tickets.length === 0 ? source : tickets).sort((a, b) => {
      const ticket = a.price + a.segments[0].duration + a.segments[1].duration;
      const _ticket = b.price + b.segments[0].duration + b.segments[1].duration;
      return ticket - _ticket;
    });
    dispatch(setTicketsByTab(_tickets));
    dispatch(setActiveTab(optimal));
  };

  return (
    <div className="tabs">
      <li
        className={cheep.active ? 'tabs__element tabs__element--active' : 'tabs__element'}
        onClick={() => {
          cheepTab();
        }}
      >
        <h1 className="tabs__element__title">{cheep.body}</h1>
      </li>
      <li
        className={fast.active ? 'tabs__element tabs__element--active' : 'tabs__element'}
        onClick={() => {
          fastTab();
        }}
      >
        <h1 className="tabs__element__title">{fast.body}</h1>
      </li>
      <li
        className={optimal.active ? 'tabs__element tabs__element--active' : 'tabs__element'}
        onClick={() => {
          optimalTab();
        }}
      >
        <h1 className="tabs__element__title">{optimal.body}</h1>
      </li>
    </div>
  );
};

export default Tabs;
