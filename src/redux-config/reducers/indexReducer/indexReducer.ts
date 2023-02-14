const defaultState: { value: number } = {
  value: 5,
};

export const indexReducer = (
  state = defaultState,
  action: { type: string; payload: number }
): { value: number } => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
};
