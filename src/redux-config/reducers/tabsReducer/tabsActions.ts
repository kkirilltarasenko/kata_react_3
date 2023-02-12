import { DEACTIVATE_ALL_TABS, SET_ACTIVE_TAB } from '../../actionTypes';
import { TabState } from './tabsTypes';

export const setActiveTab = (payload: TabState): { type: string; payload: TabState } => ({
  type: SET_ACTIVE_TAB,
  payload,
});

export const deactivateAllTabs = (): { type: string } => ({
  type: DEACTIVATE_ALL_TABS,
});
