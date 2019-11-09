import React, { Component } from 'react';

import CategoryList from '../CategoryList/CategoryList';
import GoodsList from './GoodsList';

class Goods extends Component {
  render() {
    return (
      <div className="goods">
        <div className="goods-sidebar">
          <CategoryList />
        </div>
        <div className="goods-list">
          SHIRDAKI
          <GoodsList />
        </div>
      </div>
    );
  }
}

export default Goods;