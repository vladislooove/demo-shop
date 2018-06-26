import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import ProductCard from './ProductCard';
import Loader from './Loader';

const ProductList = (props) => {
    const { isLoading, products, topSelling, title, loadMore, hasMoreItems } = props;

    return (
        <section className="products-list">            
            <h2 className="product-list__title">
                <FormattedMessage id={title} />
            </h2>

            <div className="product-list__content">

                {products.length > 0 && 
                    products.map((product) => {
                        const { id, name, img, shortDescription, price, expires } = product;

                        return (
                            <ProductCard
                                key={id}
                                id={id}
                                name={name}
                                img={img}
                                shortDescription={shortDescription}
                                price={price}
                                topSelling={topSelling}
                                expirationDate={expires}
                            />    
                        );
                    })
                }

                {!products.length > 0 && !isLoading &&
                    <p><FormattedMessage id="msg.no_items" /></p>
                }
            </div>
            {isLoading && <Loader />}

            {loadMore && hasMoreItems && !isLoading &&
                <div className="product-list__footer">
                    <button className="product-list__load-more"
                            onClick={loadMore}>
                        <FormattedMessage id="btn.load_more" />
                    </button>
                </div>
            }
        </section>
    );
};

ProductList.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    products: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    topSelling: PropTypes.bool,
    loadMore: PropTypes.func,
    hasMoreItems: PropTypes.bool,
};

export default ProductList;