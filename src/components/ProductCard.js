import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = (props) => {
    const { name, img, shortDescription, price, topSelling } = props;

    return (
        <article className="product-card">
            <picture className="product-card__media">
                <img className="product-card__img" 
                     alt={name}
                     src={img} />
            </picture>
            <h2 className="product-card__title">{name}</h2>
            <span className="product-card__price">{price} $</span>
            <div className="product-card__short-description">
                {shortDescription.length > 100 ? `${shortDescription.substring(0, 100)}...` : shortDescription}
            </div>

            {topSelling && <div className="product-card__label">Top</div>}
        </article>
    );
};

ProductCard.proptypes = {
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    shortDescription: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    topSelling: PropTypes.bool.isRequired,
};

export default ProductCard;