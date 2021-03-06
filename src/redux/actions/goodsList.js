import axios from 'axios';

export const fetchGoodsSuccess = (data) => {
  return {
    type: 'FETCH_GOODS_SUCCESS',
    payload: data
  }
}

export const fetchGoods = () => {
  return async dispatch => {
    let response = await axios.get('http://localhost:8000/items');
    dispatch(fetchGoodsSuccess(response.data))
  }
}

export const fetchFilteredGoods = (cat) => {
  return async dispatch => {
    let response = await axios.get(`http://localhost:8000/find/category/${cat}`)
    dispatch(fetchGoodsSuccess(response.data))
  }
}
