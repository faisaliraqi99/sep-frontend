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
        <span>Sep.kg</span>
        <div className="navImg" onClick={handleCLick}/>
        <span>Собери свой сеп</span>
    </div>
    </>  
    );
  }
}

export default withRouter(NavBar);