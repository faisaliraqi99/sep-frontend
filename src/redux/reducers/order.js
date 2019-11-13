
const initialState = {
    name: '',
    phone: '',
    goods: [
        {
            _id: 'SUPERUNIQID',
            name: 'ШЫРДАК',
            description: 'Лучший из лучших',
            price: 100,
            category: 'SHYRDAK'
        }
    ]
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
        default: return state;
    }
}