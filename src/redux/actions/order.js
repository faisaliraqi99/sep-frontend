export const addToOrder = (order, product) => {
    let newOrder = {...order};
    newOrder.goods.push(product);
    localStorage.setItem('Order', JSON.stringify(newOrder));
    return {
        type: 'ADD_TO_ORDER',
        payload: newOrder
    }
}

export const getOrder = ()=>{
    return {
        type: 'GET_ORDER',
        payload: JSON.parse(localStorage.getItem('Order'))
    }
}

export const inputName = (name) => {
    return {
        type: 'INPUT_ORDER_NAME',
        payload: name
    };
}
export const inputPhone = (phone) => {
    return {
        type: 'INPUT_ORDER_PHONE',
        payload: phone
    };
}