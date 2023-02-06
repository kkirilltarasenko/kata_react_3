import React, { FC } from 'react';
import './TicketComponent.scss';
import { Ticket } from '../../redux-config/reducers/ticketsReducer/ticketsTypes';
import logo from '../../images/S7Logo.png';
import { format } from 'date-fns';

interface TicketComponentProps {
  ticket: Ticket;
}

const TicketComponent: FC<TicketComponentProps> = ({ ticket }): JSX.Element => {
  let duration;
  let _duration;

  let timeStart;
  let _timeStart;
  const timeEnd: string[] = [];
  const _timeEnd: string[] = [];

  let stops: { header: string; body: string } = { header: '', body: '' };
  let _stops: { header: string; body: string } = { header: '', body: '' };

  if (ticket !== undefined) {
    /* Duration parse */
    const num = ticket.segments[0].duration;
    const hours = Math.floor(num / 60);
    const minutes = num % 60;
    duration = `${hours}ч ${minutes}м`;

    const _num = ticket.segments[1].duration;
    const _hours = Math.floor(_num / 60);
    const _minutes = _num % 60;
    _duration = `${_hours}ч ${_minutes}м`;

    /* Date parse */
    timeStart = format(new Date(ticket.segments[0].date), 'h:m');
    const time = timeStart.split(':');
    const timeValue = Number(time[0]) * 60 + Number(time[1]) + num;
    let timeHours = Math.floor(timeValue / 60);
    if (timeHours > 24) {
      timeHours -= 24;
    }
    if (timeHours < 10) {
      timeEnd.push(`0${timeHours}`);
    } else {
      timeEnd.push(`${timeHours}`);
    }
    const timeMinutes = timeValue % 60;
    if (timeMinutes < 10) {
      timeEnd.push(`0${timeMinutes}`);
    } else {
      timeEnd.push(`${timeMinutes}`);
    }

    _timeStart = format(new Date(ticket.segments[1].date), 'h:m');
    const _time = _timeStart.split(':');
    const _timeValue = Number(_time[0]) * 60 + Number(_time[1]) + _num;
    let _timeHours = Math.floor(_timeValue / 60);
    if (_timeHours > 24) {
      _timeHours -= 24;
    }
    if (_timeHours < 10) {
      _timeEnd.push(`0${_timeHours}`);
    } else {
      _timeEnd.push(`${_timeHours}`);
    }
    const _timeMinutes = _timeValue % 60;
    if (_timeMinutes < 10) {
      _timeEnd.push(`0${_timeMinutes}`);
    } else {
      _timeEnd.push(`${_timeMinutes}`);
    }

    /* Stops parse */
    let header;
    let body;

    switch (ticket.segments[0].stops.length) {
      case 0:
        header = '0 пересадок';
        body = '-';
        break;
      case 1:
        header = '1 пересадка';
        body = ticket.segments[0].stops[0];
        break;
      default:
        header = `${ticket.segments[0].stops.length} пересадки`;
        body = ticket.segments[0].stops.join(',');
    }

    stops = {
      header,
      body,
    };

    switch (ticket.segments[1].stops.length) {
      case 0:
        header = '0 пересадок';
        body = '-';
        break;
      case 1:
        header = '1 пересадка';
        body = ticket.segments[1].stops[0];
        break;
      default:
        header = `${ticket.segments[1].stops.length} пересадки`;
        body = ticket.segments[1].stops.join(',');
    }

    _stops = {
      header,
      body,
    };
  }

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
            <h2 className="ticket__col--body">
              {timeStart}-{timeEnd.join(':')}
            </h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">В пути</h2>
            <h2 className="ticket__col--body">{duration}</h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">{stops.header}</h2>
            <h2 className="ticket__col--body">{stops.body}</h2>
          </div>
        </div>

        <div className="ticket__table">
          <div className="ticket__col">
            <h2 className="ticket__col--header">
              {ticket?.segments[1].origin} - {ticket?.segments[1].destination}
            </h2>
            <h2 className="ticket__col--body">
              {_timeStart}-{_timeEnd.join(':')}
            </h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">В пути</h2>
            <h2 className="ticket__col--body">{_duration}</h2>
          </div>
          <div className="ticket__col">
            <h2 className="ticket__col--header">{_stops.header}</h2>
            <h2 className="ticket__col--body">{_stops.body}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketComponent;
