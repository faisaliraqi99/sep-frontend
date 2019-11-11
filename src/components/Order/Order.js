import React, { Component } from 'react';
import './Order.css';


class Order extends Component {
  render() {
    const category = this.props.data.category;
    const categoryName = this.props.data.categoryName;

    return (
      <div className="order">
        <div className="container">
          <h2>{category}</h2>
          <p>{categoryName}</p>
        </div>
      </div>
    );
  }
}

export default Order  ;