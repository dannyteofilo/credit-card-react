import { fork, all } from "redux-saga/effects";

import form from "../sagas/saga";

export default function* rootSaga() {
  yield all([fork(form)]);
}
