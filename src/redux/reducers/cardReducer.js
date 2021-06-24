import * as type from "../actions/types";

const initialState = {
  selected: [],
  query: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.GET_LIST:
      let data_query = action.data;
      const keyword = action.payload.search;

      state.selected.map((card) => {
        data_query = data_query.filter((q_card) => {
          return q_card.id !== card.id;
        });
        return data_query;
      });

      const search_query = data_query.filter((card) => {
        if (card.name.toLowerCase().includes(keyword) !== false)
          return card.name.toLowerCase().includes(keyword);
        else if (card.type.toLowerCase().includes(keyword) !== false)
          return card.type.toLowerCase().includes(keyword);
        else return null;
      });

      state = {
        ...state,
        query: search_query,
      };
      return state;

    case type.SELECT_CARD:
      const thiscard = action.payload.item_card;
      let iSelected = undefined;
      if (state.selected.length > 0) {
        iSelected = state.selected.find((item) => {
          return item.id === thiscard.id ? true : false;
        });
      } else {
        iSelected = false;
      }

      state = {
        ...state,
        selected: iSelected ? state.selected : [...state.selected, thiscard],
        query: state.query.filter((card) => {
          return card.id !== thiscard.id;
        }),
      };

      return state;

    case type.DESELECT_CARD:
      state = {
        ...state,
        selected: state.selected.filter((card) => {
          return card.id !== action.payload.item_card.id;
        }),
      };
      return state;

    default:
      return state;
  }
}
