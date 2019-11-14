export const addToOrder = (order, product) => {
    let newOrder = {...order};
    product.num=1;
    newOrder.goods.push(product);
    localStorage.setItem('Order', JSON.stringify(newOrder));
    return {
        type: 'ADD_TO_ORDER',
        payload: newOrder
    }
}

export const getOrder = ()=>{
    let order = JSON.parse(localStorage.getItem('Order'));
    if(order===null){
        order={
            goods:[]
        }
    }
    return {
        type: 'GET_ORDER',
        payload: order
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

export const incrementItem = (order, index) => {
    if(order.goods.length===0)return;
    let newOrder = {...order};
    newOrder.goods[index].num++;
    localStorage.setItem('Order', JSON.stringify(newOrder))
    return{
        type: 'DECREMENT_ITEM',
        payload: newOrder
    }
}

export const decrementItem = (order, index) => {
    if(order.goods.length===0)return;
    let newOrder = {...order};
    newOrder.goods[index].num--;
    localStorage.setItem('Order', JSON.stringify(newOrder))
    return{
        type: 'DECREMENT_ITEM',
        payload: newOrder
    }
}

export const deleteOrderItem = (order, index) => {
    if(order.goods.length===0)return;
    let newOrder = {...order};
    newOrder.goods.splice(index, 1);
    localStorage.setItem('Order', JSON.stringify(newOrder))
    return{
        type: 'DELETE_ORDER_ITEM',
        payload: newOrder
    }
}