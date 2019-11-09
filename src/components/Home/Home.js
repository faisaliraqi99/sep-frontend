import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryList from '../CategoryList/CategoryList';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          HOME
          <CategoryList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home);