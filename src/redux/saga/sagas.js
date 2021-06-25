import { all, call, put } from 'redux-saga/effects'

import { GET_LIST, SELECT_CARD, DESELECT_CARD } from '../actions/types';

const urlAPI = "http://localhost:3030/api/cards?limit=100";

function getAPI() {
  return fetch(urlAPI, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

function* getMyPokedex(idcard, query) {

    try {
        const res = yield call(getAPI);
        console.log(res.cards)
        console.log(idcard)
        console.log(query)
        yield put({type: GET_LIST, payload: res.data.cards, id: idcard, search: query });
    } catch (error) {
        yield put({type: GET_LIST, payload: {}})
    }
}

function* addCard(card) {
    try {
        yield put({ type: SELECT_CARD, item_card: card });
    } catch (error) {
        yield put({ type: SELECT_CARD, item_card: {} })
    }
}

function* removeCard(item) {
    try {
        yield put({ type: DESELECT_CARD, item_card: item })
    } catch (error) {
        yield put({ type: DESELECT_CARD, item_card: {} })
    }
}

export default function* rootSaga() {
    yield all([
        getMyPokedex(),
        // addCard(),
        // removeCard()
    ])
  }