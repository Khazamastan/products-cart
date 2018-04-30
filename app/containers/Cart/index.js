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
      const prod = (products[item.id] && products[item.id].defaultVariant) || {};
      total += parseInt(prod.mrp*(100/prod.discount)) * parseInt(item.qty);
      return total;
    }, 0);

    return Number(sum.toFixed(1));
  }
  render() {
    const products = _.keyBy(this.props.data.products, "id") || {};
    const cartItems = products && this.props.cartItems.toArray() || [];
    var userListContent = <div></div>;
    if(_.keys(products).length){
      userListContent = (
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
            const item_data = cart_item_data;
            if(!item_data) return null;
            var item = item_data.defaultVariant;
            return (
              <div className="row" key={i}>
                {/* <img src={item_data.img}/> */}
                <p className="item">{item.full_name}</p>
                <p className="quantity">{cart_item_data.qty}</p>
                <p className="total">{this.getPrice(item)}</p>
                <p className="del" onClick={this.removeItem.bind(this, cart_item_data.id)}>Remove</p>
              </div>
            );
          })
          }
        </Wrapper>);
    }
    return userListContent;
  }
  getPrice(item){
    var price = item.mrp*(100/item.discount);
    return  Number(price.toFixed(1)); // 6.7
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
  data: makeSelectGetProducts(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(CartPage);
