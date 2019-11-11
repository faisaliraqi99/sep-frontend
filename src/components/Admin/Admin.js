import React, { Component } from 'react';

import '../Admin/Admin.css'

class Admin extends Component {
  render() {
    return (
      <div className="admin">
        <div className="container">
          <table className="tableAdmin">
          <tr>
              <th>Date</th>
              <th>Status</th> 
              <th>Name</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
            <tr>
              <td>29.01.2019</td>
              <td>accepted</td>
              <td>Bek</td>
              <td>0706201324</td>
              <td>Ak-Orgo</td>
            </tr> 
            <tr>
              <td>22.01.2019</td>
              <td>not accepted</td>
              <td>Samat</td>
              <td>0706201323</td>
              <td>Pishpek</td>
            </tr>
            <tr>
              <td>21.01.2019</td>
              <td>Done</td>
              <td>Emir</td>
              <td>0706201322</td>
              <td>Alamedin</td>
            </tr>
            
              
          </table>
        </div>
      </div>
    );
  }
}

export default Admin;