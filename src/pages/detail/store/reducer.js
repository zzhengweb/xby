import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
    imgUrl:'',
    destination:'',
    days:'',
    line:'',
    feature:[],
    hotal:'',
    activities:'',
    price:'',
    people:'',
    everyday:[]
});

export default (state=defaultState,action) => {
    switch(action.type){
        case actionTypes.GET_DETAIL_DATA:
            return state.merge({
                imgUrl:action.imgUrl,
                destination:action.destination,
                days:action.days,
                line:action.line,
                feature:action.feature,
                hotal:action.hotal,
                activities:action.activities,
                peice:action.peice,
                people:action.people,
                everyday:action.everyday
            })
        default:
            return state
    }
}