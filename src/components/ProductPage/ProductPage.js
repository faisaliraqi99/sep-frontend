import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addToOrder } from '../../redux/actions/order';
import './ProductPage.css'

class ProductPage extends Component {
    handleAdd = () => {
        this.props.dispatch(addToOrder(this.props.order, this.props.data))
    }
    render() {
        const data = this.props.data;

        console.log() 
        return (
            <div className="product-page">
              
                <h1 className='title' > {data.name} </h1>
                
                <div className='productImg' style={{backgroundImage: `url(http://localhost:3000/img/${data.img})`}}/>
                
                <div className='productContent'>
                    <div className='productDesc'>
                        <div className='productTitle'></div>
                        <h2>  Описание  </h2>
                        <span className='productDescText'>
                            {data.description}
                        </span>
                    </div>
                  
                    <div className='productOpt'>
                        <h2> Характеристика </h2>
                        <span className='productOptText'>
                            {data.options}
                        </span>
                        <div className="pronuctFooter">
                            <span>{data.price}</span>
                            <button className="toChestBtn" onClick={this.handleAdd}>добавить в сундук</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state =>{
    console.log("__", state.order)
    return {
        order: state.order
    };
};

export default connect(mapStateToProps)(ProductPage);