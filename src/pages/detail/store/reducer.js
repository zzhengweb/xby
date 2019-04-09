import { fromJS } from 'immutable';

const defaultState = fromJS({
    detailContent:[]
});

export default (state=defaultState,action) => {
    switch(action.type){
        default:
            return state
    }
}