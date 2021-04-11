const initialState = {
  listPokedex: [],
  isFetchiing: false,
};

export default function listPokedex(state = initialState, action) {
  switch (action.type) {
    case "FETCHING_LIST":
      return {
        ...state,
        listPokedex: action.payload,
        isFetchiing: true,
      };
    case "FETCHED_LIST":
      return {
        ...state,
        listPokedex: action.payload,
        isFetchiing: false,
      };

    default:
      return state;
  }
}
