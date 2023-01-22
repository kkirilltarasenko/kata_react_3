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

const SET_ACTIVE = 'SET_ACTIVE';

export const filterTabsReducer = (
  state = defaultState,
  action: { type: string; payload: TabState }
): TabsState => {
  switch (action.type) {
    case SET_ACTIVE:
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

export const setActiveAction = (payload: TabState): { type: string; payload: TabState } => ({
  type: SET_ACTIVE,
  payload,
});
