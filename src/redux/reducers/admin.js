const initialState = [
  {
    name:'',
    phone:'',
    goods: []
  }
]

export default (state = initialState, action)=>{
  switch (action.type) {
    case 'GET_ORDERS_SUCCESS': return action.payload;
    default: return(state)
  }
}