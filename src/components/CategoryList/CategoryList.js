import React, { Component } from 'react';
import { connect } from 'react-redux';

import './CategoryList.css';
import { fetchCategory } from '../../redux/actions/category'

class CategoryList extends Component {
  componentDidMount() {
    this.props.dispatch(fetchCategory())
  }
  
  handleClick = (cat) =>{
    console.log(cat)
  }
 
  render() {
    const categoryList = this.props.categoryList;
    
    
    return (
      <div className="category-list">
        <div className="category-list-list">
          {categoryList.map((item, index) => {
            if (item.category !== "SUNDUK"){
              return (
                <div className="category-item" key={index} onClick={() => this.handleClick(item.category)}>
                  {item.categoryName}
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
        <div className="sunduki"  onClick={() => this.handleClick("SUNDUK")}>
         Сундуки
        </div>
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