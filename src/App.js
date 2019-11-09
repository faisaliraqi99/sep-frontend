import React from 'react';
import { connect } from 'react-redux';

import { fetchGoods } from './redux/actions/goodsList';
import Routes from './Routes';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchAllGoods()
  }
  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchAllGoods: () => dispatch(fetchGoods())
  }
}

export default connect(null, mapDispatchToProps)(App);
