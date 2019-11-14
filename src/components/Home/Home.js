import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Home.css';

class Home extends Component {
  previewDisabled = ()=>{
    document.querySelector('.preview').className="preview preview-disabled"
  }
  render() {
    return (
    <>
      <div onClick={this.previewDisabled} className='preview'>
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