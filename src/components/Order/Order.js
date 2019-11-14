import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import './Order.css';
import { 
  inputName, 
  inputPhone, 
  getOrder, 
  incrementItem,
  decrementItem,
  deleteOrderItem
} from '../../redux/actions/order';

class Order extends Component {
  getOrder = () =>{
    this.props.dispatch(getOrder())
  }
  enterOrder = ()=>{
    Axios.post('http://localhost:8000/newOrder',this.props.order);
  }
  inputName = (e) => {
    this.props.dispatch(inputName(e.target.value))
  }
  inputPhone = (e) => {
    this.props.dispatch(inputPhone(e.target.value))
  }
  componentDidMount(){
    this.getOrder();
  }
  incrementItem = (i)=>{
    this.props.dispatch(incrementItem(this.props.order, i))
  }
  decrementItem = (i)=>{
    this.props.dispatch(decrementItem(this.props.order, i))
  }
  deleteOrderItem = (i)=>{
    this.props.dispatch(deleteOrderItem(this.props.order, i))
  }
  render() {
    let fullPrice = 0;
    return (
      <>
      <div className="order">
        <div className="container">
          <table>
            <caption> Ваш заказ:</caption>
            <thead>
              <tr>
                <th>Товар:</th>
                <th>Цена</th>
                <th>Кол-во:</th>
                <th>Всего:</th>
                <th></th>
              </tr>
            </thead>
            
            <tbody>
              {this.props.order.goods.map((item, index)=>{
                  fullPrice+=item.num*item.price;
                return(
                  <tr key={index} className="order-item">
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>
                          <button onClick={()=>this.decrementItem(index)}>&lt;</button>
                            {item.num}
                          <button onClick={()=>this.incrementItem(index)}>&gt;</button>
                        </td>
                        <td>{item.price*item.num}</td>
                        <td><button onClick={()=>this.deleteOrderItem(index)}>X</button></td>
                  </tr>
                )
              })}
            </tbody>

            <tfoot>
              <tr>
                <th>
                  Всего:{fullPrice}
                </th>
              </tr>
            </tfoot>
          </table>
          <div className="btn-order">
            <input onInput={this.inputName} className="inp" placeholder="Введите имя"/>
            <input onInput={this.inputPhone} className="inp" placeholder="Введите номер"/>
            <button onClick={this.enterOrder} className="btn-ord">Оформить заказ</button>
          </div>
        </div>
      </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  }
}

export default connect(mapStateToProps)(Order);