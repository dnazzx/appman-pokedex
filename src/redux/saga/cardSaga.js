import * as type from "../actions/types";
import { call, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

const urlAPI = () => axios.get("http://localhost:3030/api/cards?limit=100");

function* getPokedex(payload) {
  try {
    const res = yield call(urlAPI);
    yield put({ type: type.GET_LIST, data: res.data.cards, payload });
  } catch (error) {
    yield put({ type: type.GET_LIST, payload: [] });
  }
}
function* addCard(payload) {
  try {
    yield put({ type: type.SELECT_CARD, payload });
  } catch (error) {
    yield put({ type: type.SELECT_CARD, payload: {} });
  }
}
function* removeCard(payload) {
  try {
    yield put({ type: type.DESELECT_CARD, payload });
  } catch (error) {
    yield put({ type: type.DESELECT_CARD, payload: {} });
  }
}
export default function* cardSaga() {
  yield takeLatest(type.REQUEST_CARD, getPokedex);
  yield takeLatest(type.REQUEST_ADD_CARD, addCard);
  yield takeLatest(type.REQUEST_REMOVE_CARD, removeCard);
}
