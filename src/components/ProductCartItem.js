import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';

import Price from '../components/Price';

const ProductCartItem = (props) => {
    const { id, img, name, price, shortDescription, added, onRemoveClick } = props;

    return (
        <div className="product-cart-item">
            <div className="product-cart-item__media">
                <img src={img} className="product-cart-item__img" alt={name} />
            </div>
            <div className="product-cart-item__info">
                <div className="product-cart-item__title">
                    {name}
                </div>
                <div className="product-cart-item__description">
                    {shortDescription}
                </div>
            </div>
            <div className="product-cart-item__price">
                <Price price={price} />
            </div>
            <div className="product-cart-item__date-added">
                <FormattedRelative value={added} />
            </div>
            <div className="product-cart-item__remove">
                <button className="product-cart-item__remove-btn"
                    onClick={ () => {onRemoveClick(id, added)}}>
                    Remove
                </button>
            </div>
        </div>
    );
};

export default ProductCartItem;