import { ADD_FIVE_TICKETS } from '../../actionTypes';
import { TicketsToShowTypes } from './ticketsToShowTypes';
import { defaultState } from './ticketsToShowState';
import { Ticket } from '../ticketsReducer/ticketsTypes';

export const ticketsToShowReducer = (
  state = defaultState,
  action: { type: string; payload: Ticket[] }
): TicketsToShowTypes => {
  switch (action.type) {
    case ADD_FIVE_TICKETS:
      return { ...state, ticketsToShow: [...state.ticketsToShow, ...action.payload] };
    default:
      return state;
  }
};
