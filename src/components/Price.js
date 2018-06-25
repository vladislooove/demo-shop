import React from 'react';
import PropTypes from 'prop-types';
import { FormattedNumber } from 'react-intl';

const Price = (props) => {
    const price = props.price;

    return (
        <span className="price">
            <FormattedNumber 
                value={price} 
                // eslint-disable-next-line
                style="currency"
                currency="USD"
                minimumFractionDigits={2} /> 
        </span>
    );
};

export default Price;