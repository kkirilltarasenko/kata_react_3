import { SET_BUTTON_VISION } from '../../actionTypes';
import { ShowButtonTypes } from './showButtonTypes';
import { defaultState } from './showButtonState';

export const buttonReducer = (
  state = defaultState,
  action: { type: string; payload: boolean }
): ShowButtonTypes => {
  switch (action.type) {
    case SET_BUTTON_VISION:
      return {
        ...state,
        vision: action.payload,
      };
    default:
      return state;
  }
};
