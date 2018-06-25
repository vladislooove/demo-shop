import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

const Price = (props) => {
    const price = props.price;

    return (
        <span className="price">
            <FormattedNumber 
                value={price ? price : 0} 
                // eslint-disable-next-line
                style="currency"
                currency="USD"
                minimumFractionDigits={2} /> 
        </span>
    );
};

Price.proptypes = {
    price: PropTypes.number.isRequired,
};

export default Price;