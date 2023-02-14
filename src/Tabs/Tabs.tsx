import React, { FC } from 'react';
import './Tabs.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux-config/store';
import { setActiveTab } from '../redux-config/reducers/tabsReducer/tabsActions';
import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';
import {
  saveSource,
  setTicketsByTab,
} from '../redux-config/reducers/fullFilledTicketsReducer/fullFilledTicketsAction';
import { TabState } from '../redux-config/reducers/tabsReducer/tabsTypes';
import Tab from './Tab/Tab';

const Tabs: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  const tabs = useSelector((state: RootState) => state.tabs.tabs);
  const ticketsToShow: Ticket[] = useSelector(
    (state: RootState) => state.ticketsToShow.ticketsToShow
  );
  const tickets: Ticket[] = useSelector((state: RootState) => state.fullFilledTickets.tickets);

  const functionTab = (tab: TabState): void => {
    let _tickets: Ticket[] = [];
    if (tickets.length !== 0) {
      switch (tab.body) {
        case 'Самый дешевый':
          _tickets = tickets.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case 'Самый быстрый':
          _tickets = tickets.sort((a, b) => {
            const ticket = a.segments[0].duration + a.segments[1].duration;
            const _ticket = b.segments[0].duration + b.segments[1].duration;
            return ticket - _ticket;
          });
          break;
        case 'Оптимальный':
          _tickets = tickets.sort((a, b) => {
            const ticket = a.price + a.segments[0].duration + a.segments[1].duration;
            const _ticket = b.price + b.segments[0].duration + b.segments[1].duration;
            return ticket - _ticket;
          });
          break;
        default:
          break;
      }
      dispatch(setTicketsByTab(_tickets));
    } else {
      switch (tab.body) {
        case 'Самый дешевый':
          _tickets = ticketsToShow.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case 'Самый быстрый':
          _tickets = ticketsToShow.sort((a, b) => {
            const ticket = a.segments[0].duration + a.segments[1].duration;
            const _ticket = b.segments[0].duration + b.segments[1].duration;
            return ticket - _ticket;
          });
          break;
        case 'Оптимальный':
          _tickets = ticketsToShow.sort((a, b) => {
            const ticket = a.price + a.segments[0].duration + a.segments[1].duration;
            const _ticket = b.price + b.segments[0].duration + b.segments[1].duration;
            return ticket - _ticket;
          });
          break;
        default:
          break;
      }
      dispatch(saveSource(_tickets));
    }
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="tabs">
      {tabs.map((tab: TabState) => {
        return <Tab key={Math.random()} tab={tab} functionTab={functionTab} />;
      })}
    </div>
  );
};

export default Tabs;
