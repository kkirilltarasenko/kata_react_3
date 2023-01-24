import { TabsState } from './tabsTypes';

export const defaultState: TabsState = {
  tabs: [
    {
      id: 1,
      body: 'Самый дешевый',
      active: true,
    },
    {
      id: 2,
      body: 'Самый быстрый',
      active: false,
    },
    {
      id: 3,
      body: 'Оптимальный',
      active: false,
    },
  ],
};
