import * as type from "./types";

export const getMyPokedex = (idcard, query) => {
  return { type: type.REQUEST_CARD, id: idcard, search: query };
};

export function addCard(card) {
  return { type: type.REQUEST_ADD_CARD, item_card: card };
}

export function removeCard(item) {
  return { type: type.REQUEST_REMOVE_CARD, item_card: item };
}
