import { INCREMENT, RELOAD } from '../../actionTypes';

interface CurrentIndexType {
  value: number;
}

const defaultState: CurrentIndexType = {
  value: 5,
};

export const currentIndexReducer = (
  state = defaultState,
  action: { type: string; payload: number }
): CurrentIndexType => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + action.payload };
    case RELOAD:
      return { ...state, value: 5 };
    default:
      return state;
  }
};
