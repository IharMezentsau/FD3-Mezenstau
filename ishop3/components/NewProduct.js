import React from 'react';
import PropTypes from 'prop-types';

import './NewProduct.css';

class NewProduct extends React.Component {

    static propTypes = {
        cbSaveProduct: PropTypes.func.isRequired,
        cbCancelProduct: PropTypes.func.isRequired,
    };

    state = {
        name: '',
        item: '',
        price: '',
        url: '',
        error: { // 0 - OK; 1 - empty; 2 - type; 3 - value;
            name: {code: 1, text: `Поле name не должно быть пустым`},
            price: {code: 1, text: `Поле price не должно быть пустым`},
            url: {code: 1, text: `Поле url не должно быть пустым`},
            item: {code: 1, text: `Поле item не должно быть пустым`},
        },
        hasError: true,
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
    };

    hasError() {
        for (let prop in this.state.error) {
            if (this.state.error[prop].code) {
                this.setState({hasError: true});
                return;
            }
        }
        this.setState({hasError: false});
    };

    saveChangeProduct = () => {
        let product = {
            name: String(this.state.name),
            price: Number(this.state.price),
            url: String(this.state.url),
            item: Number(this.state.item),
        };

        this.props.cbSaveProduct(product);
    };

    render() {
        return (
            <div>
                <div className='Name'>
                    Name: <input defaultValue={this.state.name}
                                 onBlur={(e) => this.validationInput(e, 'string', 'name')}
                                 onChange={(e) => {
                                     this.changeDiv(e, 'name')
                                     this.validationInput(e, 'string', 'name');
                                 }}/>
                    {this.state.error.name.code ? <span className='Error'>{this.state.error.name.text}</span> : null}
                </div>
                <div className='Price'>
                    Price: <input defaultValue={this.state.price}
                                  onBlur={(e) => this.validationInput(e, 'number', 'price')}
                                  onChange={(e) => {
                                      this.changeDiv(e, 'price');
                                      this.validationInput(e, 'number', 'price');
                                  }}/>
                    {this.state.error.price.code ? <span className='Error'>{this.state.error.price.text}</span> : null}
                </div>
                <div className='URL'>
                    url: <input defaultValue={this.state.url}
                                onBlur={(e) => this.validationInput(e, 'string', 'url')}
                                onChange={(e) => {
                                    this.changeDiv(e, 'url');
                                    this.validationInput(e, 'string', 'url');
                                }}/>
                    {this.state.error.url.code ? <span className='Error'>{this.state.error.url.text}</span> : null}
                </div>
                <div className='Item'>
                    Item: <input defaultValue={this.state.item}
                                 onBlur={(e) => this.validationInput(e, 'number', 'item')}
                                 onChange={(e) => {
                                     this.changeDiv(e, 'item');
                                     this.validationInput(e, 'number', 'item');
                                 }}/>
                    {this.state.error.item.code ? <span className='Error'>{this.state.error.item.text}</span> : null}
                </div>
                <button onClick={this.saveChangeProduct} disabled={this.state.hasError}>Save</button>
                <button onClick={this.props.cbCancelProduct}>Cancel</button>
            </div>

        );
    };

}

export default NewProduct;
