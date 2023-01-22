export interface ValueState {
  value: number;
}

const defaultState: ValueState = {
  value: 1,
};

const Increment = 'Increment';
const Decrement = 'Decrement';

export const firstReducer = (
  state = defaultState,
  action: { type: string; value: number }
): ValueState => {
  switch (action.type) {
    case Increment:
      return { ...state, value: state.value + action.value };
    case Decrement:
      return { ...state, value: state.value - action.value };
    default:
      return state;
  }
};
