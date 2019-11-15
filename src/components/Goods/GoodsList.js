import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addToOrder } from '../../redux/actions/order'

class GoodsList extends Component {
  handleClick = (id) => {
    this.props.history.push(`/goods/${id}`)
  }

  handleAdd = (e, item) => {
    e.stopPropagation();
    this.props.dispatch(addToOrder(this.props.order, item))
  }
  render() {
    const goods = this.props.goods;
    
    return (
      <>
        {goods.map((item, index) => (
          <div className="good" key={item._id}>
            <div className="goodImgContainer">
              <img alt={"item-img" + index} className="item-img" src={`http://localhost:8000/img/${item.img}`}></img>
              <span className="item-goods">
                <span className="item-goods-text">{item.name}</span>
                
                <div className="item-desc">
                  <span className="item-price">
                    {item.price} сом
                  </span>
                  <button onClick={() => this.handleClick(item._id)} className="item-button">Подробнее</button>
                </div>
                
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
    goods: state.goods,
    order: state.order
  }
}

export default withRouter(connect(mapStateToProps)(GoodsList));