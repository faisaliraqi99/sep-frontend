import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { connect } from 'react-redux';

import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Goods from './components/Goods/Goods';
import Admin from './components/Admin/Admin';
import Order from './components/Order/Order';
import ProductPage from './components/ProductPage/ProductPage';
import Footer from './components/Footer/Footer';

class Routes extends React.Component {
  render() {
    const allGoods = this.props.allGoods;
    return (
      <Router>
        <NavBar />
          <Route exact path="/" component={Home} />
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/goods" component={Goods} />
          <Route exact path="/order" component={Order} />
          {allGoods.map(item => (
            <Route key={item._id} exact path={`/goods/${item._id}`} >
              <ProductPage
                data={item}
              />
            </Route>
          ))}
        <Footer/>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  console.log(state.goods.all)
  return {
    allGoods: state.goods.all
  }
}

export default connect(mapStateToProps)(Routes);