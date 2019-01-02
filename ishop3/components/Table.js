import React from 'react';
import PropTypes from 'prop-types';

import TableName from './TableName';
import TableHead from './TableHead';
import TableBody from "./TableBody";
import Product from './Product';

import './Table.css';
import EditProduct from "./EditProduct";

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
        workMode: 0,
        product: false,
    };


    deleteElement = (key) => {
        if (confirm('Are you sure?'))
            this.setState({myPropsProducts: this.state.myPropsProducts.filter(el => el.id !== key)});
    };

    editElement = (e, key) => {
        e.stopPropagation();
        e.preventDefault();

        this.setState({workMode: 1, product: this.state.myPropsProducts.filter(el => el.id === key)[0]});
    };

    clickElement = (e, key) => {
        e.stopPropagation();
        e.preventDefault();

        if (this.state.currentElement)
            this.state.currentElement.className = this.state.currentElement.className.replace(/SelectedElement/g, "");

        let EO = e.currentTarget;

        this.setState({currentElement: EO});
        EO.className = 'SelectedElement';
        this.setState({workMode: 0,
            product: this.state.myPropsProducts.filter(el => el.id === key)[0]});
    };


    render() {
        console.log(this.state.workMode);
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
                <button>New product</button>
                {this.state.product && ( this.state.workMode === 1 ?
                    <EditProduct product={this.state.product} cbStateProduct={this.state.product} /> :
                        <Product product={this.state.product} /> ) }
            </div>
        )
    }

};

export default Table;