import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryList from '../CategoryList/CategoryList';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <CategoryList />
        </div>
          <div className="footer">
            <ul className="footDesc">У нас вы получите:</ul>
              <li className="desc">Качественное обслуживание</li>
              <li className="desc">Качественное обслуживание</li>
              <li className="desc">Качественное обслуживание</li>
              <li className="desc">Качественное обслуживание</li>
              <li className="desc">Качественное обслуживание</li>
              <li className="desc">Качественное обслуживание</li>
          </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home);