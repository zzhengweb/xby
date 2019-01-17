import {combineReducers} from 'redux-immutable';
import {reducer as homeBanner} from '../pages/home/store'

const reducer = combineReducers({
    banner: homeBanner
})

export default reducer;