import { SET_ACTIVE_TAB } from '../../actionTypes';
import { TabState } from './tabsTypes';

export const setActiveTab = (payload: TabState): { type: string; payload: TabState } => ({
  type: SET_ACTIVE_TAB,
  payload,
});
