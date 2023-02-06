import { INCREMENT, RELOAD } from '../../actionTypes';

export const incrementCurrentIndex = (payload: number): { type: string; payload: number } => ({
  type: INCREMENT,
  payload,
});

export const reloadCurrentIndex = (): { type: string } => ({
  type: RELOAD,
});
