import React from 'react';
import _ from "lodash";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectGetCartItems,
  makeSelectGetProducts,
  makeSelectGetSortBy,
  makeSelectGetCurrentPage,
  makeSelectGetLoadMore,
  makeSelectFetchProducts,
  makeSelectGetMode
} from "containers/App/selectors";
import styled from 'styled-components';
import {
  increment,
  decrement,
  changeQunatity,
  getLoadProducts,
  getLoadMoreProducts,
  changeMode
} from "containers/App/actions";
import { OuterWrapper, Wrapper } from "./Wrapper";
import Product from "components/Product";

class ProductsPage extends React.Component {
  constructor(props) {
    super(props);
  }
  onChangeFilter = (e) => {
    const value = e.target.value;
    this.addScrollEvent();
    this.props.loadProducts(value);
  }
  getPrice(item) {
    return Math.round(item.mrp * (100 / item.discount), 2);
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
  onScroll = _.debounce(() => {
    var { hasLoadMore, currentPage, loadMoreProducts, fetchingProducts } = this.props;
    // if (!fetchingProducts) {
    if ((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 300)) {
      if (hasLoadMore) {
        currentPage = currentPage || 1;
        currentPage++;
        loadMoreProducts(currentPage);
      } else {
        this.removeScrollEvent();
      }
    }
    // }
  }, 100);

  componentDidMount() {
    window.scrollTo(0, 0);
    this.addScrollEvent()
  }
  addScrollEvent() {
    window.addEventListener('scroll', this.onScroll, false);
  }
  removeScrollEvent() {
    window.removeEventListener('scroll', this.onScroll, false);
  }
  componentWillUnmount() {
    this.removeScrollEvent();
  }
  changeMode(mode){
    this.props.changeMode(mode)
  }
  render() {
    var { data, cartItems, mode } = this.props;
    var products = data.products || [];
    var sortby = (data && data.sort.options) || {};
    cartItems = cartItems.toArray();
    cartItems = _.keyBy(cartItems, "id");

    const userListContent = (
      <OuterWrapper>
        <div>
          <div className="pull-left view-mode">
            <a className={mode == "grid" ? "active" : ""} onClick={this.changeMode.bind(this, "grid")}>Grid</a> | 
            <a className={mode == "row" ? "active" : ""} onClick={this.changeMode.bind(this, "row")}>Row</a>
          </div>
          <select className="pull-right" onChange={this.onChangeFilter}>
            {_.keys(sortby).map((sortItem) => {
              return <option key={sortItem} value={sortItem}>{sortby[sortItem]}</option>
            })}
          </select>
        </div>
        <Wrapper>
          {products.map((item_data, i) => {
            const id = item_data.id;
            const inCart = cartItems[id];
            var item = item_data.defaultVariant;
            return (
              <Product
                key={id}
                i={i}
                inCart={inCart}
                item={item}
                mode={mode}
                item_data={item_data}
                getPrice={this.getPrice}
                removeQuantity={this.removeQuantity.bind(this, id)}
                changeQunatity={this.changeQunatity.bind(this, id)}
                addQuantity={this.addQuantity.bind(this, id)}
              />)
          })}
        </Wrapper>
      </OuterWrapper>);

    return userListContent;
  }
}

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
    },
    loadProducts: (sortBy) => {
      dispatch(getLoadProducts(sortBy));
    },
    loadMoreProducts: (page) => {
      dispatch(getLoadMoreProducts(page));
    },
    changeMode: (mode) => {
      dispatch(changeMode(mode));
    }
  }
}

const mapStateToProps = createStructuredSelector({
  data: makeSelectGetProducts(),
  cartItems: makeSelectGetCartItems(),
  sortBy: makeSelectGetSortBy(),
  currentPage: makeSelectGetCurrentPage(),
  hasLoadMore: makeSelectGetLoadMore(),
  fetchingProducts: makeSelectFetchProducts(),
  mode : makeSelectGetMode()
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(ProductsPage);
