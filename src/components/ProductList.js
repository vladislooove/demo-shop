import React from 'react';
import PropTypes from 'prop-types';

import ProductCard from './ProductCard';
import Loader from './Loader';

const ProductList = (props) => {
    const { isLoading, products, topSelling, title } = props;

    return (
        <section className="products-list">            
            <h2 className="product-list__title">{title}</h2>

            {isLoading && <Loader />}

            <div className="product-list__content">

                {products.length > 0 && !isLoading && 
                    products.map((product) => {
                        const { id, name, image_link, short_description, price, expires } = product;

                        return (
                            <ProductCard
                                key={id}
                                name={name}
                                img={image_link}
                                shortDescription={short_description}
                                price={price}
                                topSelling={topSelling}
                                expirationDate={expires}
                            />    
                        );
                    })
                }

                {!products.length > 0 && !isLoading &&
                    <p>There are no items yet...</p>
                }
            </div>
        </section>
    );
};

ProductList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    topSelling: PropTypes.bool,
};

export default ProductList;