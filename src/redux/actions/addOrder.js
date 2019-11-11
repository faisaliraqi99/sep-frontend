import axios from 'axios'
export const fetchOrderSuccess = (data) => {
    return{
        type:'FETCH_ORDER_SUCCESS',
        payload: data
    }
}

export const fetchOrder = ()=>{
    return async dispatch=>{
        let response = await axios.get('http://localhost:8000/orders');
        dispatch(fetchOrderSuccess(response.data))
    }
}

export const addOrderSuccess = data=>{
    return{
        type:'ADD_ORDER_SUCCESS',
        payload: data
    }
}

export const addOrder = item => {
    return async dispatch => {
        let response = await axios.post('http://localhost:8000/newOrder');
        dispatch(addOrderSuccess(response.data))
    }
}