import React from 'react';
import PropTypes from 'prop-types';

import TableName from './TableName';
import TableHead from './TableHead';
import TableBody from "./TableBody";
import EditProduct from "./EditProduct";
import NewProduct from "./NewProduct";
import Product from './Product';

import './Table.css';

class Table extends React.Component {

    static propTypes = {
        tableName: PropTypes.string,
        tableHead: PropTypes.shape({
            idHead: PropTypes.number.isRequired,
            nameHead: PropTypes.string.isRequired,
            priceHead: PropTypes.string.isRequired,
            urlHead: PropTypes.string.isRequired,
            itemHead: PropTypes.string.isRequired,
            controlHead: PropTypes.string.isRequired,
        }),
        products: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                name: PropTypes.string.isRequired,
                price: PropTypes.number.isRequired,
                url: PropTypes.string.isRequired,
                item: PropTypes.number.isRequired,
            }),
        ),
    };

    state = {
        currentElement: false,
        myPropsProducts: this.props.products,
        workMode: 0, // 0-null; 1-Product; 2-EditProduct; 3-NewProduct;
        product: false,
    };

    defaultMode = () => {
        this.setState({product: false, workMode: 0});
    };

    deleteElement = (e, key) => {
        e.stopPropagation();
        e.preventDefault();
        if (this.state.workMode !== 0 && this.state.workMode !== 1)
            if (!confirm('Are you sure exit from this mode?')) return;

        if (confirm('Are you sure?'))
            this.setState({myPropsProducts: this.state.myPropsProducts.filter(el => el.id !== key)});
        if (this.state.product.id === key) this.defaultMode();
    };

    editElement = (e, key) => {
        e.stopPropagation();
        e.preventDefault();
        if (this.state.workMode !== 0 && this.state.workMode !== 1)
            if (!confirm('Are you sure exit from this mode?')) return;
        this.setState({workMode: 2, product: this.state.myPropsProducts.filter(el => el.id === key)[0]});
    };

    newElement = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (this.state.workMode !== 0 && this.state.workMode !== 1)
            if (!confirm('Are you sure exit from this mode?')) return;
        this.setState({workMode: 3});
    };

    saveElement = (newEl) => {
        let products = this.state.myPropsProducts.map(el => el.id === newEl.id ? newEl : el);
        this.setState({myPropsProducts: products});
        this.defaultMode();
    };

    saveNewElement = (newEl) => {
        let products = this.state.myPropsProducts,
            maxKey = Math.max.apply(null, products.map(el => el.id));
        newEl.id = ++maxKey;
        products.push(newEl);
        this.setState({myPropsProducts: products});
        this.defaultMode();
    };

    clickElement = (e, key) => {
        e.stopPropagation();
        e.preventDefault();

        if (this.state.workMode !== 0 && this.state.workMode !== 1)
            if (!confirm('Are you sure exit from this mode?')) return;

        if (this.state.currentElement)
            this.state.currentElement.className = this.state.currentElement.className.replace(/SelectedElement/g, "");

        let EO = e.currentTarget;

        this.setState({currentElement: EO});
        EO.className = 'SelectedElement';
        this.setState({workMode: 1,
            product: this.state.myPropsProducts.filter(el => el.id === key)[0]});
    };

    switchMode() {
        switch (this.state.workMode) {
            case 0: return null;
            case 1:
                return <Product product={this.state.product} />;
            case 2:
                return <EditProduct product={this.state.product} cbSaveProduct={this.saveElement}
                                    cbCancelProduct={this.defaultMode} />;
            case 3:
                return <NewProduct cbSaveProduct={this.saveNewElement} cbCancelProduct={this.defaultMode} />;
        }
    };

    render() {
        return (
            <div className='Table'>
                <TableName tableName={this.props.tableName}/>
                <table className={'Table'} key='100'>
                    <TableHead
                        idHead={this.props.tableHead.idHead}
                        nameHead={this.props.tableHead.nameHead}
                        priceHead={this.props.tableHead.priceHead}
                        urlHead={this.props.tableHead.urlHead}
                        itemHead={this.props.tableHead.itemHead}
                        controlHead={this.props.tableHead.controlHead} />
                    <TableBody products={this.state.myPropsProducts}
                               cbClickElement={this.clickElement}
                               cbDeleteElement={this.deleteElement}
                               cbEditElement={this.editElement} />
                </table>
                <button onClick={e => this.newElement(e)}>New product</button>
                {this.switchMode()}
            </div>
        )
    }

};

export default Table;