import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class GoodsList extends Component {
  handleClick = (id) => {
    console.log(id)
    this.props.history.push(`/goods/${id}`)
  }
  render() {
    const goods = this.props.goods;
    
    return (
      <>
        {goods.map(item => (
          <div onClick={() => this.handleClick(item._id)} key={item._id}>{item.name}</div>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    goods: state.goods.all
  }
}

export default withRouter(connect(mapStateToProps)(GoodsList));