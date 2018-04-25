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
import { makeSelectGetCartItems } from "./selectors";
//components
// Import route containers
import Products from 'containers/Products';
import Cart from 'containers/Cart';


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
        <h1>Masala's and Spices </h1>
        <div id="app">
          <Products/>
          {cartItems.length ? <Cart/> : null}
        </div>

      </AppWrapper>
    );
  }
}

App.contextTypes = {
  store: PropTypes.object,
  router: PropTypes.object
};


App.propTypes = {
  modalIsOpen: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  cartItems : makeSelectGetCartItems()
});


const withReducer = injectReducer({ key: 'App', reducer });

const withConnect = connect(mapStateToProps);


export default withRouter(compose(
  withReducer,
  withConnect
)(App));
