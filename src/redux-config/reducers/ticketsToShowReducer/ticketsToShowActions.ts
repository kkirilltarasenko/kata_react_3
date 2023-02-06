import { ADD_FIVE_TICKETS, CLEAR_TICKETS_TO_SHOW } from '../../actionTypes';
import { Ticket } from '../ticketsReducer/ticketsTypes';

export const addTicketsToShow = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: ADD_FIVE_TICKETS,
  payload,
});

export const clearTicketsToShow = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: CLEAR_TICKETS_TO_SHOW,
  payload,
});
