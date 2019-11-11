import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryList from '../CategoryList/CategoryList';
import GoodsList from './GoodsList';
import './Goods.css';


class Goods extends Component {

  render() {
    return (
      <div className="goods">
        <div className="goods-sidebar">
          <CategoryList />
        </div>

        

        <div className="goods-list">
          <GoodsList />
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    goods: state.goods.all
  }
}

export default connect(mapStateToProps)(Goods);