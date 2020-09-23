const reducer = (state, { type, payload }) => {
  switch (type) {
    case "setLocationData":
      return { ...state, ...payload };
    case "toggleSearch":
      return { ...state, showSearch: payload };
    default:
      return state;
  }
};

export default reducer;
