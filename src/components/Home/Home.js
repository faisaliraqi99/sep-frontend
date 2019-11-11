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
        <div className="footerLeft">
          <p className="desc1">Наш адрес: <br/>lorem ipsum</p>
          <p className="desc2">Наш телефон: <br/>02325656235</p>
        </div>  
        <div className="footerRight">
          <div className="desc3">

            <p>У нас вы получите:</p>
              What is Lorem Ipsum?<br/>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's <br/>
              standard dummy text ever since the 1500s, when an unknown 
          </div>
        </div>
      </div>
    </div>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home);