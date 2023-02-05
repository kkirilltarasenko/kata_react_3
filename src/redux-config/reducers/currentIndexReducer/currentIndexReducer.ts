import { INCREMENT } from '../../actionTypes';

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
    default:
      return state;
  }
};
