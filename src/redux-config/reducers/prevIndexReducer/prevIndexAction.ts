import { INCREMENT } from '../../actionTypes';

export const incrementPrevIndex = (payload: number): { type: string; payload: number } => ({
  type: INCREMENT,
  payload,
});
