import * as actionTypes from './actionTypes';
import axios from 'axios';

export const get_detail = () => {
    return () => {
        axios('/api/detail.json').then((res) => {
            const data = res.data;
            console.log(data);
        })
    }
}