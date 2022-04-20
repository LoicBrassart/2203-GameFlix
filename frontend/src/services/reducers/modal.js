const initialState = {
  show: true,
};

export default (state = initialState, action) => {
  const { type, load } = action;
  switch (type) {
    case "SHOW":
      return { ...state, show: true };
    case "HIDE":
      return { ...state, show: false };
    default:
      return state;
  }
};
