import store from '../store';
import axios from 'axios';

import { GET_CARD, GET_LIST, SELECT_CARD, DESELECT_CARD } from './types';

//Get card
export const getListPokedex = () => (dispatch) => {
    axios
        .get('http://localhost:3030/api/cards')
        .then((res) => { 
            // console.log(res.data.cards)
            dispatch({ type: GET_CARD, payload: res.data.cards,})
        })
         .catch((err) =>
            dispatch({
                type: GET_CARD,
                payload: {},
            })
        )
}

//for search
export const getMyPokedex = (idcard) => (dispatch) => {
    axios
        .get("http://localhost:3030/api/cards")
        .then((res) => { 
            dispatch({ type: GET_LIST, payload: res.data.cards, id: idcard })
        })
         .catch((err) =>
            dispatch({
                type: GET_LIST,
                payload: {},
            })
        )
}

export function addCard(card) {
    // console.log(card)
    return store.dispatch({ type: SELECT_CARD, item_card: card });
}

export function removeCard(item) {
    // console.log(item)
    return store.dispatch({ type: DESELECT_CARD, item_card: item });
}