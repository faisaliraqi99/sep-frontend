
const initialState = {
  all: [
    {
      _id: 'SUPERUNIQID',
      name: 'ШЫРДАК ТОПЧИК ВАЩЕ',
      description: 'Лучший из лучших',
      price: 100,
      category: 'SHYRDAK'
    }
  ]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_GOODS_SUCCESS': return {
      ...state,
      all: action.payload
    }
    default: return state;
  }
}