import { Ticket } from '../redux-config/reducers/ticketsReducer/ticketsTypes';

export interface ReturnValue {
  _ticketsToShow: Ticket[];
  _currentIndex: number;
}

export const useTicketsToShow = (
  tickets: Ticket[],
  _prevIndex: number,
  _amountToShow: number
): ReturnValue => {
  const _ticketsToShow: Ticket[] = [];
  let index = 0;
  for (let i = _prevIndex; i < _amountToShow; i++) {
    _ticketsToShow.push(tickets[i]);
    index = i;
  }

  return {
    _ticketsToShow,
    _currentIndex: index + 1,
  };
};
