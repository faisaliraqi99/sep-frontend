
const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GOODS_SUCCESS': return action.payload
    default: return state;
  }
}