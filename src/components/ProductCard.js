import React from 'react';
import PropTypes from 'prop-types';
import { FormattedRelative } from 'react-intl';
import { Link } from 'react-router-dom';

import Price from './Price';

const ProductCard = (props) => {
    const { id, name, img, shortDescription, price, topSelling, expirationDate } = props;

    return (
        <Link className="product-card" to={`/products/${id}`}>
            <picture className="product-card__media">
                <img className="product-card__img" 
                     alt={name}
                     src={img} />
            </picture>
            <h2 className="product-card__title">{name}</h2>
            <span className="product-card__price">
                <Price price={price} />
            </span>
            <div className="product-card__short-description">
                {shortDescription.length > 100 ? `${shortDescription.substring(0, 100)}...` : shortDescription}
            </div>

            {topSelling && expirationDate &&
                <small className="product-card__tip">
                    Expires <FormattedRelative value={expirationDate} />
                </small>
            }

            {topSelling && <div className="product-card__label">Top</div>}
        </Link>
    );
};

ProductCard.proptypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    topSelling: PropTypes.bool,
    expirationDate: PropTypes.string,
};

export default ProductCard;