const initialState = [
  {
    categoryName: 'Ширдаки',
    category: 'SHYRDAK'
  }
]

export default (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_CATEGORY_SUCCESS' :  return action.payload
    default: return state; 
  }
}