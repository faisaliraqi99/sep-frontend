import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


import { addToOrder } from '../../redux/actions/order';
import './ProductPage.css'

class ProductPage extends Component {
    handleAdd = () => {
        this.props.dispatch(addToOrder(this.props.order, this.props.data));
        this.props.history.push('/goods/')
    }
    render() {
        const data = this.props.data;

        console.log() 
        return (
            <div className="product-page">
                
                <ul className='slider'>
                    <li className='image'>
                    <img alt={data.img} className='product-img' src={`http://localhost:8000/img/${data.img}`}/>
                    </li>
                </ul>
                
                <div className="productBody"> <div className='productContent'> 
                        <h1 className='title' > {data.name} </h1>
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
                        </div>
                        <span className='productPrice'>{data.price}</span>
                        <button className="toChestBtn" onClick={this.handleAdd}>добавить в сундук</button>
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

export default withRouter(connect(mapStateToProps)(ProductPage));