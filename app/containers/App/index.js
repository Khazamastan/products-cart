/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import all the third party stuff
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { push } from 'react-router-redux';
import reducer from '../App/reducer';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { makeSelectGetCartItems } from "./selectors";
//components
// Import route containers
import Products from 'containers/Products';
import Cart from 'containers/Cart';
import saga from "./saga";
import { getLoadProducts } from "./actions";

const AppWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  background :transparent url(${ props => props.bg}) center/cover;
  transition : background 0.3s ease-in;
`;

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  static contextTypes = {
    router: PropTypes.object
  }
  render() {
    var { cartItems } = this.props;
    cartItems = cartItems.toArray();
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - Product Cart"
          defaultTitle="Product Cart"
        >
        </Helmet>
        <h1>Products</h1>
        <div id="app">
          <Products/>
          <Cart/>
        </div>

      </AppWrapper>
    );
  }
  componentDidMount(){
    this.props.loadProducts();
  }
}

App.contextTypes = {
  store: PropTypes.object,
  router: PropTypes.object
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    loadProducts: () => {
      dispatch(getLoadProducts());
    }
  }
}

const mapStateToProps = createStructuredSelector({
  cartItems : makeSelectGetCartItems()
});

const withSaga = injectSaga({ key: 'App', saga });
const withReducer = injectReducer({ key: 'App', reducer });
const withConnect = connect(mapStateToProps, mapDispatchToProps);


export default withRouter(compose(
  withSaga,
  withReducer,
  withConnect
)(App));
