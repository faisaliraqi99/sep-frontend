import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchGoods } from '../../redux/actions/goodsList';

class GoodsList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchGoods())
  }
  render() {
    const goods = this.props.goods;
    console.log(goods)
    return (
      <>
        {goods.map(item => (
          <div key={item._id}>{item.name}</div>
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

export default connect(mapStateToProps)(GoodsList);