
const initialState = {
  all: [
    {
      _id: 'SUPERUNIQID',
      name: 'ШЫРДАК ТОПЧИК ВАЩЕ',
      description: 'Лучший из лучших',
      price: 100,
      category: 'SHYRDAK'
    }
  ],
  current: 'SUPERUNIQID'
}

export default (state = initialState, action) => {
  switch (action.type) {
    default: return state;
  }
}