
import {fromJS} from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    wxImg:'',
    adNavImg:'',
    wxShow:false,
    wxMoveOut:false,
    travel:[],
    hotLine:[],
    comment:[],
    showNum:0
})

export default (state=defaultState,action) => {
    switch(action.type){
        case actionTypes.MAKE_WX_SHOW:
            return state.merge({
                wxShow:true,
                wxMoveOut:true
            })
        case actionTypes.GTE_CONTACT_LIST:
            return state.merge({
                wxImg:action.wxImg,
                adNavImg:action.adNavImg
            })
        case actionTypes.MAKE_WX_HIDE:
            return state.set('wxShow', false)
        case actionTypes.MAKE_WX_OUT:
            return state.set('wxMoveOut', false)
        case actionTypes.GET_SHOW_ACTION:
            return state.set('travel', action.list)
        case actionTypes.GET_LINE_ACTION:
            return state.set('hotLine', action.list)
        case actionTypes.GET_COMMENT:
            return state.set('comment', action.list)
        case actionTypes.CHANGE_NUM_ACTION:
            return state.set('showNum', action.num)
        default:
            return state
    }
}