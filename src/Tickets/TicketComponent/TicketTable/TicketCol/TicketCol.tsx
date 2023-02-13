import React, { FC } from 'react';
import '../../TicketComponent.scss';

interface TicketColProps {
  header: string;
  body: string;
}

const TicketCol: FC<TicketColProps> = ({ header, body }): JSX.Element => {
  return (
    <div className="ticket__col">
      <h2 className="ticket__col--header">{header}</h2>
      <h2 className="ticket__col--body">{body}</h2>
    </div>
  );
};

export default TicketCol;
