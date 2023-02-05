import { Ticket } from '../ticketsReducer/ticketsTypes';

export const filledTickets = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: 'FILL',
  payload,
});
