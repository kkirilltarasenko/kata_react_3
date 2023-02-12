import { Ticket } from '../ticketsReducer/ticketsTypes';
import { CLEAR_TICKETS_BY_FILTER, FILL, SET_BY_FILTER, SET_BY_TAB } from '../../actionTypes';

interface FullFilledTicketsType {
  tickets: Ticket[];
  source: Ticket[];
}

const defaultState: FullFilledTicketsType = {
  tickets: [],
  source: [],
};

export const fullFilledTicketsReducer = (
  state = defaultState,
  action: { type: string; payload: Ticket[] }
): FullFilledTicketsType => {
  switch (action.type) {
    case FILL:
      return { ...state, source: action.payload };
    case SET_BY_TAB:
      return {
        ...state,
        tickets: action.payload,
      };
    case SET_BY_FILTER:
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload].reverse(),
      };
    case CLEAR_TICKETS_BY_FILTER:
      return {
        ...state,
        tickets: action.payload,
      };
    default:
      return state;
  }
};
