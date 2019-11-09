import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CategoryList.css';

class CategoryList extends Component {
  handleClick = (cat) =>{
    console.log(cat)
  }
  
  render() {
    return (
      <div className="category-list">
        {this.props.categoryList.map((item, index) => (
          <div key={index} onClick={() => this.handleClick(item.category)}>{item.categoryName}</div>
        ))}
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