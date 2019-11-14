import React from 'react';
import { withRouter } from 'react-router-dom'
import './NavBar.css'
 
class NavBar extends React.Component {
  
  goTo = (str) => {
    this.props.history.push(str)
  }

  render() {
    return (
    <>
    <div className="nav">
      <h2 className="nav-home" onClick={()=>this.goTo('/')}>Logo</h2>
      
      <div>
        <button className="nav-goods" onClick={()=>this.goTo('/goods')}>Каталог</button>
        <button className="nav-about" onClick={()=>this.goTo('/about')}>о нас</button>
        <button className="nav-order" onClick={()=>this.goTo('/order')}>Сундук</button>
      </div>

    </div>
    </>  
    );
  }
}

export default withRouter(NavBar);