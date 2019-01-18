import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    bannerImg:[]
})

export default (state=defaultState,action) => {
  switch(action.type) {
    case actionTypes.GET_BANNER_LIST:
      return state.set('bannerImg',action.data);
    default:
			return state;
  }
}