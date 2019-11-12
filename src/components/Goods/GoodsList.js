import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class GoodsList extends Component {
  handleClick = (id) => {
    this.props.history.push(`/goods/${id}`)
  }
  render() {
    const goods = this.props.goods;
    
    return (
      <>
<<<<<<< HEAD
        {goods.map(item => {
          console.log(item)
          return (
          <div className="good" style={{backgroundImage: `url(http://localhost:8000/img/${item.img})`}} onClick={() => this.handleClick(item._id)} key={item._id}>
            <div className="item-img-darkness"></div>
            
            <h3 className="item-goods">
              {item.name}
            </h3>
            
            <span className="item-price">
              {item.price}
            </span>
=======
        {goods.map((item, index) => (
          <div className="good"  onClick={() => this.handleClick(item._id)} key={item._id}>
            <img alt={"item-img" + index} className="item-img" src={`http://localhost:8000/img/${item.img}`}></img>
            <div className="item-desc">
              <h3 className="item-goods">
                {item.name}
              </h3>
              
              <span className="item-price">
                {item.price}
              </span>
            </div>
>>>>>>> a25914775deb42652c16c8bbf7ee141668a94e77
          </div>
        )})}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    goods: state.goods.all
  }
}

export default withRouter(connect(mapStateToProps)(GoodsList));