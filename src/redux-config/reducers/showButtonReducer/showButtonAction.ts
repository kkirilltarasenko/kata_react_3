import { SET_BUTTON_VISION } from '../../actionTypes';

export const setButtonVision = (payload: boolean): { type: string; payload: boolean } => ({
  type: SET_BUTTON_VISION,
  payload,
});
