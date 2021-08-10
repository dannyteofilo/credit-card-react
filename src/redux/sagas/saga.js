import {
    put,
    call,
    takeLatest
} from 'redux-saga/effects';
import Driver from '../../../services/DriverService'
import * as list from './actions';
import * as actions from 'shared/redux/constants';



function* performCreate(action) {
    try {
        yield put(list.starts());

        const response = yield call(Driver.create,action.payload);        
        yield put(list.success(response));
    } catch (error) {
        yield put(list.fails({
            error
        }));
    } finally {
        yield put(list.ends());
    }
}

export default function* watchFetch() {

    yield takeLatest(actions.DRIVER_CREATE_PERFORM_FETCH, performCreate);

}