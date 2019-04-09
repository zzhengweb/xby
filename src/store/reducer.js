import {combineReducers} from 'redux-immutable';
import { reducer as banner } from '../common/Banner/store'
import { reducer as home } from '../pages/home/store'
import { reducer as detail } from '../pages/detail/store'

const reducer = combineReducers({
    banner,
    home,
    detail
})

export default reducer;