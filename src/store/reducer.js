import {combineReducers} from 'redux-immutable';
import { reducer as banner } from '../common/Banner/store'
import { reducer as home } from '../pages/home/store'

const reducer = combineReducers({
    banner,
    home
})

export default reducer;