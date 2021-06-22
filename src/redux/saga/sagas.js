import { GET_CARD, GET_LIST, SELECT_CARD, DESELECT_CARD } from './types';

function* watchListPokedex() {
    yield takeLastest()
}

export default function* rootSage() {
    yield all([
        watchListPokedex()
    ])
  }