import React from 'react';
import { connect } from 'react-redux';
 
import { getProducts } from '../actions';

class Products extends React.PureComponent {
    render() {
        return (
            <p>productList</p>
        );
    }
}

export default Products;