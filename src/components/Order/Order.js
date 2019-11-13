import React, { Component } from 'react';
import Axios from 'axios';
import { connect } from 'react-redux';

import './Order.css';
import { inputName, inputPhone, getOrder } from '../../redux/actions/order';

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
  render() {
    let fullPrice = 0;
    return (
      <>
      <div className="order">
        <div className="container">
          <div className="order-header">
            <h1>Ваш заказ:</h1>
          </div>
          <ul>
            {this.props.order.goods.map((item, index)=>{
                fullPrice+=+item.price;
              return(
                <li key={index} className="order-item">
                    <div>Товар- 
                      <span>{item.name}</span><br/>
                    </div>
                    <div>Цена-
                      <span>{item.price}</span>
                    </div>
                </li>
              )
            })}
          </ul>
          <div className="oreder-fullPrice">
            <div>Всего:
            {fullPrice}
            </div>
          <div className="btn-order">
            <input onInput={this.inputName} className="inp" placeholder="Введите имя"/>
            <input onInput={this.inputPhone} className="inp" placeholder="Введите номер"/>
            <button onClick={this.enterOrder} className="btn-ord">Оформить заказ</button>
          </div>  
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