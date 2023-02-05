import { Ticket } from '../ticketsReducer/ticketsTypes';

interface FullFilledTicketsType {
  tickets: Ticket[];
}

const defaultState: FullFilledTicketsType = {
  tickets: [],
};

export const fullFilledTicketsReducer = (
  state = defaultState,
  action: { type: string; payload: Ticket[] }
): FullFilledTicketsType => {
  switch (action.type) {
    case 'FILL':
      return { ...state, tickets: action.payload };
    default:
      return state;
  }
};
