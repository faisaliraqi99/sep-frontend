
const initialState = {
    name: '',
    phone: '',
    goods: []
}

export default (state = initialState, action) => {
    switch(action.type) {
        case "ADD_TO_ORDER":return action.payload;
        case 'GET_ORDER':return action.payload
        case 'INPUT_ORDER_NAME':return{
            ...state,
            name: action.payload
        }
        case 'INPUT_ORDER_PHONE':return {
            ...state,
            phone:action.payload
        };
        case 'INCREMENT_ITEM':return action.payload;
        case 'DECREMENT_ITEM':return action.payload;
        case 'DELETE_ORDER_ITEM':return action.payload;
        default: return state;
    }
}