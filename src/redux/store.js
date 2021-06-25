import { createStore, applyMiddleware, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import cardReducer from './reducers/cardReducer';
import rootSaga from './saga/index';

const reducers = combineReducers({
    card: cardReducer
})
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

export default store;