
const initialState = {
  name: '',
  phone: '',
  goods: [{
    _id: 'SUPERUNIQID',
    name: 'ШЫРДАК',
    description: 'Лучший из лучших',
    price: 100,
    category: 'SHYRDAK'
  }]
}

export default (state = initialState, action) => {
  switch(action.type) {
    default: return state;
  }
}