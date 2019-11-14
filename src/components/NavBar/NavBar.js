import React from 'react';
import { withRouter } from 'react-router-dom'
import './NavBar.css'
import { connect } from 'react-redux';
 
class NavBar extends React.Component {
  
  goTo = (str) => {
    this.props.history.push(str)
  }

  render() {
    let notifs = this.props.order.goods.length
    return (
    <>
    <div className="nav">
      <h2 className="nav-home" onClick={()=>this.goTo('/')}>Logo</h2>
      
      <div>
        <button className="nav-goods" onClick={()=>this.goTo('/goods')}>Каталог</button>
        <button className="nav-about" onClick={()=>this.goTo('/about')}>о нас</button>
        <button className="nav-order" onClick={()=>this.goTo('/order')}>Сундук
          {notifs ?
            <span className="badge">{notifs}</span> : null
          }
        </button>
      </div>
    </div>
    
    <div className="psevdoNav"></div>
    </>  
    );
  }
}

const mapStateToProps = state =>{
  return {
    order: state.order
  }
}

export default withRouter(connect(mapStateToProps)(NavBar));