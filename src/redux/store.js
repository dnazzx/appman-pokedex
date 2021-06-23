import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import cardReducer from './reducers/cardReducer'

const reducers = combineReducers({
    card: cardReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store;

// import { createStore, applyMiddleware, combineReducers} from 'redux'
// import { composeWithDevTools } from "redux-devtools-extension";
// import createSagaMiddleware from 'redux-saga'
// import cardReducer from './reducers/cardReducer'

// import rootSaga from './saga/sagas'

// const reducers = combineReducers({
//     card: cardReducer
// })
// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware)))

// sagaMiddleware.run(rootSaga)

// export default store;