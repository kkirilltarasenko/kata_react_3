import { Ticket } from '../ticketsReducer/ticketsTypes';
import {
  CLEAR_TICKETS_BY_FILTER,
  FILL,
  SET_BY_FILTER,
  SET_BY_TAB,
  SAVE_SOURCE,
} from '../../actionTypes';

export const filledTickets = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: FILL,
  payload,
});

export const setTicketsByFilter = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: SET_BY_FILTER,
  payload,
});

export const setTicketsByTab = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: SET_BY_TAB,
  payload,
});

export const clearTicketsByFilter = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: CLEAR_TICKETS_BY_FILTER,
  payload,
});

export const saveSource = (payload: Ticket[]): { type: string; payload: Ticket[] } => ({
  type: SAVE_SOURCE,
  payload,
});
