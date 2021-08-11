import { put, call, takeLatest } from "redux-saga/effects";
import SubmitForm from "../../services/Form";
import * as submit from "../actions/actions";
import { actions } from "../../types/redux";

function* performCreate(action) {
  try {
    yield put(submit.starts());

    const response = yield call(SubmitForm.create, action.payload);
    yield put(submit.success(response.data));
  } catch (error) {
    yield put(
      submit.fails({
        error,
      })
    );
  } finally {
    yield put(submit.ends());
  }
}

export default function* watchFetch() {
  yield takeLatest(actions.form_request_fetch, performCreate);
}
