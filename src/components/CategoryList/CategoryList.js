import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CategoryList.css';
import { fetchCategory } from '../../redux/actions/category';
import { fetchFilteredGoods } from '../../redux/actions/goodsList';

class CategoryList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategory())
  }
  
  handleClick = (cat) =>{
    this.props.dispatch(fetchFilteredGoods(cat))
  }
 
  render() {
    const categoryList = this.props.categoryList;
    
    
    return (
      <div className="category-list">
          {categoryList.map((item, index) => 
            (
                <div className="category-item" key={index} onClick={() => this.handleClick(item.category)}>
                  {item.categoryName}
                </div>
            )
          )}
        {/* <div className="sunduki"  onClick={() => this.handleClick("SUNDUK")}> */}
         {/* Сундуки */}
        {/* </div> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    categoryList: state.category
  }
}

export default connect(mapStateToProps)(CategoryList);