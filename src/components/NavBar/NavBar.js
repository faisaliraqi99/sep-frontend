import React from 'react';
import { withRouter } from 'react-router-dom'
import './NavBar.css'
 
class NavBar extends React.Component {
  
  handleCLick = (item) => {
    this.props.history.push(`/order/${item}`)
  }

  render() {
    const handleCLick = this.props.handleCLick;
    return (
    <>
    <div className="nav">
        <p className="navImg1"></p>
        <span className="zag">Sep.kg</span>
        <div className="navImg" onClick={handleCLick}/>
        <span className="predl">Собери свой сеп</span>
    </div>
    </>  
    );
  }
}

export default withRouter(NavBar);