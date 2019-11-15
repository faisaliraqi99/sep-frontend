import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import headerImg from '../img/3kyz.jpg'
import './Home.css';

class Home extends Component {
  previewDisabled = ()=>{
    document.querySelector('.preview').className="preview preview-disabled"
  }
  headerBtnClick = ()=>{
    this.props.history.push('/goods')
  }
  render() {
    return (
    <>
      <div onClick={this.previewDisabled} className='preview  preview-disabled'>
        <div className="preview-content">
          Добро пожаловать
        </div>
      </div>


      <div className="home">
        <div className="container">
          <div className="home-header">
            <img className="home-header-img" src={headerImg} alt="header"></img>
            <div className="home-header-body">
              <div className="home-header-card">
              </div>
            </div>
                <div className="home-header-text">
                  <div className="home-header-logo"></div>
                  <h2>What is Lorem Ipsum?</h2>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  <button className="headerBtn" onClick={this.headerBtnClick}>
                    <div className="headerBtn-blink"></div>
                    Собери свой сундук
                  </button>
                </div>
          </div>
        </div>
      </div>
    </>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default withRouter(connect(mapStateToProps)(Home));