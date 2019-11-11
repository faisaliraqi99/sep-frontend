export const addToOrder = (order, product) => {
    let newOrder = {...order};
    newOrder.goods.push(product);
    return {
        type: 'ADD_TO_ORDER',
        payload: newOrder
    }
}