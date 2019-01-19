import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getBannerAction = (data) => {
    return {
        type:actionTypes.GTE_BANNER_LIST,
        data:fromJS(data.bannerImg),
        wxImg:fromJS(data.wxImg[0]),
        adNavImg:fromJS(data.adNavImg[0])
    }
}

const getShowAction = (data) => ({
    type:actionTypes.GET_SHOW_ACTION,
    list:fromJS(data)
})

export const makeWxShow = () => ({
    type:actionTypes.MAKE_WX_SHOW
})

export const makeWxHide = () => ({
    type:actionTypes.MAKE_WX_HIDE
})

export const makeWxOut = () => ({
    type:actionTypes.MAKE_WX_OUT
})

export const getBannerList = () => {
    return (dispatch) => {
        axios.get('/api/banner.json').then((res) => {
            const data = res.data.data;
            // console.log(data);
			dispatch(getBannerAction(data));
		})
    }
}

export const getTravelShow = () => {
    return (dispatch) => {
        axios.get('/api/home-place.json').then((res) => {
            const data = res.data.data;
            // console.log(data);
			dispatch(getShowAction(data));
		})
    }
}