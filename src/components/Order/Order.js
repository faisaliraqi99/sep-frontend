import React, { Component } from 'react';
import './Order.css';

import { connect } from 'react-redux';

class Order extends Component {
  render() {
    return (
      <div className="order">
        <div className="container">
          <h2>Order</h2>
          <p>Some p</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    order: state.order
  }
}

export default connect(mapStateToProps)(Order);