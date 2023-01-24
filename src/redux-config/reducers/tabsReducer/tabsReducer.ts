import { SET_ACTIVE_TAB } from '../../actionTypes';
import { TabsState, TabState } from './tabsTypes';
import { defaultState } from './tabsState';

export const tabsReducer = (
  state = defaultState,
  action: { type: string; payload: TabState }
): TabsState => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        tabs: state.tabs.map((tab: TabState) => {
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
