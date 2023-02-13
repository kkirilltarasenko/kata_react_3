import React, { FC } from 'react';
import './TicketComponent.scss';
import { Ticket } from '../../redux-config/reducers/ticketsReducer/ticketsTypes';
import logo from '../../images/S7Logo.png';
import { format } from 'date-fns';
import { TicketPrototype } from './TicketPrototype';
import TicketTable from './TicketTable/TicketTable';

interface TicketComponentProps {
  ticket: Ticket;
}

const TicketComponent: FC<TicketComponentProps> = ({ ticket }): JSX.Element => {
  let ticketPrototype: TicketPrototype;

  let duration: [string, string] = ['', ''];
  let date: [string, string] = ['', ''];
  let stops: [{ header: string; body: string }, { header: string; body: string }] = [
    { header: '', body: '' },
    { header: '', body: '' },
  ];

  if (ticket !== undefined) {
    ticketPrototype = new TicketPrototype(
      ticket.segments[0].duration,
      ticket.segments[1].duration,
      format(new Date(ticket.segments[0].date), 'h:m'),
      format(new Date(ticket.segments[1].date), 'h:m'),
      ticket.segments[0].stops,
      ticket.segments[1].stops
    );

    duration = ticketPrototype.durationParse();
    date = ticketPrototype.dateParse();
    stops = ticketPrototype.stopsParse();
  }

  return (
    <div className="ticket">
      <div className="ticket__header">
        <h1 className="ticket__price">{ticket?.price}</h1>
        <img src={logo} alt="" className="ticket__logo" />
      </div>
      <div className="ticket__body">
        <TicketTable
          origin={`${ticket?.segments[0].origin}`}
          destination={`${ticket?.segments[0].destination}`}
          date={`${date[0]}`}
          duration={`${duration[0]}`}
          stopsHeader={`${stops[0].header}`}
          stopsBody={`${stops[0].body}`}
        />
        <TicketTable
          origin={`${ticket?.segments[1].origin}`}
          destination={`${ticket?.segments[1].destination}`}
          date={`${date[1]}`}
          duration={`${duration[1]}`}
          stopsHeader={`${stops[1].header}`}
          stopsBody={`${stops[1].body}`}
        />
      </div>
    </div>
  );
};

export default TicketComponent;