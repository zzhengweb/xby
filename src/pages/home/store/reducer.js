import {fromJS} from 'immutable';

const defaultState = fromJS({
    bannerImg:[]
})

export default (state=defaultState,action) => {
    return state
}