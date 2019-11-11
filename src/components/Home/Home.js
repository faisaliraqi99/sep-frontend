import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { connect } from 'react-redux';

import CategoryList from '../CategoryList/CategoryList';
import './Home.css';
import NavBar from '../NavBar/NavBar';

class Home extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/order'>
          <NavBar handleClick={this.handleClick}/>.
        </Route>
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
                  standard dummy text ever since the 1500s, when an unknown </div>
          </div>
          </div>
      </div>
    </Router>
    );
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps)(Home);