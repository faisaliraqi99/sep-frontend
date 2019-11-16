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
      <div className="logo">
        <div className="logoImg"></div>
      </div>
      <h2 className="nav-home" onClick={()=>this.goTo('/')}>СЕП</h2>
      
      <div>
        <button className="nav-domoi" onClick={()=>this.goTo('/')}>Домой</button>
        <span className="nav-goods" onClick={()=>this.goTo('/goods')}>
          Каталог
          <span className="nav-goods-folder">
            <a href="/goods">Все</a><br/>
            <a href="/goods">Шырдаки</a><br/>
            <a href="/goods">Сундук</a><br/>
            <a href="/goods">Посуда</a><br/>
            <a href="/goods">Ковры</a><br/>
            <a href="/goods">Постельное бельё</a><br/>
            <a href="/goods">Жоолук</a><br/>
            <a href="/goods">Жаздык</a><br/>
          </span>  
        </span>
        <button className="nav-about" onClick={()=>this.goTo('/about')}>О нас</button>
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