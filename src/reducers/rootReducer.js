import {combineReducers} from 'redux'

import snacksReducer from './snacksReducer'

const rootReducer = combineReducers({
    snacks: snacksReducer
})

export default rootReducer