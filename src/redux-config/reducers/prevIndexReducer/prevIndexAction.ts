import { INCREMENT, RELOAD } from '../../actionTypes';

export const incrementPrevIndex = (payload: number): { type: string; payload: number } => ({
  type: INCREMENT,
  payload,
});

export const reloadPrevIndex = (): { type: string } => ({
  type: RELOAD,
});
