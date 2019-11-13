import React, { Component } from 'react';
import { connect } from 'react-redux';

import CategoryList from '../CategoryList/CategoryList';
import './Home.css';
import GoodsList from '../Goods/GoodsList';

class Home extends Component {
  previewDisabled = ()=>{
    document.querySelector('.preview').className="preview preview-disabled"
  }
  render() {
    return (
    <>
      <div onClick={this.previewDisabled} className='preview preview-disabled'>
        <div className="preview-content">
          Добро пожаловать
        </div>
      </div>


      <div className="home">
        <div className="container">
        </div>
      </div>
    </>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home);