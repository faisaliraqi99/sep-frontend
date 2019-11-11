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
<<<<<<< HEAD
        <p className="navImg1"></p>
        <span className="zag">Sep.kg</span>
        <div className="navImg" onClick={handleCLick}/>
        <span className="predl">Собери свой сеп</span>
    </div>
=======
      <div className="navNav">
        <p>Собери свой</p> 
        <div className="navImg" onClick={handleCLick}>

        </div>
        <p>Сеп сам</p>
      </div>
      </div>
    <div></div>
>>>>>>> 390037965e763d87b9f1a52195ef2189ab08bc33
    </>  
    );
  }
}

export default withRouter(NavBar);