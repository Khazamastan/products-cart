import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectGetCartItems, makeSelectGetProducts, } from "containers/App/selectors";
import { changeQunatity } from "containers/App/actions";
import _ from "lodash";
import Wrapper from "./Wrapper";

class CartPage extends React.Component {
  constructor(props) {
    super(props);
  }
  getTotal(cartItems, products) {
    const sum = cartItems.reduce((total, item) => {
      const prod = products[item.id];
      total += parseInt(prod.price) * parseInt(item.qty);
      return total;
    }, 0);

    return sum;
  }
  render() {
    const products = _.keyBy(this.props.products.toArray(), "_id");
    const cartItems = this.props.cartItems.toArray();
    const userListContent = (
      <Wrapper>
        <h3>Your Cart Summary</h3>
        <div className="summary">
          <div>
            <p>Items in cart</p>
            <p><strong>{cartItems.length}</strong></p>
          </div>
          <div>
            <p>Total Rs</p>
            <p><strong>$ {this.getTotal(cartItems, products)}</strong></p>
          </div>
        </div>
        <div id="head">
          <p className="item bold">Item</p>
          <p className="quantity bold">Qty</p>
          <p className="total bold">Total</p>
          <p className="del bold"></p>
        </div>

        {cartItems.map((cart_item_data, i) => {
          const item_data = products[cart_item_data.id];
          return (
            <div className="row" key={i}>
              {/* <img src={item_data.img}/> */}
              <p className="item">{item_data.productName}</p>
              <p className="quantity">{cart_item_data.qty}</p>
              <p className="total">$ {item_data.price}</p>
              <p className="del" onClick={this.removeItem.bind(this, cart_item_data.id)}>Remove</p>
            </div>
          );
        })
        }
      </Wrapper>);

    return userListContent;
  }
  removeItem(id) {
    this.props.changeQunatity(id, 0)
  }

}



CartPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  searchRequest: PropTypes.func,
  query: PropTypes.string,
  artists: PropTypes.any,
  loggedInUser: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};


export function mapDispatchToProps(dispatch) {
  return {
    changeQunatity: (id, qty) => {
      dispatch(changeQunatity(id, qty));
    }
  };
}

const mapStateToProps = createStructuredSelector({
  cartItems: makeSelectGetCartItems(),
  products: makeSelectGetProducts(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(CartPage);
