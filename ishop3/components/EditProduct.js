import React from 'react';
import PropTypes from 'prop-types';

import './EditProduct.css';

class EditProduct extends React.Component {

    static propTypes = {
        product: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            url: PropTypes.string.isRequired,
            item: PropTypes.number.isRequired,
        }),
        cbStateProduct: PropTypes.any,
    };

    state = {
        product: this.props.product,
    };

    changeDiv(e, type) {
        this.state.product[type] = e.target.value;
    };

    saveChangeProduct() {
        this.props.cbStateProduct = this.state.product;
    };

    render() {
        return (
            <div key={`productEdit-${this.state.product.id}`}>
                ID: <p>{this.state.product.id}</p>
                Name: <input defaultValue={this.state.product.name} onChange={(e) => this.changeDiv(e, 'name')}/>
                Price: <input defaultValue={this.state.product.price} onChange={(e) => this.changeDiv(e, 'price')}/>
                url: <input defaultValue={this.state.product.url} onChange={(e) => this.changeDiv(e, 'url')}/>
                Quantity: <input defaultValue={this.state.product.item} onChange={(e) => this.changeDiv(e, 'item')}/>
                <button onClick={this.saveChangeProduct}>Save</button>
                <button>Cancel</button>
            </div>

        );
    };

}

export default EditProduct;
