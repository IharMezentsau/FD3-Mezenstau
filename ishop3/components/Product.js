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
                Price: <h2 className='Price'>{this.props.product.price}</h2>
                Item: <h2 className='Item'>{this.props.product.item}</h2>
                <img src={this.props.product.url} alt={this.props.product.name}/>
            </div>
        );
    }

};

export default Product;