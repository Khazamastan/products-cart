import React from 'react';
import _ from "lodash";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectGetCartItems, makeSelectGetProducts } from "containers/App/selectors";
import styled from 'styled-components';
import { increment, decrement, changeQunatity } from "containers/App/actions";
import Wrapper from "./Wrapper";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var { products, cartItems } = this.props;
    cartItems = cartItems.toArray();
    cartItems = _.keyBy(cartItems, "id");

    const userListContent = (
      <Wrapper>
        {products.map((item_data, i) => {
          const id = item_data._id;
          const inCart = cartItems[id];
          return (
            <div className="product-box" key={i}>
              <div className="box">
                <img src={item_data.img} />
                <div className="desc">
                  <p>{item_data.brandName}</p>
                  <p><strong>{item_data.productName}</strong></p>
                  <p>{item_data.desc}</p>
                  <p><strong>Rs {item_data.price}</strong></p>
                  {!(inCart && inCart.qty) ?
                    <p className='add-to-cart'>
                      <button className="btn" onClick={this.addQuantity.bind(this, id)}>Add To Cart</button>
                    </p>
                    :
                    <p className="add-to-cart-input">
                      <button className="btn" onClick={this.removeQuantity.bind(this, id)}>-</button>
                      <input type="number" value={inCart.qty} onChange={this.changeQunatity.bind(this, id)} />
                      <button className="btn" onClick={this.addQuantity.bind(this, id)}>+</button>
                    </p>
                  }
                </div>
              </div>
            </div>
          )
        })}
      </Wrapper>);

    return userListContent;
  }
  addQuantity(id) {
    this.props.increment(id)
  }
  removeQuantity(id) {
    this.props.decrement(id)
  }
  changeQunatity(id, e) {
    const qty = e.target.value;
    if (qty)
      this.props.changeQunatity(id, qty)
  }
}



ProductsPage.propTypes = {
  products: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
};

export function mapDispatchToProps(dispatch) {
  return {
    dispatch: dispatch,
    increment: (id) => {
      dispatch(increment(id));
    },
    decrement: (id) => {
      dispatch(decrement(id));
    },
    changeQunatity: (id, qty) => {
      dispatch(changeQunatity(id, qty));
    }
  }
}

const mapStateToProps = createStructuredSelector({
  products: makeSelectGetProducts(),
  cartItems: makeSelectGetCartItems()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(ProductsPage);
