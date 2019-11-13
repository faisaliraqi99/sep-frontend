import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../Admin/Admin.css'
import { getOrders } from '../../redux/actions/admin';

class Admin extends Component {
  componentDidMount(){
    this.props.dispatch(getOrders());
  }
  render() {
    return (
      <div className="admin">
        <div className="container">
          <table className="tableAdmin">
            <caption>Заказы</caption>
            <tr> 
              <th>Name</th>
              <th>Phone Number</th>
              <th>Goods</th>
              <th>price</th>
            </tr>
            {this.props.orders.map((item)=>{
              console.log(item)
              return(
                <>
                <tr key={item}>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>

                    <table>
                      {item.goods.map((item)=>{
                        return(
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                          </tr>
                        )
                      })}
                    </table>
                  </td>
                </tr>
              </>
              )
            })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps)(Admin);