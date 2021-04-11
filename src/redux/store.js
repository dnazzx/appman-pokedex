import { createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk'
import cardReducer from './reducers/cardReducer'

const reducers = combineReducers({
    card:cardReducer
})
const store = createStore( reducers,applyMiddleware(thunk))

export default store;