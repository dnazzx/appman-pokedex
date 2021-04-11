// import { GET_CARD } from "../actions/types";

const initialState = {
  listPokedex: [],
  loading: false,
  selected: [],
  query: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_CARD":
      return {
        ...state,
        listPokedex: action.payload,
        loading: false,
      };
    case "GET_LIST":
        //รับข้อมูลที่ได้จากการค้นหา
        let data_query = action.payload;
        // let listPokedex = action.payload
        
        state.selected.map((card) => {
          return data_query = data_query.filter((q_card) =>{ return q_card.id !== card.id})
        })

        state = {
            ...state,
            listPokedex: data_query,
            query: data_query
        }
        return state;
    case "SELECT_CARD":
      const thiscard = action.item_card;
      let isSelected = undefined;
      console.log(state.selected)
      if (state.selected.length > 0) {
        isSelected = state.selected.find((item) => {
          return item.id === thiscard.id ? true : false;
        });
      } else {
        isSelected = false;
      }
      console.log(isSelected)
      
      state = {
        ...state,
        selected: isSelected
          ? 
            state.selected
          : 
            [...state.selected, thiscard]
      };

      return state;

    case "DESELECT_CARD":
      state = { 
        ...state,
        selected: state.selected.filter((card) =>{ return card.id !== action.id})
      }
    return state;

    default:
      return state;
  }
}
