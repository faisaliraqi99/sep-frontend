import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class GoodsList extends Component {
  handleClick = (id) => {
    // console.log(id)
    this.props.history(`/goods/${id}`)
  }
  render() {
    const goods = this.props.goods;
    
    return (
      <>
        {goods.map(item => (
          <div className="good" style={{backgroundImage: `url(http://localhost:8000/img/${item.img})`}} onClick={() => this.handleClick(item._id)} key={item._id}>
            <div className="item-img-darkness"></div>
            
            <h3 className="item-goods">
              {item.name}
            </h3>
            
            <span className="item-price">
              {item.price}
            </span>
          </div>
        ))}
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