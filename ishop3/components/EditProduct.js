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
        cbSaveProduct: PropTypes.func.isRequired,
    };

    state = {
        id: this.props.product.id,
        name: this.props.product.name,
        price: this.props.product.price,
        url: this.props.product.url,
        item: this.props.product.item,
        error: { // 0 - OK; 1 - empty; 2 - type; 3 - value;
            name: {code: 0, text: ''},
            price: {code: 0, text: ''},
            url: {code: 0, text: ''},
            item: {code: 0, text: ''},
        },
        hasError: false,
    };

    componentWillReceiveProps = (newProps) => {
        this.setState({id: newProps.product.id, name: newProps.product.name, price: newProps.product.price,
            url: newProps.product.url, item: newProps.product.item,});
    };

    changeDiv(e, type) {
        let a = {};
        a[type] = e.target.value;
        this.setState(a);
    };

    validationInput(e, type, name) {
        let EO = e.target.value,
            {error} = this.state;

        if (EO === '') {
            error[name] = {code: 1, text: `Поле ${name} не должно быть пустым`};
            this.setState({error: error});
            this.hasError();
            return;
        };

        if (type === 'number') {
            if (isNaN(EO)) {
                error[name] = {code: 2, text: `Поле ${name} должно быть ${type}`};
                this.setState({error: error});
                this.hasError();
                return;
            };

            if (Number(EO) < 0) {
                error[name] = {code: 3, text: `Поле ${name} не должно быть отрицательным`};
                this.setState({error: error});
                this.hasError();
                return;
            }
        };

        error[name] = {code: 0, text: ''};
        this.setState({error: error});
        this.hasError();
    }

    hasError() {
        for (let prop in this.state.error) {
            if (this.state.error[prop].code) {
                this.setState({hasError: true});
                return;
            }
        }
        this.setState({hasError: false});
    }

    saveChangeProduct = () => {
        let product = {
            id: Number(this.state.id),
            name: String(this.state.name),
            price: Number(this.state.price),
            url: String(this.state.url),
            item: Number(this.state.item),
        };

        this.props.cbSaveProduct(product);
    };

    render() {
        return (
            <div key={`productEdit-${this.state.id}`}>
                ID: {this.state.id}
                <div className='Name'>
                    Name: <input defaultValue={this.state.name}
                                 onBlur={(e) => this.validationInput(e, 'string', 'name')}
                                 onChange={(e) => this.changeDiv(e, 'name')}/>
                    {this.state.error.name.code ? <span className='Error'>{this.state.error.name.text}</span> : null}
                </div>
                <div className='Price'>
                    Price: <input defaultValue={this.state.price}
                                  onBlur={(e) => this.validationInput(e, 'number', 'price')}
                                  onChange={(e) => this.changeDiv(e, 'price')}/>
                    {this.state.error.price.code ? <span className='Error'>{this.state.error.price.text}</span> : null}
                </div>
                <div className='URL'>
                    url: <input defaultValue={this.state.url}
                                onBlur={(e) => this.validationInput(e, 'string', 'url')}
                                onChange={(e) => this.changeDiv(e, 'url')}/>
                    {this.state.error.url.code ? <span className='Error'>{this.state.error.url.text}</span> : null}
                </div>
                <div className='Item'>
                    Item: <input defaultValue={this.state.item}
                                 onBlur={(e) => this.validationInput(e, 'number', 'item')}
                                 onChange={(e) => this.changeDiv(e, 'item')}/>
                    {this.state.error.item.code ? <span className='Error'>{this.state.error.item.text}</span> : null}
                </div>
                <button onClick={this.saveChangeProduct} disabled={this.state.hasError}>Save</button>
                <button>Cancel</button>
            </div>

        );
    };

}

export default EditProduct;
