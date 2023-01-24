import { FiltersState } from './filterTypes';

export const defaultState: FiltersState = {
  filters: [
    {
      id: 1,
      body: 'Все',
      checked: false,
    },
    {
      id: 2,
      body: 'Без пересадок',
      checked: false,
    },
    {
      id: 3,
      body: '1 пересадка',
      checked: false,
    },
    {
      id: 4,
      body: '2 пересадки',
      checked: false,
    },
    {
      id: 5,
      body: '3 пересадки',
      checked: false,
    },
  ],
};
