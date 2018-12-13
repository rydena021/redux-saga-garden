import { all } from 'redux-saga/effects';
import plantsSaga from './plants.saga';

export default function* rootSaga() {
  yield all([
    plantsSaga()
  ]);
}
