import React, { Component } from 'react';
import { connect } from 'react-redux';

class ProductPage extends Component {
  render() {
    const data = this.props.data;
    console.log(data)
    return (
      <div className="product-page">
        {data.name}
      </div>
    );
  }
}

export default connect()(ProductPage);