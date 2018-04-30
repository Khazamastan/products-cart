import React from 'react';

var Product = (props) => {
    const { item, item_data, addQuantity, getPrice, removeQuantity, changeQunatity, i, inCart, mode} = props;
    return (
        <div className={"product-box " + mode} key={i}>
            <div className="box">
                <div className="img-container">
                    <img src={item.images[0]} />
                </div>
                <div className="desc">
                    {item.stock ?
                        <p className="add-to-cart-input">
                            {(inCart && inCart.qty) ?
                                <span>
                                    <button className="btn" onClick={removeQuantity}>-</button>
                                    <input value={inCart.qty} onChange={changeQunatity} />
                                </span>
                                :
                                null
                            }
                            <button className="btn" onClick={addQuantity}>+</button>
                        </p>
                        :
                        <p className="no-stock"> No Stock</p>
                    }
                    <p>{item.full_name}</p>
                    <p><strong>{item_data.brand && item_data.brand.name}</strong></p>
                    <p><span>Rs {getPrice(item)}</span><span className="strike"> {item.mrp}</span ></p>
                </div>
            </div>
        </div>
    )
}

export default Product;