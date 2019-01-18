import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getBannerAction = (data) => ({
    type:actionTypes.GET_BANNER_LIST,
    data:fromJS(data)
})

export const getBannerList = () => {
    return (dispatch) => {
        axios.get('/api/banner.json').then((res) => {
            const data = res.data.data;
            console.log(data);
			dispatch(getBannerAction(data));
		}).catch(() => {
			console.log('error');
		})
    }
}