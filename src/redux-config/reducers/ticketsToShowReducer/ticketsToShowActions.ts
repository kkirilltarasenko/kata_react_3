import { ADD_FIVE_TICKETS } from '../../actionTypes';
import { Ticket } from '../ticketsReducer/ticketsTypes';

export const addTicketsToShow = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: ADD_FIVE_TICKETS,
  payload,
});
