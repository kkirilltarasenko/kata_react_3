export const setIndexValue = (payload: number): { type: string; payload: number } => ({
  type: 'INCREMENT',
  payload,
});
