import { ADD_ARTICLE } from "../constants/action-types";
import { FOUND_BAD_WORD } from "../constants/action-types"

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload }
  };
export function foundBadWord(payload) {
  return { type: FOUND_BAD_WORD, payload}
};
