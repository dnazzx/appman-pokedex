// import { GET_CARD } from "../actions/types";

// import { bool } from "prop-types";

const initialState = {
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
          console.log(card)
          data_query = data_query.filter((q_card) =>{ 
            return q_card.id !== card.id
          })
          // console.log(data_query)
          return data_query
        })

        state = {
            ...state,
            query: data_query
        }
        return state;
    case "SELECT_CARD":
      const thiscard = action.item_card;
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
        selected: iSelected
          ? 
            state.selected
          : 
            [...state.selected, thiscard],
        query: state.query.filter((card) => {
          return card.id !== thiscard.id
        })
      };

      return state;

      case "DESELECT_CARD":
        state = { 
          ...state,
          selected: state.selected.filter((card) =>{ 
            return card.id !== action.item_card.id
          })
        }
      return state;

    default:
      return state;
  }
}
