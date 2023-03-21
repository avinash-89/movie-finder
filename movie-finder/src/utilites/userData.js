import {
  getValueFromLocalStorage,
  setValueInLocalStorage,
} from "../managers/localStorage-manager";
import LOCAL_CONSTANTS from "../constants/localStorage-constants";
import { checkNested } from "./utils";

const userDetailsDB = JSON.parse(getValueFromLocalStorage(LOCAL_CONSTANTS.USER_DETAILS));

export function storeUserDetails(currentUserDetails) {
  setValueInLocalStorage(
    LOCAL_CONSTANTS.USER_DETAILS,
    JSON.stringify({ ...userDetailsDB, ...currentUserDetails })
  );
}

export function isUserIdPresentInDB(userId) {
  return checkNested(userDetailsDB, userId);
}
