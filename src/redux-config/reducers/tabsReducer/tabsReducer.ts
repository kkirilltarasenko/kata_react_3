import { SET_ACTIVE_TAB, DEACTIVATE_ALL_TABS } from '../../actionTypes';
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
          tab.active = tab.id === action.payload.id;
          return tab;
        }),
      };
    case DEACTIVATE_ALL_TABS:
      return {
        ...state,
        tabs: state.tabs.map((tab: TabState) => {
          tab.active = false;
          return tab;
        }),
      };
    default:
      return state;
  }
};
