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
        name: this.props.product.name,
        price: this.props.product.price,
        url: this.props.product.url,
        item: this.props.product.item,
    };

    changeDiv(e, type) {
        let a = {};
        a[type] = e.target.value;
        this.setState(a);
    };

    saveChangeProduct() {
        //this.props.cbStateProduct = this.state.product;
    };

    render() {
        return (
            <div key={`productEdit-${this.props.product.id}`}>
                ID: <p>{this.props.product.id}</p>
                Name: <input defaultValue={this.state.name} onChange={(e) => this.changeDiv(e, 'name')}/>
                Price: <input defaultValue={this.state.price} onChange={(e) => this.changeDiv(e, 'price')}/>
                url: <input defaultValue={this.state.url} onChange={(e) => this.changeDiv(e, 'url')}/>
                Quantity: <input defaultValue={this.state.item} onChange={(e) => this.changeDiv(e, 'item')}/>
                <button onClick={this.saveChangeProduct}>Save</button>
                <button>Cancel</button>
            </div>

        );
    };

}

export default EditProduct;
