import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import axios from 'axios';

const getShowAction = (data) => ({
    type:actionTypes.GET_SHOW_ACTION,
    list:fromJS(data)
})

const getContacteAction = (data) => ({
    type:actionTypes.GTE_CONTACT_LIST,
    wxImg:fromJS(data.wxImg[0]),
    adNavImg:fromJS(data.adNavImg[0])
})

const getLineAction = (data) => ({
    type:actionTypes.GET_LINE_ACTION,
    list:fromJS(data.line)
})

const getComentAction = (data) => ({
    type: actionTypes.GET_COMMENT,
    list: fromJS(data.comment)
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

export const getTravelShow = () => {
    return (dispatch) => {
        axios.get('/api/home-place.json').then((res) => {
            const data = res.data.data;
			dispatch(getShowAction(data));
		})
    }
}

export const getHotLine = () => {
    return (dispatch) => {
        axios.get('/api/hotLine.json').then((res) => {
            const data = res.data.data;
			dispatch(getLineAction(data));
		})
    }
}

export const getContact = () => {
    return (dispatch) => {
        axios.get('/api/banner.json').then((res) => {
            const data = res.data.data;
			dispatch(getContacteAction(data));
		})
    }
}

export const getComment = () => {
    return (dispatch) => {
        axios.get('/api/comment.json').then((res) => {
            const data = res.data.data;
            dispatch(getComentAction(data));
        })
    }
}

export const changeNum = (n) => ({
    type:actionTypes.CHANGE_NUM_ACTION,
    num:n
})