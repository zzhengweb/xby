import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

const getDetailData = (data) => ({
    type:actionTypes.GET_DETAIL_DATA,
    imgUrl:fromJS(data.imgUrl),
    destination:fromJS(data.destination),
    days:fromJS(data.days),
    line:fromJS(data.line),
    feature:fromJS(data.feature),
    hotal:fromJS(data.hotal),
    activities:fromJS(data.activities),
    price:fromJS(data.price),
    people:fromJS(data.people),
    everyday:fromJS(data.everyday)
})

export const get_detail = (id) => {
    return (dispatch) => {
        axios('/api/detail.json?id='+id).then((res) => {
            const data = res.data.data[0];
            console.log(data);
            dispatch(getDetailData(data));
        })
    }
}