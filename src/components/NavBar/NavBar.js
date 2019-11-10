import React from 'react';

import './NavBar.css'
 
class NavBar extends React.Component {
  
  handleCLick = (item) => {
    console.log(item)  
    // this.props.history.push(`/order/${item}`)
  }

  render() {
    const handleCLick = this.props.handleCLick;
    return (
    <>
    <div className="nav">
      <div className="navNav">
        <p>Собери свой</p> 
        <div className="navImg" onClick={handleCLick}>

        </div>
        <p>Сеп сам</p>
      </div>
      </div>
    <div></div>
    </>  
    );
  }
}

export default NavBar;