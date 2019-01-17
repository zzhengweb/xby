import axios from 'axios';

export const getBannerList = () => {
    return (dispatch) => {
        axios.get('/api/banner.json').then((res) => {
			const data = res.data.data;
			dispatch(data);
		})
    }
}