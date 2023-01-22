import { SET_ACTIVE_TAB } from '../actions';

export interface TabsState {
  tabs: TabState[];
}

export interface TabState {
  id: number;
  body: string;
  active: boolean;
}

const defaultState: TabsState = {
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

export const tabsReducer = (
  state = defaultState,
  action: { type: string; payload: TabState }
): TabsState => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        tabs: state.tabs.map((tab) => {
          if (tab.id === action.payload.id) {
            tab.active = !tab.active;
          } else {
            tab.active = false;
          }
          return tab;
        }),
      };
    default:
      return state;
  }
};

export const setActiveTab = (payload: TabState): { type: string; payload: TabState } => ({
  type: SET_ACTIVE_TAB,
  payload,
});
