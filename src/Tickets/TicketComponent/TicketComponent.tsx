import React, { FC } from 'react';
import './TicketComponent.scss';
import { Ticket } from '../../redux-config/reducers/ticketsReducer/ticketsTypes';
import logo from '../../images/S7Logo.png';

interface TicketComponentProps {
  ticket?: Ticket;
}

const TicketComponent: FC<TicketComponentProps> = ({ ticket }): JSX.Element => {
  return (
    <div className="ticket">
      <div className="ticket__header">
        <h1 className="ticket__price">{ticket?.price}</h1>
        <img src={logo} alt="" className="ticket__logo" />
      </div>
      <div className="ticket__body">
        <div className="ticket__table">
          <div className="ticket__col">
            <h2 className="ticket__col--header">
              {ticket?.segments[0].origin} - {ticket?.segments[0].destination}
            </h2>
            <h2 className="ticket__col--body">{ticket?.segments[0].duration}</h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">В пути</h2>
            <h2 className="ticket__col--body">{ticket?.segments[0].duration}</h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">{ticket?.segments[0].stops.length} пересадки</h2>
            <h2 className="ticket__col--body">{ticket?.segments[0].stops.join(',')}</h2>
          </div>
        </div>

        <div className="ticket__table">
          <div className="ticket__col">
            <h2 className="ticket__col--header">
              {ticket?.segments[1].origin} - {ticket?.segments[1].destination}
            </h2>
            <h2 className="ticket__col--body">{ticket?.segments[1].duration}</h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">В пути</h2>
            <h2 className="ticket__col--body">{ticket?.segments[1].duration}</h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">{ticket?.segments[1].stops.length} пересадки</h2>
            <h2 className="ticket__col--body">{ticket?.segments[0].stops.join(',')}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
