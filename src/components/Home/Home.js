import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryList from '../CategoryList/CategoryList';
import './Home.css';
import GoodsList from '../Goods/GoodsList';

class Home extends Component {
  render() {
    return (
    <div className="home">
      <CategoryList />
      <div className="container">
        <GoodsList/>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home);