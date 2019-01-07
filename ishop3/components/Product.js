import React from 'react';
import PropTypes from 'prop-types';

import './Product.css';
import Table from "./Table";

class Product extends React.Component {

    static propTypes = {
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            item: PropTypes.number.isRequired,
        }),
    };

    render() {
        return (
            <div key={`product-${this.props.product.id}`}>
                <h2 className='Name'>{this.props.product.name}</h2>
                <p className='Price'>
                    Price: {this.props.product.price}
                </p>
                <p className='Item'>
                    Item: {this.props.product.item}
                </p>
                <img src={this.props.product.url} alt={this.props.product.name}/>
            </div>
        );
    }

};

export default Product;