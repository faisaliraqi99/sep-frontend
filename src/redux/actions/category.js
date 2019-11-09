import axios from 'axios';

export const fetchCategorySuccess = (data) => {
  console.log(data)
  return {
    type: 'FETCH_CATEGORY_SUCCESS',
    payload: data
  }
}

export const fetchCategory = () => {
  return async dispatch => {
    let response = await axios.get('http://localhost:8000/categories' );
    dispatch(fetchCategorySuccess(response.data))
  }
}