
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
        case "ADD_TO_ORDER":return action.payload
        default: return state;
    }
}