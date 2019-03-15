import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getBannerAction = (data) => {
    return {
        type:actionTypes.GTE_BANNER_LIST,
        data:fromJS(data.bannerImg)
    }
}

export const getBannerList = () => {
    return (dispatch) => {
        axios.get('/api/banner.json').then((res) => {
            const data = res.data.data;
			dispatch(getBannerAction(data));
		})
    }
}