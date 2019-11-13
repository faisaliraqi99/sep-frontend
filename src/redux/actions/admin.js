import axios from 'axios';
export const getOrdersSuccess = (data) => {
    return {
        type: 'GET_ORDERS_SUCCESS',
        payload: data
    }
}

export const getOrders = (dispatch) => {
    return async dispatch => {
        let response = await axios.get('http://localhost:8000/orders');
        dispatch(getOrdersSuccess(response.data))
    }
}