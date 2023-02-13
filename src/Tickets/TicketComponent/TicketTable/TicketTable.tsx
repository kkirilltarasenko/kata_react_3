import React, { FC } from 'react';
import TicketCol from './TicketCol/TicketCol';

interface TicketTableProps {
  origin: string;
  destination: string;
  date: string;
  duration: string;
  stopsHeader: string;
  stopsBody: string;
}

const TicketTable: FC<TicketTableProps> = ({
  origin,
  destination,
  date,
  duration,
  stopsHeader,
  stopsBody,
}): JSX.Element => {
  return (
    <div className="ticket__table">
      <TicketCol header={`${origin} - ${destination}`} body={`${date}`} />
      <TicketCol header={`В пути`} body={`${duration}`} />
      <TicketCol header={`${stopsHeader}`} body={`${stopsBody}`} />
    </div>
  );
};

export default TicketTable;
