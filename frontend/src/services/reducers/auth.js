const initialState = {
  token: null,
  user: {
    id: null,
    mail: null,
    pseudo: null,
  },
};

export default (state = initialState, action) => {
  const { type, load } = action;
  switch (type) {
    case "LOGIN":
      return { ...state, user: load };
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};
