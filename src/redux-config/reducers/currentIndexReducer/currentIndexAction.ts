import { INCREMENT } from '../../actionTypes';

export const incrementCurrentIndex = (payload: number): { type: string; payload: number } => ({
  type: INCREMENT,
  payload,
});
