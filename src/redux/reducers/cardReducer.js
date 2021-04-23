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
        query: action.payload,
        loading: false,
      };

    case "GET_LIST":
        //รับข้อมูลที่ได้จากการค้นหา
        let data_query = action.payload;
        const keyword = action.search;

        state.selected.map((card) => {
          data_query = data_query.filter((q_card) =>{
            return q_card.id !== card.id
          })
          return data_query
        })
        // console.log(data_query)
        
        const search_query = data_query.filter((card) => {
            if (card.name.toLowerCase().includes(keyword) !== false)
              return card.name.toLowerCase().includes(keyword)
            else if (card.type.toLowerCase().includes(keyword) !== false)
              return card.type.toLowerCase().includes(keyword)
            else 
              return null
        })

        state = {
            ...state,
            query: search_query
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
