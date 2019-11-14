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
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    goods: state.goods
  }
}

export default withRouter(connect(mapStateToProps)(GoodsList));