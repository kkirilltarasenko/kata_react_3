import { INCREMENT, RELOAD } from '../../actionTypes';

interface PrevIndexType {
  value: number;
}

const defaultState: PrevIndexType = {
  value: 0,
};

export const prevIndexReducer = (
  state = defaultState,
  action: { type: string; payload: number }
): PrevIndexType => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case RELOAD:
      return { ...state, value: 0 };
    default:
      return state;
  }
};
